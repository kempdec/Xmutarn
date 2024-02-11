namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para um valor de uma propriedade CSS.
/// </summary>
public interface ICSSPropertyValue : ICSSConvertible
{
    /// <summary>
    /// Obtém um sinalizador indicando se o valor da propriedade CSS deve adicionar o modificador "!important".
    /// </summary>
    public bool IsImportant { get; }
}
