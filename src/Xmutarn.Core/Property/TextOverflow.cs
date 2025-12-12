using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Core.Property;

/// <summary>
/// Fornece valores especiais e predefinidos para a propriedade CSS <c>text-overflow</c>.
/// </summary>
public static class TextOverflow
{
    #region Valores especiais.

    /// <summary>
    /// Indica que o valor deve ser herdado do elemento pai.
    /// </summary>
    public static CSSTextOverflow Inherit { get; } = new("inherit");

    /// <summary>
    /// Define o valor inicial conforme especificado pela linguagem CSS.
    /// </summary>
    public static CSSTextOverflow Initial { get; } = new("initial");

    /// <summary>
    /// Redefine o valor para o definido pelo usuário, ignorando camadas posteriores.
    /// </summary>
    public static CSSTextOverflow Revert { get; } = new("revert");

    /// <summary>
    /// Redefine o valor levando em consideração camadas de origem.
    /// </summary>
    public static CSSTextOverflow RevertLayer { get; } = new("revert-layer");

    /// <summary>
    /// Aplica a regra <c>unset</c>, equivalente a <c>inherit</c> para propriedades herdáveis
    /// e <c>initial</c> para propriedades não herdáveis.
    /// </summary>
    public static CSSTextOverflow Unset { get; } = new("unset");

    #endregion

    #region Valores predefinidos.

    /// <summary>
    /// Recorta o conteúdo excedente.
    /// </summary>
    public static CSSTextOverflow Clip { get; } = TextOverflowType.Clip;

    /// <summary>
    /// Exibe reticências para indicar conteúdo excedente.
    /// </summary>
    public static CSSTextOverflow Ellipsis { get; } = TextOverflowType.Ellipsis;

    #endregion
}
