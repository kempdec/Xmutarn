using KempDec.Xmutarn.Core.PropertyValues;
using KempDec.Xmutarn.Themes.Palettes;

namespace KempDec.Xmutarn.Themes;

/// <summary>
/// Define constantes e metodos utilitários para temas.
/// </summary>
public static class Theme
{
    /// <summary>
    /// A cor padrão do tema de realçe.
    /// </summary>
    public const string DefaultAccentColor = ColorName.Pink;

    /// <summary>
    /// A cor padrão do tema de destaque.
    /// </summary>
    public const string DefaultFeaturedColor = ColorName.Purple;

    /// <summary>
    /// Obtém a cor do tema de destaque na paleta.
    /// </summary>
    /// <param name="hue">A tonalidade da cor do tema de destaque a ser buscada na paleta.</param>
    public static CSSColor GetFeaturedColor(string hue = Palette.DefaultColorHue) =>
        Palette.GetColor(DefaultFeaturedColor, hue);
}
