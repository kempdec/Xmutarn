namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Classe com métodos extensivos para CSS.
/// </summary>
public static class CSSExtension
{
    /// <summary>
    /// Cria uma nova instância de <see cref="CSSSelector"/> com o seletor especificado.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser criado.</param>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    /// <returns>A nova instância de <see cref="CSSSelector"/> com o seletor especificado.</returns>
    public static CSSSelector Of(this string selector, bool isMinified = false) =>
        new(Value: selector, isMinified);

    /// <summary>
    /// Cria uma nova instância de <see cref="CSSSelector"/> com o seletor e as opções especificadas.
    /// </summary>
    /// <param name="selector">O seletor CSS a ser criado.</param>
    /// <param name="options">As opções do seletor CSS.</param>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    /// <returns>A nova instância de <see cref="CSSSelector"/> com o seletor e as opções especificadas.</returns>
    public static CSSSelector With(this string selector, Action<CSSSelector> options, bool isMinified = false)
    {
        CSSSelector cssSelector = selector.Of(isMinified);

        options.Invoke(cssSelector);

        return cssSelector;
    }
}
