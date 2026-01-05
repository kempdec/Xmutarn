using System.Text;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um seletor CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSSelector"/>.</remarks>
/// <param name="Value">O valor do seletor CSS.</param>
/// <param name="IsMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
/// <param name="Reference">A referência para o CSS que inicializou o seletor CSS.</param>
public record CSSSelector(string Value, bool IsMinified = false, CSS? Reference = null) : CSSProperties(IsMinified), ICSSConvertible
{
    /// <summary>
    /// Os valores extendidos do seletor CSS.
    /// </summary>
    private readonly List<string> _extendValues = [];

    /// <summary>
    /// Obtém o valor do seletor CSS.
    /// </summary>
    public string Value { get; } = Value;

    /// <summary>
    /// Obtém o valor do seletor CSS.
    /// </summary>
    public string Selector => Value;

    /// <summary>
    /// Obtém a referência para o CSS que inicializou o seletor CSS.
    /// </summary>
    public CSS? Reference { get; } = Reference;

    /// <summary>
    /// Extende o seletor CSS atual com o valor do seletor CSS especificado.
    /// </summary>
    /// <param name="value">O valor do seletor CSS que extenderá o seletor CSS atual.</param>
    public void Extend(string value) => _extendValues.Add(value);

    /// <inheritdoc/>
    public override string ToCSS()
    {
        var cssBuilder = new StringBuilder(Selector);

        if (_extendValues.Count > 0)
        {
            string separator = ",";

            if (!IsMinified)
            {
                separator += " ";
            }

            cssBuilder.Append(separator);
            cssBuilder.Append(string.Join(separator, _extendValues));
        }

        if (!IsMinified)
        {
            cssBuilder.Append(' ');
        }

        cssBuilder.Append('{');

        if (!IsMinified)
        {
            cssBuilder.Append(Environment.NewLine);
        }

        string propertiesCSS = base.ToCSS();

        if (IsMinified && propertiesCSS.Length > 0)
        {
            propertiesCSS = propertiesCSS[..^1];
        }

        cssBuilder.Append(propertiesCSS);

        if (!IsMinified)
        {
            cssBuilder.Append(Environment.NewLine);
        }

        cssBuilder.Append('}');

        return cssBuilder.ToString();
    }

    /// <summary>
    /// Retorna o valor CSS equivalente da instância.
    /// </summary>
    /// <returns>O valor CSS equivalente da instância.</returns>
    public override string ToString() => ToCSS();
}
