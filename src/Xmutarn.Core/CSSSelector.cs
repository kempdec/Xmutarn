using System.Text;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um seletor CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSSelector"/>.</remarks>
/// <param name="Value">O valor do seletor CSS.</param>
/// <param name="IsMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
public record CSSSelector(string Value, bool IsMinified = false) : CSSProperties(IsMinified), ICSSConvertible
{
    /// <summary>
    /// Obtém o valor do seletor CSS.
    /// </summary>
    public string Value { get; } = Value;

    /// <inheritdoc/>
    public override string ToCSS()
    {
        var cssBuilder = new StringBuilder(Value);

        if (!IsMinified)
        {
            cssBuilder.Append(' ');
        }

        cssBuilder.Append('{');

        if (!IsMinified)
        {
            cssBuilder.Append(Environment.NewLine);
        }

        cssBuilder.Append(base.ToCSS());

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
