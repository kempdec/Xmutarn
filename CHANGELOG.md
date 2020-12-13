# CHANGELOG

## Xmutarn v0.31.0 (2020-12-13) - Release 20

- Adicionado um novo módulo para o componente **toast**.
- Adicionado variações de método de adição de descrição ao módulo do componente **input**.

## Xmutarn v0.30.1 (2020-11-06) - Release 19

- O rótulo ativo do componente **input** na inicialização a partir do HTML foi corrigido.
- A ausência de métodos do componente **input** no Definition Types foi corrigida.

## Xmutarn v0.30.0 (2020-11-06) - Release 18

- Adicionado tipografias responsivas.
- Adicionado descrição e cores para o componente **input**.
- Adicionado a página de documentação para o componente **input**.

---

- O componente **input** foi reconstruído.
- O nome das classes de Flexbox foram alteradas.
- O sufixo de tamanho das classes de bordas foram alterados.
- A classe `.avatar--header--subtitle` foi renomeada para `.avatar--header--summary`.

---

- As cores do botão de realçe foram corrigidas.
- Os rótulos ativo de componentes **input** foram fixados.

## Xmutarn v0.29.0 (2020-10-30) - Release 17

- Os módulos `Input`, `Toast`, `ThemeController`, `MainThemeController`, `FeaturedThemeController` e
`AccentThemeController` foram adicionados.
- As páginas da documentação agora são transpiladas com Pug.

---

- O padrão das classes de cores e temas foram totalmente alterados, consulte a documentação para ver as novidades.
- Alguns prefixos de classes foram alterados:
  - Tipografias: `typography` > `typo`.
  - Botões: `button` > `btn`.
- Os seguintes sufixos foram alterados:
  - `xsmall` > `xs`.
  - `small` > `sm`.
  - `medium` > `md`.
  - `large` > `lg`.
  - `xlarge` > `xl`.
- Os separadores de classes adjacentes foram alterados para dois underscores (`__`).
- A cor de realçe padrão foi alterada de `light-blue` para `amber`.
- O nome de usuário do repositório no GitHub foi alterado de `vinivsl` para `viniciusxdl`.
- Todas as páginas da documentação foram atualizadas.
- As tarefas do Gulp.js foram atualizadas para uso com TypeScript.
- O compilador de Sass foi alterado do **Node Sass** para o **Dart Sass**.

---

- Fixado as opções do módulo `Toolbar`.
- Fixado exportação das declarações de tipos do TypeScript.

---

- O arquivo dedicado para cores do Xmutarn (`xmutarn-colors.css`) foi removido.

## Xmutarn v0.28.0 (2019-07-01) - Release 16

- Adicionado suporte a módulos TypeScript/ECMAScript.
- Adicionado módulos `Component`, `Dialog`, `NavigationDrawer`, `Overlay`, `Toolbar` e `ToolbarOptions`.
- Adicionado arquivo de declaração.

---

- Modificado a pasta dos arquivos de distribuição das folhas de estilo, de `dist/styles` para `dist/css`.

---

- Fixado as cores de um toast ([#12](https://github.com/viniciusxdl/xmutarn/issues/12)).

## Xmutarn v0.28.0-beta.4 (2019-04-22) - Release 15

- Adicionado páginas da documentação com o Pug.

---

- Atualizado página inicial da documentação.

---

- Fixado exportação das declarações de tipos do TypeScript.

## Xmutarn v0.28.0-beta.3 (2019-04-20) - Release 14

- Fixa opções dos módulos `Input`, `Toast` e `Toolbar`.

## Xmutarn v0.28.0-beta.2 (2019-04-19) - Release 13

- Adicionado módulos `Input` e `Toast`.

## Xmutarn v0.28.0-beta (2019-04-07) - Release 12

- Adicionado suporte a módulos TypeScript/ECMAScript.
- Adicionado módulos `Component`, `Dialog`, `NavigationDrawer`, `Overlay`, `Toolbar` e `ToolbarOptions`.
- Adicionado arquivo de declaração.

---

- Modificado a pasta dos arquivos de distribuição das folhas de estilo, de `dist/styles` para `dist/css`.

---

- Fixado as cores de um toast ([#12](https://github.com/viniciusxdl/Xmutarn/issues/12)).

## Xmutarn v0.27.1 (2019-03-17) - Release 11

- Fixado a nomenclatura da classe `avatar--subtitle` para `avatar--summary`.

## Xmutarn v0.27.0 (2019-03-04) - Release 10

- Adicionado classe Typescipt responsável por gerenciar uma barra de ferramentas.
- Adicionado ícones para toasts. Issue: [#9](https://github.com/viniciusxdl/Xmutarn/issues/9).
- Adicionado variantes `color-featured`, `color-accent` e `outlined-color` para a classe `button`.
- Adicionado variante `padded` para a classe `list`.
- Adicionado a exibição e omissão de overlay para toasts, quando o **timeout** for setado como **0**.
- Adicionado inicializador HTML de uma nova instância de `Dialog`.
- Adicionado o atributo `x-close-dialog` para fechamento do _diálogo_ (`Dialog`) quando o evento de clique for acionado em um elemento filho do elemento do diálogo.
- Adicionado o atributo `x-close-nav-drawer` para fechamento da _gaveta de navegação_ (`NavigationDrawer`) quando o evento de clique for acionado em um elemento filho do elemento da gaveta de navegação.

---

- Modificado a nomenclatura da classe `avatar--subtitle` para `avatar--summary`.

---

- Fixado a abertura incorreta do menu suspenso pela instanciação a partir do atributo `x-role="dropdown-menu"`. Issue: [#2](https://github.com/viniciusxdl/Xmutarn/issues/2).
- Fixado a abertura e sobreposição dos diálogos. Issue: [#10](https://github.com/viniciusxdl/Xmutarn/issues/10).
- Fixado o tamanho dos títulos dos toasts.

## Xmutarn v0.26.0 (2019-02-13) - Release 09

- Adicionado **Xmutarn Colors**.
- Adicionado inicializador HTML de uma nova instância de `NavigationDrawer`.
- Adicionado pasta **src** completa no pacote de distribuição do NPM.

---

- Nomenclatura das classes de tipografia corrigido.

## Xmutarn v0.25.0 (2018-12-30) - Release 08

- Adicionado gavetas de navegação.

---

- Aparência de alguns elementos, como botões, foi fixado.

## Xmutarn v0.24.0 (2018-12-21) - Release 07

- Adicionado toast.
- Adicionado diálogo.
- Adicionado avatar.
- Adicionado overlay.
- Adicionado classes TypeScript responsáveis por gerenciar toasts, diálogos e overlays.
- Adicionado variante `hide-structure` para a classe `card`.
- Adicionado os descendentes `header`, `media`, `content` e `action`  para a classe `card`.
- Adicionado classes utilitárias de sombra.
- Adicionado novas classes utilitárias de borda.

---

- Pulo da versão **0.5.1** (release 06), para a versão **0.24.0** (release 07) por motivos de conflito com a 2ª versão obsoleta do Xmutarn no NPM, a qual se manteve apenas até a versão 0.23.1 para reconstrução. Criado em **14/02/2018** às **16:48**, reconstruído em **23/09/2018** ás **18:10**.

## Xmutarn v0.5.1 (2018-12-05) - Release 06

- Uso da variante `dark-color` da classe `toolbar` foi fixado.

## Xmutarn v0.5.0 (2018-11-29) - Release 05

- Adicionado cartão.
- Adicionado a variante `dark-color` para a classe `toolbar`.
- Adicionado a propriedade `removeColorOnFocus` no construtor da classe TypeScript `Input`.

## Xmutarn v0.4.0 (2018-11-28) - Release 04

- Adicionado input.
- Adicionado menu.
- Adicionado dropdown.
- Adicionado classe TypeScript responsável por gerenciar um input.
- Adicionado classe TypeScript responsável por gerenciar um menu suspenso (dropdown).
- Adicionado as variantes `bordered` e `dark` para a classe `toolbar--nav--item`.
- Adicionado a variante `alert-color` para a classe `input`.

---

- Fixa o uso da classe `border-divider` em elementos que não são de blocos por padrão.

---

- Padrão de nomenclatura das variáveis SASS foi alterado.

## Xmutarn v0.3.0 (2018-10-25) - Release 03

- Adicionado listas.

---

- Nome das variáveis CSS foram corrigidos.

## Xmutarn v0.2.0 (2018-10-15) - Release 02

- Adicionado botões.
- Adicionado barra de ferramentas.

## Xmutarn v0.1.0 (2018-10-03) - Release 01

- Adicionado temas.
- Adicionado cores.
- Adicionado contêineres.
- Adicionado flexbox.
- Adicionado tipografia.
- Adicionado uma enorme variedade de classes utilitárias.
- Adicionado páginas de documentação.
- Adicionado **normalize.css v8.0.0**.
- Adicionado automação de tarefas com o Gulp.js.
- Adicionado licença MIT.

---

- Criado em **23/09/2018** ás **18:10**.
