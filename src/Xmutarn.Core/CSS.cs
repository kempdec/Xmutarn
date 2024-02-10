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
    public CSS(bool isMinified = false) => IsMinified = isMinified;

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
        css1.AddRange([.. css2]);

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
    /// Obtém ou define um sinalizador indicando se o valor equivalente em CSS deve ser minificado.
    /// </summary>
    public bool IsMinified { get; set; }

    /// <inheritdoc/>
    public string ToCSS()
    {
        var cssBuilder = new StringBuilder();

        foreach (CSSSelector selector in this)
        {
            if (!IsMinified && cssBuilder.Length > 0)
            {
                cssBuilder.Append(Environment.NewLine + Environment.NewLine);
            }

            selector.IsMinified = IsMinified;

            cssBuilder.Append(selector.ToCSS());
        }

        return cssBuilder.ToString() + _cssInText.ToString();
    }

    /// <summary>
    /// Retorna o valor CSS equivalente da instância.
    /// </summary>
    /// <returns>O valor CSS equivalente da instância.</returns>
    public override string ToString() => ToCSS();
}
