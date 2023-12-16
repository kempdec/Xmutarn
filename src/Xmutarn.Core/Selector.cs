namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um seletor CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="Value"/>.</remarks>
/// <param name="value">O valor do seletor CSS.</param>
/// <param name="properties">As propriedades do seletor CSS.</param>
public readonly struct Selector(string value, PropertyDictionary properties) : ICSS
{
    /// <summary>
    /// O valor do seletor CSS.
    /// </summary>
    public string Value { get; } = value;

    /// <summary>
    /// Obtém as propriedades do seletor CSS.
    /// </summary>
    public PropertyDictionary Properties { get; } = properties;

    /// <inheritdoc/>
    public override string ToString() => ToCSS();

    /// <inheritdoc/>
    public string ToCSS() => $"{Value} {{{Environment.NewLine}  {Properties}{Environment.NewLine}}}";
}
