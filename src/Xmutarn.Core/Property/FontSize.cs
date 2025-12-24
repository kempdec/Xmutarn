using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e predefinidos para a propriedade CSS <c>font-size</c>.
/// </summary>
public static class FontSize
{
    /// <summary>
    /// O tamanho de fonte base padrão em pixels.
    /// </summary>
    public const double DefaultBase = 16.0;

    #region Valores especiais.

    /// <summary>
    /// Indica que o valor deve ser herdado do elemento pai.
    /// </summary>
    public static CSSFontSize Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor inicial conforme especificado pelo CSS.
    /// </summary>
    public static CSSFontSize Initial { get; } = new("initial");

    /// <summary>
    /// Redefine para o valor definido pelo usuário.
    /// </summary>
    public static CSSFontSize Revert { get; } = new("revert");

    /// <summary>
    /// Redefine considerando camadas de origem.
    /// </summary>
    public static CSSFontSize RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Aplica a regra <c>unset</c>.
    /// </summary>
    public static CSSFontSize Unset { get; } = new("unset");

    #endregion

    #region Valores nomeados.

    /// <summary>Tamanho extra extra pequeno.</summary>
    public static CSSFontSize XxSmall { get; } = FontSizeType.XxSmall;

    /// <summary>Tamanho extra pequeno.</summary>
    public static CSSFontSize XSmall { get; } = FontSizeType.XSmall;

    /// <summary>Tamanho pequeno.</summary>
    public static CSSFontSize Small { get; } = FontSizeType.Small;

    /// <summary>Tamanho médio padrão.</summary>
    public static CSSFontSize Medium { get; } = FontSizeType.Medium;

    /// <summary>Tamanho grande.</summary>
    public static CSSFontSize Large { get; } = FontSizeType.Large;

    /// <summary>Tamanho extra grande.</summary>
    public static CSSFontSize XLarge { get; } = FontSizeType.XLarge;

    /// <summary>Tamanho extra extra grande.</summary>
    public static CSSFontSize XxLarge { get; } = FontSizeType.XxLarge;

    /// <summary>Tamanho relativo menor.</summary>
    public static CSSFontSize Smaller { get; } = FontSizeType.Smaller;

    /// <summary>Tamanho relativo maior.</summary>
    public static CSSFontSize Larger { get; } = FontSizeType.Larger;

    #endregion

    #region Métodos.

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>rem</c>.
    /// </summary>
    public static CSSFontSize PxToRem(int px, double baseFontSize = DefaultBase) => px.PxToRem(baseFontSize);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>rem</c>.
    /// </summary>
    public static CSSFontSize PxToRem(double px, double baseFontSize = DefaultBase) => px.PxToRem(baseFontSize);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>em</c>.
    /// </summary>
    public static CSSFontSize PxToEm(int px, double baseFontSize = DefaultBase) => px.PxToEm(baseFontSize);

    /// <summary>
    /// Converte um valor em <c>px</c> para um <see cref="CSSFontSize"/> em <c>em</c>.
    /// </summary>
    public static CSSFontSize PxToEm(double px, double baseFontSize = DefaultBase) => px.PxToEm(baseFontSize);

    /// <summary>
    /// Cria um valor de fonte em <c>px</c>.
    /// </summary>
    public static CSSFontSize Px(int value) => value.Px();

    /// <summary>
    /// Cria um valor de fonte em <c>px</c>.
    /// </summary>
    public static CSSFontSize Px(double value) => value.Px();

    /// <summary>
    /// Cria um valor de fonte em <c>rem</c>.
    /// </summary>
    public static CSSFontSize Rem(double value) => value.Rem();

    /// <summary>
    /// Cria um valor de fonte em <c>rem</c>.
    /// </summary>
    public static CSSFontSize Rem(int value) => value.Rem();

    /// <summary>
    /// Cria um valor de fonte em <c>em</c>.
    /// </summary>
    public static CSSFontSize Em(double value) => value.Em();

    /// <summary>
    /// Cria um valor de fonte em <c>em</c>.
    /// </summary>
    public static CSSFontSize Em(int value) => value.Em();

    /// <summary>
    /// Cria um valor de fonte em porcentagem (<c>%</c>).
    /// </summary>
    public static CSSFontSize Percent(double value) => value.Percent();

    /// <summary>
    /// Cria um valor de fonte em porcentagem (<c>%</c>).
    /// </summary>
    public static CSSFontSize Percent(int value) => value.Percent();

    #endregion
}
