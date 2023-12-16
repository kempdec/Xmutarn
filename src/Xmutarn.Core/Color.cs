namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma cor.
/// </summary>
public readonly struct Color : IPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="Color"/>.
    /// </summary>
    /// <param name="value">O valor da cor.</param>
    public Color(string value) => Value = value;

    /// <summary>
    /// Inicializa uma nova instância de <see cref="Color"/>.
    /// </summary>
    /// <param name="value">O valor da cor.</param>
    public static implicit operator Color(string value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="value">A cor.</param>
    public static implicit operator string(Color value) => value.ToString();

    /// <summary>
    /// Obtém o valor da cor.
    /// </summary>
    public string Value { get; }

    /// <inheritdoc/>
    public override string ToString() => Value;
}
