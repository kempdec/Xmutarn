using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e padrão para a propriedade CSS <c>text-transform</c>.
/// </summary>
public static class TextTransform
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor da propriedade <c>text-transform</c> deve ser herdado.
    /// </summary>
    public static CSSTextTransform Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor de <c>text-transform</c> para seu valor inicial padrão do CSS.
    /// </summary>
    public static CSSTextTransform Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor da propriedade para o valor definido pelo usuário.
    /// </summary>
    public static CSSTextTransform Revert { get; } = new("revert");

    /// <summary>
    /// Redefine a propriedade considerando apenas camadas inferiores.
    /// </summary>
    public static CSSTextTransform RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Remove qualquer valor definido, aplicando a regra <c>unset</c>.
    /// </summary>
    public static CSSTextTransform Unset { get; } = new("unset");

    #endregion

    #region Valores padrão.

    /// <summary>
    /// Não aplica transformação ao texto.
    /// </summary>
    public static CSSTextTransform None { get; } = TextTransformType.None;

    /// <summary>
    /// Coloca a primeira letra de cada palavra em maiúscula.
    /// </summary>
    public static CSSTextTransform Capitalize { get; } = TextTransformType.Capitalize;

    /// <summary>
    /// Converte todo o texto para maiúsculas.
    /// </summary>
    public static CSSTextTransform Uppercase { get; } = TextTransformType.Uppercase;

    /// <summary>
    /// Converte todo o texto para minúsculas.
    /// </summary>
    public static CSSTextTransform Lowercase { get; } = TextTransformType.Lowercase;

    /// <summary>
    /// Converte caracteres para versão de largura total.
    /// </summary>
    public static CSSTextTransform FullWidth { get; } = TextTransformType.FullWidth;

    /// <summary>
    /// Converte caracteres Kana para versão de largura total.
    /// </summary>
    public static CSSTextTransform FullSizeKana { get; } = TextTransformType.FullSizeKana;

    #endregion
}
