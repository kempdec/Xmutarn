using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e predefinidos para a propriedade CSS <c>text-align</c>.
/// </summary>
public static class TextAlign
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor da propriedade <c>text-align</c> deve ser herdado do elemento pai.
    /// </summary>
    public static CSSTextAlign Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor inicial conforme especificado pela linguagem CSS.
    /// </summary>
    public static CSSTextAlign Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor para o definido pelo usuário, ignorando regras do autor.
    /// </summary>
    public static CSSTextAlign Revert { get; } = new("revert");

    /// <summary>
    /// Redefine o valor considerando camadas de origem.
    /// </summary>
    public static CSSTextAlign RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Remove qualquer valor definido, aplicando a regra <c>unset</c>.
    /// </summary>
    public static CSSTextAlign Unset { get; } = new("unset");

    #endregion

    #region Valores de alinhamento.

    /// <summary>
    /// Alinha o texto à esquerda.
    /// </summary>
    public static CSSTextAlign Left { get; } = TextAlignType.Left;

    /// <summary>
    /// Alinha o texto à direita.
    /// </summary>
    public static CSSTextAlign Right { get; } = TextAlignType.Right;

    /// <summary>
    /// Centraliza o texto.
    /// </summary>
    public static CSSTextAlign Center { get; } = TextAlignType.Center;

    /// <summary>
    /// Justifica o texto.
    /// </summary>
    public static CSSTextAlign Justify { get; } = TextAlignType.Justify;

    /// <summary>
    /// Alinha o texto ao início da linha conforme a direção do texto.
    /// </summary>
    public static CSSTextAlign Start { get; } = TextAlignType.Start;

    /// <summary>
    /// Alinha o texto ao final da linha conforme a direção do texto.
    /// </summary>
    public static CSSTextAlign End { get; } = TextAlignType.End;

    #endregion
}
