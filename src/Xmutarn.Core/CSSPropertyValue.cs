using System.Diagnostics.CodeAnalysis;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa o valor de uma propriedade CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSPropertyValue"/>.</remarks>
/// <param name="IsMinified">Um sinalizador indicando se a propriedade CSS é minificada.</param>
public record class CSSPropertyValue(bool IsMinified = false) : ICSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSPropertyValue"/>.
    /// </summary>
    /// <param name="value">O valor do valor de uma propriedade CSS.</param>
    /// <param name="isMinified">Um sinalizador indicando se a propriedade CSS é minificada.</param>
    [SetsRequiredMembers]
    public CSSPropertyValue(string value, bool isMinified = false) : this(isMinified) => Value = value;

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
    /// Obtém ou inicializa o valor do valor de uma propriedade CSS.
    /// </summary>
    public virtual required string Value { get; init; }

    /// <summary>
    /// Obtém ou define o valor final do valor de uma propriedade CSS.
    /// </summary>
    protected string? FinalValue { get; set; }

    /// <inheritdoc/>
    public virtual string ToCSS()
    {
        var css = FinalValue ?? Value;

        FinalValue = null;

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
