using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e genéricos para a propriedade CSS <c>font-family</c>.
/// </summary>
public static class FontFamily
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor da propriedade <c>font-family</c> deve ser herdado do elemento pai.
    /// </summary>
    public static CSSFontFamily Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor da propriedade <c>font-family</c> para seu valor inicial conforme especificado pela linguagem CSS.
    /// </summary>
    public static CSSFontFamily Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-family</c> para o valor definido pelo usuário,
    /// ignorando estilos aplicados por regras da folha de estilo do autor.
    /// </summary>
    public static CSSFontFamily Revert { get; } = new("revert");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-family</c> levando em consideração camadas de origem,
    /// revertendo somente o valor definido em camadas de estilo inferiores.
    /// </summary>
    public static CSSFontFamily RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Remove qualquer valor definido para <c>font-family</c>, aplicando a regra <c>unset</c>,
    /// que equivale a <c>inherit</c> para propriedades herdáveis e <c>initial</c> caso contrário.
    /// </summary>
    public static CSSFontFamily Unset { get; } = new("unset");

    #endregion

    #region Famílias genéricas.

    /// <summary>
    /// Fonte com serifa.
    /// </summary>
    public static CSSFontFamily Serif { get; } = FontFamilyGeneric.Serif;

    /// <summary>
    /// Fonte sem serifa.
    /// </summary>
    public static CSSFontFamily SansSerif { get; } = FontFamilyGeneric.SansSerif;

    /// <summary>
    /// Fonte monoespaçada.
    /// </summary>
    public static CSSFontFamily Monospace { get; } = FontFamilyGeneric.Monospace;

    /// <summary>
    /// Fonte manuscrita.
    /// </summary>
    public static CSSFontFamily Cursive { get; } = FontFamilyGeneric.Cursive;

    /// <summary>
    /// Fonte decorativa ou fantasia.
    /// </summary>
    public static CSSFontFamily Fantasy { get; } = FontFamilyGeneric.Fantasy;

    /// <summary>
    /// Fonte do sistema operacional.
    /// </summary>
    public static CSSFontFamily SystemUi { get; } = FontFamilyGeneric.SystemUi;

    /// <summary>
    /// Fonte com serifa baseada na interface do sistema.
    /// </summary>
    public static CSSFontFamily UiSerif { get; } = FontFamilyGeneric.UiSerif;

    /// <summary>
    /// Fonte sem serifa baseada na interface do sistema.
    /// </summary>
    public static CSSFontFamily UiSansSerif { get; } = FontFamilyGeneric.UiSansSerif;

    /// <summary>
    /// Fonte monoespaçada baseada na interface do sistema.
    /// </summary>
    public static CSSFontFamily UiMonospace { get; } = FontFamilyGeneric.UiMonospace;

    /// <summary>
    /// Fonte arredondada baseada na interface do sistema.
    /// </summary>
    public static CSSFontFamily UiRounded { get; } = FontFamilyGeneric.UiRounded;

    /// <summary>
    /// Fonte utilizada para expressões matemáticas.
    /// </summary>
    public static CSSFontFamily Math { get; } = FontFamilyGeneric.Math;

    /// <summary>
    /// Fonte estilizada tradicional chinesa utilizada para textos formais.
    /// </summary>
    public static CSSFontFamily Fangsong { get; } = FontFamilyGeneric.Fangsong;

    #endregion
}
