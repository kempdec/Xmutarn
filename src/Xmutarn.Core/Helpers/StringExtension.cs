using KempDec.Xmutarn.Core;

/// <summary>
/// Classe com métodos extensivos para <see cref="string"/>.
/// </summary>
public static class StringExtension
{
#pragma warning disable IDE1006 // Estilos de Nomenclatura

    /// <summary>
    /// Cria uma nova instância de <see cref="CSSSelector"/> com o seletor especificado.
    /// </summary>
    /// <param name="selector">O seletor CSS.</param>
    /// <returns>A nova instância de <see cref="CSSSelector"/> com o seletor especificado.</returns>
    public static CSSSelector of(this string selector) => new(Value: selector);

    public static void with(this string selector, Action<CSSSelector> options)
    {
        var cssSelector = new CSSSelector(selector);

        options.Invoke(cssSelector);

        XmutarnCore.css.Add(cssSelector);
    }

#pragma warning restore IDE1006 // Estilos de Nomenclatura
}
