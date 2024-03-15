namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma função CSS.
/// </summary>
public record class CSSFunction : CSSPropertyValue, ICSSFunction
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFunction"/>.
    /// </summary>
    /// <param name="name">O nome da função CSS.</param>
    /// <param name="isMinified">Um sinalizador indicando se a propriedade CSS é minificada.</param>
    public CSSFunction(string name, bool isMinified = false)
    {
        Name = name;
        IsMinified = isMinified;
    }

    /// <inheritdoc/>
    public string Name { get; }

    /// <inheritdoc/>
    public override required string Value
    {
        get => base.Value;
        init => base.Value = $"{Name}({value})";
    }

    /// <summary>
    /// Retorna o valor CSS equivalente.
    /// </summary>
    /// <returns>O valor CSS equivalente.</returns>
    public override string ToString() => ToCSS();
}
