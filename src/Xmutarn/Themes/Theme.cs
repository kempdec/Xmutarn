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
    /// O tema principal padrão.
    /// </summary>
    public const string DefaultMain = "light";

    /// <summary>
    /// Obtém um dicionário que mapeia o nome do tema para um dicionário que mapeia o nome da tonalidade para a cor da
    /// tonalidade do tema.
    /// </summary>
    public static Dictionary<string, Dictionary<string, CSSColor>> Themes { get; } = new()
    {
        ["light"] = new()
        {
            { "primary", "rgba(0, 0, 0, 0.87)" },
            { "secondary", "rgba(0, 0, 0, 0.54)" },
            { "hint", "rgba(0, 0, 0, 0.38)" },
            { "disabled", "rgba(0, 0, 0, 0.38)" },
            { "dividers", "rgba(0, 0, 0, 0.12)" },
            { "background", "#FAFAFA" },
            { "card", "white" }
        },

        ["dark"] = new()
        {
            { "primary", "white" },
            { "secondary", "rgba(255, 255, 255, 0.7)" },
            { "hint", "rgba(255, 255, 255, 0.5)" },
            { "disabled", "rgba(255, 255, 255, 0.5)" },
            { "dividers", "rgba(255, 255, 255, 0.06)" },
            { "background", "#131313" },
            { "card", "#191919" }
        }
    };

    /// <summary>
    /// Obtém a cor do tema de destaque na paleta.
    /// </summary>
    /// <param name="hue">A tonalidade da cor do tema de destaque a ser buscada na paleta.</param>
    public static CSSColor GetFeaturedColor(string hue = Palette.DefaultColorHue) =>
        Palette.GetColor(DefaultFeaturedColor, hue);
}
