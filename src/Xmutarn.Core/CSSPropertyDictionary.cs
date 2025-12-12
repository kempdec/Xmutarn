namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma coleção de propriedades CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSPropertyDictionary"/>.</remarks>
/// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
public sealed class CSSPropertyDictionary(bool isMinified = false) : Dictionary<string, object>, ICSSConvertible
{
    /// <summary>
    /// Adiciona as propriedades CSS da segunda coleção na primeira coleção.
    /// </summary>
    /// <param name="properties1">A primeira coleção a receber as propriedades CSS da segunda.</param>
    /// <param name="properties2">A segunda coleção a adicionar as propriedades CSS na primeira.</param>
    /// <returns>A primeira coleção com as propriedades CSS da segunda.</returns>
    public static CSSPropertyDictionary operator +(CSSPropertyDictionary properties1,
        CSSPropertyDictionary properties2)
    {
        properties1.AddRange(properties2);

        return properties1;
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSPropertyDictionary"/>.
    /// </summary>
    /// <param name="cssProperties">As propriedades CSS pré-construídas.</param>
    public static implicit operator CSSPropertyDictionary(CSSProperties cssProperties) =>
        cssProperties.ToCSSPropertyDictionary();

    /// <inheritdoc/>
    public bool IsMinified { get; } = isMinified;

    /// <summary>
    /// Adiciona as propriedades CSS da coleção especificada para a atual.
    /// </summary>
    /// <remarks>Caso alguma propriedade CSS da coleção especificada já exista na coleção atual, ela será
    /// ignorada.</remarks>
    /// <param name="properties">A coleção de propriedades CSS.</param>
    public void AddRange(CSSPropertyDictionary properties)
    {
        foreach (KeyValuePair<string, object> property in properties)
        {
            if (!ContainsKey(property.Key))
            {
                Add(property.Key, property.Value);
            }
        }
    }

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
