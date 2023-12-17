namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um seletor CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="Value"/>.</remarks>
/// <param name="value">O valor do seletor CSS.</param>
/// <param name="properties">As propriedades do seletor CSS.</param>
public struct Selector(string value, PropertyDictionary properties) : ICSS
{
    /// <summary>
    /// O valor do seletor CSS.
    /// </summary>
    public string Value { get; private set; } = value;

    /// <summary>
    /// Obtém as propriedades do seletor CSS.
    /// </summary>
    public PropertyDictionary Properties { get; } = properties;

    /// <inheritdoc/>
    public override string ToString() => ToCSS();

    /// <summary>
    /// Estende o seletor atual com o valor do seletor CSS especificado.
    /// </summary>
    /// <param name="value">O valor do seletor CSS.</param>
    public void Extend(string value) => Value += $", {value}";

    /// <inheritdoc/>
    public string ToCSS() => $"{Value} {{{Environment.NewLine}  {Properties}{Environment.NewLine}}}";
}
