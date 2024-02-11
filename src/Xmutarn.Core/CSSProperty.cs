namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma propriedade CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSProperty"/>.</remarks>
/// <param name="Name">O nome da propriedade CSS.</param>
/// <param name="Value">O valor da propriedade CSS.</param>
/// <param name="IsMinified">Um sinalizador indicando se a propriedade CSS é minificada.</param>
public record CSSProperty(string Name, CSSPropertyValue Value, bool IsMinified = false) : ICSSProperty
{
    /// <inheritdoc/>
    public string Name { get; } = Name;

    /// <inheritdoc/>
    public CSSPropertyValue Value { get; } = Value;

    /// <inheritdoc/>
    public bool IsMinified { get; } = IsMinified;

    /// <inheritdoc/>
    public virtual string ToCSS()
    {
        string css = $"{Name}:";

        if (!IsMinified)
        {
            css += " ";
        }

        Value.IsMinified = IsMinified;

        css += $"{Value.ToCSS()};";

        return css;
    }

    /// <summary>
    /// Retorna o valor CSS equivalente.
    /// </summary>
    /// <returns>O valor CSS equivalente.</returns>
    public override string ToString() => ToCSS();
}
