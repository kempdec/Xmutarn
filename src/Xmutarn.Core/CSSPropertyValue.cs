namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa o valor de uma propriedade CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSPropertyValue"/>.</remarks>
/// <param name="Value">O valor do valor de uma propriedade CSS.</param>
/// <param name="IsMinified">Um sinalizador indicando se a propriedade CSS é minificada.</param>
public class CSSPropertyValue(string Value, bool IsMinified = false) : ICSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSPropertyValue"/>.
    /// </summary>
    /// <param name="value">O valor do valor de uma propriedade CSS.</param>
    public static implicit operator CSSPropertyValue(string value) => new(value);

    /// <inheritdoc/>
    public bool IsImportant { get; set; }

    /// <inheritdoc/>
    public bool IsMinified { get; set; } = IsMinified;

    /// <summary>
    /// Obtém o valor do valor de uma propriedade CSS.
    /// </summary>
    public string Value { get; } = Value;

    /// <summary>
    /// Define <see cref="IsImportant"/> como <see langword="true"/> e retorna esta instância.
    /// </summary>
    /// <returns>Esta instância com <see cref="IsImportant"/> definido como <see langword="true"/>.</returns>
    public CSSPropertyValue Important()
    {
        IsImportant = true;

        return this;
    }

    /// <inheritdoc/>
    public virtual string ToCSS()
    {
        var css = Value;

        if (IsImportant)
        {
            css += " !important";
        }

        return css;
    }

    /// <summary>
    /// Retorna o valor CSS equivalente.
    /// </summary>
    /// <returns>O valor CSS equivalente.</returns>
    public override string ToString() => ToCSS();
}
