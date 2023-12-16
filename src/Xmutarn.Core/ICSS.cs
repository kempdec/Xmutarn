namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para um CSS.
/// </summary>
public interface ICSS
{
    /// <summary>
    /// Retorna uma cadeia de caracteres que representa o CSS do objeto atual.
    /// </summary>
    /// <remarks>Sobreponha <see cref="object.ToString()"/> para retornar <see cref="ToCSS"/>.</remarks>
    /// <returns>Uma cadeia de caracteres que representa o CSS do objeto atual.</returns>
    public string ToCSS();
}
