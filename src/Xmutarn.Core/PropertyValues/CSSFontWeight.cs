using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa o valor da propriedade CSS <c>font-weight</c>.
/// </summary>
public record class CSSFontWeight : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontWeight"/>.
    /// </summary>
    /// <param name="weight">O peso da fonte.</param>
    [SetsRequiredMembers]
    public CSSFontWeight(FontWeightType weight) : this(weight.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontWeight"/>.
    /// </summary>
    /// <param name="weight">O peso numérico da fonte (100–900).</param>
    [SetsRequiredMembers]
    public CSSFontWeight(int weight) : this(weight.ToString())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontWeight"/> usando um valor textual.
    /// </summary>
    /// <param name="value">O valor textual da propriedade.</param>
    [SetsRequiredMembers]
    public CSSFontWeight(string value) : base(value)
    {
    }

    /// <summary>
    /// Converte implicitamente um valor de <see cref="FontWeightType"/> para <see cref="CSSFontWeight"/>.
    /// </summary>
    public static implicit operator CSSFontWeight(FontWeightType weight) => new(weight);

    /// <summary>
    /// Converte implicitamente um valor numérico para <see cref="CSSFontWeight"/>.
    /// </summary>
    public static implicit operator CSSFontWeight(int weight) => new(weight);

    /// <summary>
    /// Converte implicitamente uma cadeia de caracteres para <see cref="CSSFontWeight"/>.
    /// </summary>
    public static implicit operator CSSFontWeight(string value) => new(value);

    /// <summary>
    /// Converte implicitamente uma instância de <see cref="CSSFontWeight"/> em <see cref="string"/>.
    /// </summary>
    public static implicit operator string(CSSFontWeight value) => value.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
