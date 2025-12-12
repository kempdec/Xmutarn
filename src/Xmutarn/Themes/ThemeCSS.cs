using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.Functions;
using KempDec.Xmutarn.Core.PropertyValues;
using KempDec.Xmutarn.Themes.Palettes;

namespace KempDec.Xmutarn.Themes;

/// <summary>
/// Representa o CSS dos temas do Xmutarn.
/// </summary>
public class ThemeCSS : CSS
{
    /// <summary>
    /// Um dicionário que mapeia os prefixos para os parâmetros dos temas.
    /// </summary>
    private readonly Dictionary<string, string> _prefixAndParams = new()
    {
        { "fg", nameof(CSSSelector.color) },
        { "bg", nameof(CSSSelector.background) }
    };

    /// <summary>
    /// As cores a serem ignoradas nos temas.
    /// </summary>
    private readonly string[] _ignoreColors = [ColorName.Transparent, ColorName.Black, ColorName.White];

    /// <summary>
    /// Inicializa uma nova instância de <see cref="ThemeCSS"/>.
    /// </summary>
    public ThemeCSS()
    {
        foreach ((string themeName, Dictionary<string, CSSColor> themeHues) in Theme.Themes)
        {
            bool isDefaultMainTheme = themeName == Theme.DefaultMain;

            Create(type: "main", themeName, themeHues, isDefaultMainTheme);

            if (isDefaultMainTheme)
            {
                CreateClasses(themeHues);
            }
        }

        foreach ((string colorName, Dictionary<string, CSSColor> colorHues) in Palette.Colors)
        {
            if (_ignoreColors.Contains(colorName))
            {
                continue;
            }

            var featuredColorHues = colorHues.Where(e => !e.Value.IsAccent).ToDictionary();

            if (featuredColorHues.Count > 0)
            {
                bool isDefaultFeaturedTheme = colorName == Theme.DefaultFeaturedColor;

                Create(type: "featured", colorName, featuredColorHues, isDefaultFeaturedTheme);

                if (isDefaultFeaturedTheme)
                {
                    CreateClasses(featuredColorHues);
                }
            }

            var accentColorHues = colorHues.Where(e => e.Value.IsAccent).ToDictionary();

            if (accentColorHues.Count > 0)
            {
                bool isDefaultAccentTheme = colorName == Theme.DefaultAccentColor;

                Create(type: "accent", colorName, accentColorHues, isDefaultAccentTheme);

                if (isDefaultAccentTheme)
                {
                    CreateClasses(accentColorHues);
                }
            }
        }

        // Define as posições dos gradientes dos temas.
        var gradientPositions = new string[] { "top", "right", "bottom", "left" };

        foreach (string position1 in gradientPositions)
        {
            CreateGradientClasses(position1);

            foreach (string position2 in gradientPositions)
            {
                if (position1 != position2)
                {
                    CreateGradientClasses(position1, position2);
                }
            }
        }
    }

    /// <summary>
    /// Cria uma tema.
    /// </summary>
    /// <param name="type">O tipo do tema.</param>
    /// <param name="name">O nome do tema.</param>
    /// <param name="colorHues">Um dicionário que mapeia a tonalidade da cor para a cor.</param>
    /// <param name="isDefaultTheme">Um sinalizador indicando se é o tema padrão.</param>
    private void Create(string type, string name, Dictionary<string, CSSColor> colorHues, bool isDefaultTheme = false) =>
        // Exemplo: [x-main-theme=light].
        Add(selector: $"[x-{type}-theme={name}]", themeSelector =>
        {
            foreach ((string hue, CSSColor color) in colorHues)
            {
                themeSelector.AddVar(name: $"theme-{hue}", color);
            }

            if (isDefaultTheme)
            {
                themeSelector.Extend($"html:not([x-{type}-theme])");
            }
        });

    /// <summary>
    /// Cria as classes de um tema.
    /// </summary>
    /// <param name="colorHues">Um dicionário que mapeia a tonalidade da cor para a cor</param>
    private void CreateClasses(Dictionary<string, CSSColor> colorHues)
    {
        foreach ((string hue, CSSColor color) in colorHues)
        {
            foreach ((string prefix, string param) in _prefixAndParams)
            {
                // Exemplo: .theme-fg-A100.
                Add($".theme-{prefix}-{hue}", new CSSPropertyDictionary
                {
                    { param, Var($"theme-{hue}", color).Important() }
                });

                if (prefix is "bg")
                {
                    foreach (string type in new string[] { "from", "to" })
                    {
                        Add($".theme-bg-{type}-{hue}",
                            e => e.AddVar($"theme-bg-{type}", Var($"theme-{hue}", color)));
                    }
                }
            }
        }
    }

    /// <summary>
    /// Cria as classes gradientes de um tema.
    /// </summary>
    private void CreateGradientClasses(string position1, string? position2 = null)
    {
        string positionName = position2 is not null ? $"{position1}-{position2}" : position1;
        string positions = position2 is not null ? $"{position1} {position2}" : position1;

        CSSVar themeBgFrom = Var("theme-bg-from", Theme.GetFeaturedColor("800"));
        CSSVar themeBgTo = Var("theme-bg-to", Theme.GetFeaturedColor("900"));

        Add($".theme-bg-to-{positionName}",
            e => e.backgroundImage = $"linear-gradient(to {positions}, {themeBgFrom}, {themeBgTo}) !important");
    }
}
