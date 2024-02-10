namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para converter o tipo de referência ou tipo de valor em um valor CSS equivalente.
/// </summary>
public interface ICSSConvertible
{
    /// <summary>
    /// Obtém um sinalizador indicando se o valor equivalente em CSS deve ser minificado.
    /// </summary>
    public bool IsMinified { get; }

    /// <summary>
    /// Retorna o valor CSS equivalente da instância.
    /// </summary>
    /// <returns>O valor CSS equivalente da instância.</returns>
    public string ToCSS();
}
