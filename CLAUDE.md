# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Visão geral

Xmutarn é um framework front-end web cuja característica central é **gerar CSS a partir de código C#**. As classes de CSS não são arquivos `.css` escritos à mão — elas são construídas por classes C# que herdam de `CSS`/`CSSMain` e produzem texto CSS via `ToCSS()`. O CSS final (`xmutarn.css` e `xmutarn.min.css`) é um artefato gerado, não uma fonte editável.

O código nas respostas, comentários, nomes de membros e mensagens de commit é escrito em **português (pt-BR)**. Mantenha esse padrão ao adicionar código novo.

## Estrutura da solução

A solução (`Xmutarn.sln`, .NET 8) tem quatro projetos:

- **`src/Xmutarn.Core`** (pacote NuGet `Xmutarn.Core`) — o motor de geração de CSS, sem nada específico do framework. Define `CSS`, `CSSMain`, `CSSSelector`, `CSSProperties`, funções CSS (`var`), tipos de valor (`CSSColor`, `CSSUnitValue`, etc.) e o `CSSFileWriter`. É a única dependência de quem só quer "gerar CSS a partir de C#".
- **`src/Xmutarn`** (pacote NuGet `Xmutarn`, SDK Razor) — o framework em si. Usa o Core para definir cores, temas, normalização, componentes (`Components/`) e utilitários (`Utils/`). O ponto de entrada agregador é `XmutarnCSS`. Os assets gerados ficam em `wwwroot/css`.
- **`src/Xmutarn.Web`** (SDK Web/Blazor) — o site de documentação (https://xmutarn.kempdec.com), Blazor Server interativo com localização (`Resources/*.resx`, múltiplas culturas). Referencia `Xmutarn` e os pacotes `KempDec.AppBase`/`KempDec.StarterDotNet`.
- **`tasks/Xmutarn.Badynet`** (`IsPackable=false`) — utilitário de linha de comando que regenera os arquivos CSS. É como o CSS é (re)compilado.

Os pacotes são empacotados em `published/` (`dotnet pack` → `PackageOutputPath`).

## Comandos

```powershell
# Compilar a solução inteira
dotnet build

# Regenerar os arquivos CSS (xmutarn.css + xmutarn.min.css em src/Xmutarn/wwwroot/css)
# Execute na raiz da solução — o programa localiza o .sln subindo a árvore de diretórios.
dotnet run --project tasks/Xmutarn.Badynet

# Rodar o site de documentação localmente
dotnet run --project src/Xmutarn.Web

# Empacotar os pacotes NuGet (saída em published/)
dotnet pack -p:PackageVersion=<versao>
```

Não há projeto de testes na solução.

**Sempre que alterar uma classe de CSS, rode o `Xmutarn.Badynet` para regenerar os arquivos em `wwwroot/css`** — caso contrário o CSS publicado fica fora de sincronia com o código C#.

## Como o motor de CSS funciona

Entender este fluxo exige ler vários arquivos do Core; é o ponto mais importante.

- **`CSS` (`Xmutarn.Core/CSS.cs`)** é a base de tudo. Herda de `List<CSSSelector>` e implementa `ICSSConvertible.ToCSS()`. Um `CSS` agrega três coisas que são concatenadas em ordem por `ToCSS()`: os seletores da própria lista, os CSS importados via `Import(CSS)` (`_cssList`), e texto CSS bruto via `Import(string)` / `operator +` (`_cssInText`). Operadores sobrecarregados (`css + outroCss`, `css + seletor`, `css + "texto"`) tornam a composição fluente.
- **Composição via `Import`**: a hierarquia inteira do framework é montada importando CSS uns dentro dos outros. `XmutarnCSS` importa cores, temas, `NormalizeCSS`, `GlobalCSS`, `ComponentsCSS` e `UtilsCSS`; `UtilsCSS` importa cada utilitário (`DisplayCSS`, `FlexCSS`, ...); e assim por diante. Para adicionar algo ao CSS final, crie a classe e a importe no agregador correspondente (`UtilsCSS`, `ComponentsCSS` ou `XmutarnCSS`).
- **`CSSMain`** é um `CSS` com `OnInitialized()` (chamado ao fim do construtor) e `FileName` (deriva o nome do arquivo do nome da classe, removendo o sufixo `css` e adicionando `.min` quando minificado) + `WriteToFile`. Use `CSSMain` para CSS que vira um arquivo; `CSS` para fragmentos importáveis.
- **`isMinified`** percorre toda a hierarquia. Cada classe gera duas saídas a partir do mesmo código C#; `CSSFileWriter.WriteToFiles<T>` gera as duas variações.
- **Seletores fluentes** (`CSS.Add`): `Add(".classe", e => e.fontWeight = ..., Breakpoint.Medias)`. A `Action<CSSSelector>` configura propriedades; `CSSProperties` expõe propriedades CSS como membros C# (`fontWeight`, `display`, `textAlign`...). `AddOrExtend` reaproveita um seletor quando as propriedades são idênticas (agrupa seletores com vírgula), `And` compõe seletores a partir de um anterior, e `Edit` registra uma alteração adiada a um seletor pelo nome.
- **Pontos de interrupção (responsividade)**: `Breakpoint.Medias` (`Helpers/Breakpoint.cs`) define `xs/sm/md/lg/xl`. Passar a lista para `Add` gera variantes com sufixo `__sm`, `__md`, etc., agrupadas em regras `@media` (`CSSMedia`) que `ToCSS()` materializa no fim. O breakpoint `xs` (min-width 0) é emitido sem `@media`.

### Migração do "CSS antigo" (`TempCSS`)

Boa parte dos utilitários ainda não foi migrada para a API fluente. Essas classes herdam de **`TempCSS`** (`src/Xmutarn/TempCSS.cs`) e simplesmente embutem strings de CSS legado: `ImportOldCSS()` (versão formatada) e `ImportOldMinCSS()` (versão minificada). Veja `Utils/DisplayCSS.cs` como exemplo. O alvo é refatorar essas classes para a API fluente baseada em `CSS.Add` (como `Utils/TypoCSS.cs` já faz). Ao mexer numa classe `TempCSS`, considere migrá-la; se mantiver o CSS embutido, edite **as duas** strings (formatada e minificada) para mantê-las consistentes.

## Convenções

- **Idioma**: tudo em português (identificadores de domínio mantêm nomes CSS em inglês como `fontWeight`, mas comentários XML-doc, nomes de métodos auxiliares e mensagens são em pt-BR).
- **Nomenclatura**: classes que geram CSS terminam com o sufixo `CSS` (`DisplayCSS`, `BtnCSS`). O `FileName` de um `CSSMain` depende disso.
- **`.editorconfig`** define o estilo (indentação 4 espaços, `end_of_line = crlf`, `insert_final_newline = false`, várias regras `dotnet_*`/`csharp_*` como `warning`). Respeite-o.
- **Mensagens de commit**: seguem o padrão Conventional Commits em português (`feat:`, `fix:`, `chore:`, `docs:`), com a descrição no infinitivo ("Adicionar o ...", "Corrigir um problema em que ..."). O `autorelease.config.json` depende desses prefixos e prefixos de frase para gerar as notas de release.

## CI/CD (`.github/workflows`)

- **`release.yml`**: dispara em push para `main` que toque `src/Xmutarn/**` ou `src/Xmutarn.Core/**`. Usa `kempdec/autorelease-action` (configurado por `autorelease.config.json`) para criar o release e então `dotnet pack` + push para NuGet e GitHub Packages.
- **`deploy.yml`**: dispara em push para `main` que toque `src/Xmutarn.Web/**`. Publica o site num IIS self-hosted via `appcmd`. É idempotente/auto-provisionável: cria o pool de aplicativos, a pasta (`vars.ROOT_PATH`) e o site (binding `xmutarn.kempdec.com`) caso não existam, para o site/pool apenas se estiverem em execução, ajusta permissões com `icacls` e reinicia o site/pool com `always()`.
