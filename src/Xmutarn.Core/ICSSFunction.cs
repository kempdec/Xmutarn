namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para uma função CSS.
/// </summary>
public interface ICSSFunction : ICSSPropertyValue
{
    /// <summary>
    /// Obtém o nome da função CSS.
    /// </summary>
    public string Name { get; }
}
