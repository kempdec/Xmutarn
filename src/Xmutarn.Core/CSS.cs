using KempDec.Xmutarn.Core.Functions;
using System.Text;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um CSS.
/// </summary>
public class CSS : List<CSSSelector>, ICSSConvertible
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSS"/>.
    /// </summary>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    public CSS(bool isMinified = false)
    {
        IsMinified = isMinified;

        OnPrepare();
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSS"/>.
    /// </summary>
    /// <param name="selectors">Os seletores CSS.</param>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    public CSS(IEnumerable<CSSSelector> selectors, bool isMinified = false) : this(isMinified) => AddRange(selectors);

    /// <summary>
    /// Adiciona os elementos do segundo CSS no primeiro CSS.
    /// </summary>
    /// <param name="css1">O primeiro CSS a receber os elementos do segundo.</param>
    /// <param name="css2">O segundo CSS a adicionar os elementos no primeiro.</param>
    /// <returns>O primeiro CSS com os elementos adicionados do segundo.</returns>
    public static CSS operator +(CSS css1, CSS css2)
    {
        css1.Import(css2);

        return css1;
    }

    /// <summary>
    /// Adiciona um seletor CSS para o CSS.
    /// </summary>
    /// <param name="css">O CSS a receber o seletor CSS.</param>
    /// <param name="selector">O seletor CSS a ser adicionado no CSS.</param>
    /// <returns>O CSS com o seletor adicionado.</returns>
    public static CSS operator +(CSS css, CSSSelector selector)
    {
        css.Add(selector);

        return css;
    }

    /// <summary>
    /// Adiciona um CSS em texto para o CSS.
    /// </summary>
    /// <param name="css">O CSS a receber o CSS em texto.</param>
    /// <param name="cssInText">O CSS em texto a ser adicionado no CSS.</param>
    /// <returns>O CSS com o CSS em texto adicionado.</returns>
    public static CSS operator +(CSS css, string cssInText)
    {
        css._cssInText.Append(cssInText);

        return css;
    }

    /// <summary>
    /// O CSS em texto.
    /// </summary>
    private readonly StringBuilder _cssInText = new();

    /// <summary>
    /// A lista de CSS.
    /// </summary>
    private readonly List<CSS> _cssList = [];

    /// <summary>
    /// Um dicionário que mapeia o seletor CSS para a ação de edição deste seletor CSS.
    /// </summary>
    private readonly Dictionary<string, Action<CSSSelector>> _cssSelectorEditingActions = [];

    /// <summary>
    /// Um dicionário que mapeia as propriedades CSS para o seletor CSS estendido correspondente.
    /// </summary>
    private readonly Dictionary<CSSProperties, CSSSelector> _cssSelectorExtends = [];

    /// <summary>
    /// Obtém ou define um sinalizador indicando se o valor equivalente em CSS deve ser minificado.
    /// </summary>
    public bool IsMinified { get; set; }

    /// <summary>
    /// Adiciona o seletor CSS especificado para o final do CSS.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser adicionado.</param>
    /// <param name="options">As opções do seletor CSS.</param>
    /// <returns>O seletor CSS adicionado.</returns>
    public CSSSelector Add(string selector, Action<CSSSelector> options)
    {
        var cssSelector = new CSSSelector(selector);

        options.Invoke(cssSelector);

        Add(cssSelector);

        return cssSelector;
    }

    /// <summary>
    /// Adiciona o seletor CSS especificado para o final do CSS.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser adicionado.</param>
    /// <param name="properties">As propriedades CSS do seletor CSS.</param>
    /// <returns>O seletor CSS adicionado.</returns>
    public CSSSelector Add(string selector, CSSPropertyDictionary properties)
    {
        var cssSelector = new CSSSelector(selector);

        cssSelector.Others.AddRange(properties);

        Add(cssSelector);

        return cssSelector;
    }

    /// <summary>
    /// Adiciona ou estende o seletor CSS especificado para o final do CSS.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser adicionado ou estendido.</param>
    /// <param name="properties">As propriedades CSS do seletor CSS.</param>
    /// <returns>O seletor CSS adicionado ou estendido.</returns>
    public CSSSelector AddOrExtend(string selector, CSSProperties properties)
    {
        if (_cssSelectorExtends.TryGetValue(properties, out CSSSelector? cssSelector))
        {
            cssSelector.Extend(selector);

            return cssSelector;
        }

        cssSelector = new CSSSelector(selector);

        cssSelector.Others.AddRange(properties);

        Add(cssSelector);

        _cssSelectorExtends.Add(properties, cssSelector);

        return cssSelector;
    }

    /// <summary>
    /// Edita o seletor CSS especificado.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser editado.</param>
    /// <param name="options">As opções do seletor CSS.</param>
    public void Edit(string selector, Action<CSSSelector> options) => _cssSelectorEditingActions.Add(selector, options);

    /// <summary>
    /// Importa o CSS especificado.
    /// </summary>
    /// <param name="css">O CSS a ser importado.</param>
    public void Import(CSS css) => _cssList.Add(css);

    /// <summary>
    /// Importa o CSS em texto especificado.
    /// </summary>
    /// <param name="cssInText">O CSS em texto a ser importado.</param>
    public void Import(string cssInText) => _cssInText.Append(cssInText);

    /// <summary>
    /// Executa uma lógica personalizada antes de construir o valor CSS equivalente da instância.
    /// </summary>
    protected virtual void OnBeforeToCSS()
    {
    }

    /// <summary>
    /// Executa uma lógica personalizada após construir o valor CSS equivalente da instância.
    /// </summary>
    /// <param name="css">O valor CSS equivalente da instância.</param>
    protected virtual string OnAfterToCSS(string css) => css;

    /// <summary>
    /// Executa uma lógica personalizada de preparação antes que o CSS seja inicializado.
    /// </summary>
    protected virtual void OnPrepare()
    {
    }

    /// <inheritdoc/>
    public virtual string ToCSS()
    {
        OnBeforeToCSS();

        var cssBuilder = new StringBuilder();

        foreach (CSSSelector selector in this)
        {
            if (!IsMinified && cssBuilder.Length > 0)
            {
                cssBuilder.Append(Environment.NewLine + Environment.NewLine);
            }

            if (_cssSelectorEditingActions.TryGetValue(selector.Value, out Action<CSSSelector>? editOptions))
            {
                editOptions?.Invoke(selector);

                _cssSelectorEditingActions.Remove(selector.Value);
            }

            selector.IsMinified = IsMinified;

            cssBuilder.Append(selector.ToCSS());
        }

        foreach (CSS css in _cssList)
        {
            if (!IsMinified && cssBuilder.Length > 0)
            {
                cssBuilder.Append(Environment.NewLine + Environment.NewLine);
            }

            css.IsMinified = IsMinified;

            cssBuilder.Append(css.ToCSS());
        }

        if (!IsMinified && _cssInText.Length > 0 && cssBuilder.Length > 0)
        {
            cssBuilder.Append(Environment.NewLine + Environment.NewLine);
        }

        cssBuilder.Append(_cssInText);

        return OnAfterToCSS(cssBuilder.ToString());
    }

    /// <summary>
    /// Retorna o valor CSS equivalente da instância.
    /// </summary>
    /// <returns>O valor CSS equivalente da instância.</returns>
    public override string ToString() => ToCSS();

    #region Funções CSS.

    /// <summary>
    /// Função "var" do CSS.
    /// </summary>
    /// <param name="Name">O nome da variável CSS.</param>
    /// <param name="DefaultValue">O valor padrão, em caso da variável CSS não ser encontrada.</param>
    /// <returns>A função "var" do CSS.</returns>
    public static CSSVar Var(string Name, object? DefaultValue = null) => new(Name, DefaultValue);

    #endregion
}
