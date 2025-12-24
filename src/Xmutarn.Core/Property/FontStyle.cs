using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e padrão para a propriedade CSS <c>font-style</c>.
/// </summary>
public static class FontStyle
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor da propriedade <c>font-style</c> deve ser herdado do elemento pai.
    /// </summary>
    public static CSSFontStyle Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor da propriedade <c>font-style</c> para seu valor inicial conforme especificado pela linguagem CSS.
    /// </summary>
    public static CSSFontStyle Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-style</c> para o valor definido pelo usuário,
    /// ignorando estilos aplicados por regras da folha de estilo do autor.
    /// </summary>
    public static CSSFontStyle Revert { get; } = new("revert");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-style</c> levando em consideração camadas de origem,
    /// revertendo somente o valor definido em camadas de estilo inferiores.
    /// </summary>
    public static CSSFontStyle RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Remove qualquer valor definido para <c>font-style</c>, aplicando a regra <c>unset</c>,
    /// que equivale a <c>inherit</c> para propriedades herdáveis e <c>initial</c> caso contrário.
    /// </summary>
    public static CSSFontStyle Unset { get; } = new("unset");

    #endregion

    #region Valores padrão.

    /// <summary>
    /// Estilo normal da fonte.
    /// </summary>
    public static CSSFontStyle Normal { get; } = FontStyleType.Normal;

    /// <summary>
    /// Estilo itálico da fonte.
    /// </summary>
    public static CSSFontStyle Italic { get; } = FontStyleType.Italic;

    /// <summary>
    /// Estilo oblíquo da fonte.
    /// </summary>
    public static CSSFontStyle Oblique { get; } = FontStyleType.Oblique;

    #endregion
}
