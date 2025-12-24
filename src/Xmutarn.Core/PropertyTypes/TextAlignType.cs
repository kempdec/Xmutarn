namespace KempDec.Xmutarn.Core.PropertyTypes;

/// <summary>
/// Representa os valores possíveis da propriedade CSS <c>text-align</c>.
/// </summary>
public enum TextAlignType
{
    /// <summary>
    /// Alinha o texto à esquerda.
    /// </summary>
    Left,

    /// <summary>
    /// Alinha o texto à direita.
    /// </summary>
    Right,

    /// <summary>
    /// Centraliza o texto horizontalmente.
    /// </summary>
    Center,

    /// <summary>
    /// Justifica o texto, ajustando o espaçamento entre palavras.
    /// </summary>
    Justify,

    /// <summary>
    /// Alinha o texto com base na direção do texto (esquerda para LTR, direita para RTL).
    /// </summary>
    Start,

    /// <summary>
    /// Alinha o texto ao final da linha com base na direção do texto.
    /// </summary>
    End
}
