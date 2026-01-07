namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Classe com métodos extensivos para CSS.
/// </summary>
public static class CSSExtension
{
    /// <summary>
    /// Adiciona um seletor CSS composto ao CSS, combinando o seletor anterior com o novo seletor e aplicando as
    /// propriedades CSS fornecidas.
    /// </summary>
    /// <param name="previousSelect">O seletor CSS anterior.</param>
    /// <param name="selector">O novo seletor CSS a ser adicionado.</param>
    /// <param name="options">As opções do seletor CSS.</param>
    /// <param name="breakpoints">Os pontos de interrupção do seletor CSS.</param>
    /// <returns>Um seletor CSS composto ao CSS, combinando o seletor anterior com o novo seletor e aplicando as
    /// propriedades CSS fornecidas.</returns>
    public static CSSSelector? And(this CSSSelector previousSelect, string selector, Action<CSSSelector> options,
        List<CSSBreakpoint>? breakpoints = null) =>
            previousSelect.Reference?.And(previousSelect, selector, options, breakpoints);

    /// <summary>
    /// Adiciona um seletor CSS composto ao CSS, combinando o seletor anterior com o novo seletor e aplicando as
    /// propriedades CSS fornecidas.
    /// </summary>
    /// <param name="previousSelect">O seletor CSS anterior.</param>
    /// <param name="selector">O novo seletor CSS a ser adicionado.</param>
    /// <param name="properties">As propriedades CSS do novo seletor CSS.</param>
    /// <param name="breakpoints">Os pontos de interrupção do seletor CSS.</param>
    /// <returns>Um seletor CSS composto ao CSS, combinando o seletor anterior com o novo seletor e aplicando as
    /// propriedades CSS fornecidas.</returns>
    public static CSSSelector? And(this CSSSelector previousSelect, string selector, CSSProperties properties,
        List<CSSBreakpoint>? breakpoints = null) =>
            previousSelect.Reference?.And(previousSelect, selector, properties, breakpoints);

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
