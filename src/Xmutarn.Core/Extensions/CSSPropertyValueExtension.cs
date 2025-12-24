namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Fornece métodos extensivos para valores de propriedades CSS.
/// </summary>
public static class CSSPropertyValueExtension
{
    /// <summary>
    /// Define <see cref="CSSPropertyValue.IsImportant"/> como <see langword="true"/> e retorna esta instância.
    /// </summary>
    /// <typeparam name="T">O tipo do valor CSS.</typeparam>
    /// <param name="value">A instância do valor CSS.</param>
    /// <returns>A própria instância com <see cref="CSSPropertyValue.IsImportant"/> definido como <see langword="true"/>.</returns>
    public static T Important<T>(this T value) where T : CSSPropertyValue => value with
    {
        IsImportant = true
    };
}
