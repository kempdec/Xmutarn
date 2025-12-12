using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais, nomeados e numéricos para a propriedade CSS <c>font-weight</c>.
/// </summary>
public static class FontWeight
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor da propriedade <c>font-weight</c> deve ser herdado do elemento pai.
    /// </summary>
    public static CSSFontWeight Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor da propriedade <c>font-weight</c> para seu valor inicial conforme especificado pela linguagem CSS.
    /// </summary>
    public static CSSFontWeight Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-weight</c> para o valor definido pelo usuário,
    /// ignorando estilos aplicados por regras da folha de estilo do autor.
    /// </summary>
    public static CSSFontWeight Revert { get; } = new("revert");

    /// <summary>
    /// Redefine o valor da propriedade <c>font-weight</c> levando em consideração camadas de origem,
    /// revertendo somente o valor definido em camadas de estilo inferiores.
    /// </summary>
    public static CSSFontWeight RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Remove qualquer valor definido para <c>font-weight</c>, aplicando a regra <c>unset</c>,
    /// que equivale a <c>inherit</c> para propriedades herdáveis e <c>initial</c> caso contrário.
    /// </summary>
    public static CSSFontWeight Unset { get; } = new("unset");

    #endregion

    #region Valores nomeados.

    /// <summary>
    /// Peso normal da fonte (equivalente geralmente a 400).
    /// </summary>
    public static CSSFontWeight NormalStr { get; } = FontWeightType.Normal;

    /// <summary>
    /// Peso em negrito da fonte (equivalente geralmente a 700).
    /// </summary>
    public static CSSFontWeight BoldStr { get; } = FontWeightType.Bold;

    /// <summary>
    /// Peso mais forte em relação ao elemento pai.
    /// </summary>
    public static CSSFontWeight BolderStr { get; } = FontWeightType.Bolder;

    /// <summary>
    /// Peso mais leve em relação ao elemento pai.
    /// </summary>
    public static CSSFontWeight LighterStr { get; } = FontWeightType.Lighter;

    #endregion

    #region Valores numéricos.

    /// <summary>
    /// Define o peso mais leve da fonte (100).
    /// </summary>
    public static CSSFontWeight Thin { get; } = 100;

    /// <summary>
    /// Define o peso leve da fonte (200).
    /// </summary>
    public static CSSFontWeight ExtraLight { get; } = 200;

    /// <summary>
    /// Define o peso leve da fonte (300).
    /// </summary>
    public static CSSFontWeight Light { get; } = 300;

    /// <summary>
    /// Define o peso normal da fonte (400).
    /// </summary>
    public static CSSFontWeight Regular { get; } = 400;

    /// <summary>
    /// Define o peso médio da fonte (500).
    /// </summary>
    public static CSSFontWeight Medium { get; } = 500;

    /// <summary>
    /// Define o peso semi-negrito da fonte (600).
    /// </summary>
    public static CSSFontWeight SemiBold { get; } = 600;

    /// <summary>
    /// Define o peso em negrito da fonte (700).
    /// </summary>
    public static CSSFontWeight Bold { get; } = 700;

    /// <summary>
    /// Define o peso extra-negrito da fonte (800).
    /// </summary>
    public static CSSFontWeight ExtraBold { get; } = 800;

    /// <summary>
    /// Define o peso preto da fonte (900).
    /// </summary>
    public static CSSFontWeight Black { get; } = 900;

    /// <summary>
    /// Define o peso da fonte como 100.
    /// </summary>
    public static CSSFontWeight W100 { get; } = 100;

    /// <summary>
    /// Define o peso da fonte como 200.
    /// </summary>
    public static CSSFontWeight W200 { get; } = 200;

    /// <summary>
    /// Define o peso da fonte como 300.
    /// </summary>
    public static CSSFontWeight W300 { get; } = 300;

    /// <summary>
    /// Define o peso da fonte como 400 (equivalente ao valor <c>normal</c> em muitos contextos).
    /// </summary>
    public static CSSFontWeight W400 { get; } = 400;

    /// <summary>
    /// Define o peso da fonte como 500.
    /// </summary>
    public static CSSFontWeight W500 { get; } = 500;

    /// <summary>
    /// Define o peso da fonte como 600.
    /// </summary>
    public static CSSFontWeight W600 { get; } = 600;

    /// <summary>
    /// Define o peso da fonte como 700 (equivalente ao valor <c>bold</c> em muitos contextos).
    /// </summary>
    public static CSSFontWeight W700 { get; } = 700;

    /// <summary>
    /// Define o peso da fonte como 800.
    /// </summary>
    public static CSSFontWeight W800 { get; } = 800;

    /// <summary>
    /// Define o peso da fonte como 900.
    /// </summary>
    public static CSSFontWeight W900 { get; } = 900;

    #endregion
}
