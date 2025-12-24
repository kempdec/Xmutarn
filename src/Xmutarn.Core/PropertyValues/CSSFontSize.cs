using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa o valor da propriedade CSS <c>font-size</c>.
/// Suporta palavras-chave CSS, tamanhos nomeados e unidades como <c>px</c>, <c>rem</c>, <c>em</c>, e <c>%</c>.
/// </summary>
public sealed record class CSSFontSize : CSSUnitValue
{
    /// <summary>
    /// Unidades permitidas para <see cref="CSSFontSize"/>.
    /// </summary>
    private static readonly UnitValueType[] s_allowedUnits =
    [
        UnitValueType.Px,
        UnitValueType.Rem,
        UnitValueType.Em,
        UnitValueType.Percent
    ];

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/> usando um valor textual sem unidade.
    /// (ex.: <c>inherit</c>, <c>initial</c>, <c>medium</c>, <c>larger</c>).
    /// </summary>
    /// <param name="value">O valor textual.</param>
    [SetsRequiredMembers]
    public CSSFontSize(string value) : base(value)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/> usando um valor numérico e unidade.
    /// </summary>
    /// <param name="value">O valor numérico.</param>
    /// <param name="unit">A unidade CSS.</param>
    [SetsRequiredMembers]
    public CSSFontSize(double value, UnitValueType unit) : base(value, unit, s_allowedUnits)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/> usando um valor pré-definido.
    /// </summary>
    /// <param name="type">O tamanho de fonte.</param>
    [SetsRequiredMembers]
    public CSSFontSize(FontSizeType type) : base(type.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/>.
    /// </summary>
    /// <param name="px">O valor em pixels.</param>
    public static implicit operator CSSFontSize(int px) => new(px, UnitValueType.Px);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/>.
    /// </summary>
    /// <param name="px">O valor em pixels.</param>
    public static implicit operator CSSFontSize(double px) => new(px, UnitValueType.Px);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/>.
    /// </summary>
    /// <param name="value">O valor textual.</param>
    public static implicit operator CSSFontSize(string value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontSize"/>.
    /// </summary>
    /// <param name="type">O tamanho de fonte.</param>
    public static implicit operator CSSFontSize(FontSizeType type) => new(type);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="size">O tamanho da fonte.</param>
    public static implicit operator string(CSSFontSize size) => size.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
