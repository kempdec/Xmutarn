namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para uma propriedade CSS.
/// </summary>
public interface ICSSProperty : ICSSConvertible
{
    /// <summary>
    /// Obtém o nome da propriedade CSS.
    /// </summary>
    public string Name { get; }

    /// <summary>
    /// Obtém o valor da propriedade CSS.
    /// </summary>
    public CSSPropertyValue Value { get; }
}
