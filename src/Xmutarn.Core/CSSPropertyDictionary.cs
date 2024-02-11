namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma coleção de propriedades CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSPropertyDictionary"/>.</remarks>
/// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
public sealed class CSSPropertyDictionary(bool isMinified = false) : Dictionary<string, object>, ICSSConvertible
{
    /// <inheritdoc/>
    public bool IsMinified { get; } = isMinified;

    /// <inheritdoc/>
    public string ToCSS()
    {
        IEnumerable<CSSProperty> properties = this.Select(e =>
            new CSSProperty(Name: e.Key, Value: e.Value?.ToString() ?? string.Empty, IsMinified));

        string separator = string.Empty;

        if (!IsMinified)
        {
            separator += $"{Environment.NewLine}  ";
        }

        string css = string.Join(separator, properties);

        if (!IsMinified)
        {
            css = $"  {css}";
        }

        return css;
    }

    /// <summary>
    /// Retorna o valor CSS equivalente a instância.
    /// </summary>
    /// <returns>O valor CSS equivalente a instância.</returns>
    public override string ToString() => ToCSS();
}
