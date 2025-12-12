using KempDec.Xmutarn.Core.Property;
using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Fornece métodos extensivos para facilitar a criação de valores CSS com unidade.
/// </summary>
public static class CSSUnitNumberExtension
{
    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>rem</c>.
    /// </summary>
    public static CSSFontSize PxToRem(this int px, double baseFontSize = FontSize.DefaultBase) =>
        new(px / baseFontSize, UnitValueType.Rem);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>rem</c>.
    /// </summary>
    public static CSSFontSize PxToRem(this double px, double baseFontSize = FontSize.DefaultBase) =>
        new(px / baseFontSize, UnitValueType.Rem);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>em</c>.
    /// </summary>
    public static CSSFontSize PxToEm(this int px, double baseFontSize = FontSize.DefaultBase) =>
        new(px / baseFontSize, UnitValueType.Em);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>em</c>.
    /// </summary>
    public static CSSFontSize PxToEm(this double px, double baseFontSize = FontSize.DefaultBase) =>
        new(px / baseFontSize, UnitValueType.Em);

    /// <summary>
    /// Cria um valor de fonte em <c>px</c>.
    /// </summary>
    public static CSSFontSize Px(this int value) => new(value, UnitValueType.Px);

    /// <summary>
    /// Cria um valor de fonte em <c>px</c>.
    /// </summary>
    public static CSSFontSize Px(this double value) => new(value, UnitValueType.Px);

    /// <summary>
    /// Cria um valor de fonte em <c>rem</c>.
    /// </summary>
    public static CSSFontSize Rem(this double value) => new(value, UnitValueType.Rem);

    /// <summary>
    /// Cria um valor de fonte em <c>rem</c>.
    /// </summary>
    public static CSSFontSize Rem(this int value) => new(value, UnitValueType.Rem);

    /// <summary>
    /// Cria um valor de fonte em <c>em</c>.
    /// </summary>
    public static CSSFontSize Em(this double value) => new(value, UnitValueType.Em);

    /// <summary>
    /// Cria um valor de fonte em <c>em</c>.
    /// </summary>
    public static CSSFontSize Em(this int value) => new(value, UnitValueType.Em);

    /// <summary>
    /// Cria um valor de fonte em porcentagem (<c>%</c>).
    /// </summary>
    public static CSSFontSize Percent(this double value) => new(value, UnitValueType.Percent);

    /// <summary>
    /// Cria um valor de fonte em porcentagem (<c>%</c>).
    /// </summary>
    public static CSSFontSize Percent(this int value) => new(value, UnitValueType.Percent);
}
