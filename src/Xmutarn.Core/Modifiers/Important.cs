namespace KempDec.Xmutarn.Core.Modifiers;

/// <summary>
/// Representa o modificador "!important" do valor de uma propriedade do CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="Important"/>.</remarks>
/// <param name="value">O valor de uma propriedade CSS.</param>
public readonly struct Important(IPropertyValue value)
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="important">O modificador "!important" do valor de uma propriedade do CSS.</param>
    public static implicit operator string(Important important) => important.ToString();

    /// <summary>
    /// Obtém o valor da propriedade CSS com o modificador "!important".
    /// </summary>
    public string Value { get; } = $"{value} !important";

    /// <inheritdoc/>
    public override string ToString() => Value;
}
