//using KempDec.Xmutarn.Antigo.Themes.Palettes;
//using KempDec.Xmutarn.Core;
//using KempDec.Xmutarn.Core.Functions;

//namespace KempDec.Xmutarn.Antigo.Themes;

///// <summary>
///// Representa o CSS dos temas.
///// </summary>
//internal class ThemeCSS : CSSBase
//{
//    /// <summary>
//    /// Um dicionário que mapeia os prefixos para os parâmetros dos temas.
//    /// </summary>
//    private readonly Dictionary<string, string> _prefixAndParams = new()
//    {
//        { "fg", "color" },
//        { "bg", "background" }
//    };

//    /// <summary>
//    /// As cores a serem ignoradas nos temas.
//    /// </summary>
//    private readonly string[] _ignoreColors = [ColorName.Transparent, ColorName.Black, ColorName.White];

//    /// <summary>
//    /// Inicializa uma nova instância de <see cref="ThemeCSS"/>.
//    /// </summary>
//    public ThemeCSS()
//    {
//        foreach ((string colorName, Dictionary<string, Color> colorHues) in Palette.Colors)
//        {
//            if (_ignoreColors.Contains(colorName))
//            {
//                continue;
//            }

//            var featuredColorHues = colorHues.Where(e => !e.Value.IsAccent).ToDictionary();

//            if (featuredColorHues.Count > 0)
//            {
//                bool isDefaultFeaturedTheme = colorName == Theme.DefaultFeaturedColor;

//                Create("featured", colorName, featuredColorHues, isDefaultFeaturedTheme);

//                if (isDefaultFeaturedTheme)
//                {
//                    CreateClasses(featuredColorHues);
//                }
//            }

//            var accentColorHues = colorHues.Where(e => e.Value.IsAccent).ToDictionary();

//            if (accentColorHues.Count > 0)
//            {
//                bool isDefaultAccentTheme = colorName == Theme.DefaultAccentColor;

//                Create("accent", colorName, accentColorHues, isDefaultAccentTheme);

//                if (isDefaultAccentTheme)
//                {
//                    CreateClasses(accentColorHues);
//                }
//            }
//        }

//        // Define as posições dos gradientes dos temas.
//        var gradientPositions = new string[] { "top", "right", "bottom", "left" };

//        foreach (string position1 in gradientPositions)
//        {
//            CreateGradientClasses(position1);

//            foreach (var position2 in gradientPositions)
//            {
//                if (position1 != position2)
//                {
//                    CreateGradientClasses(position1, position2);
//                }
//            }
//        }
//    }

//    /// <summary>
//    /// Cria uma tema.
//    /// </summary>
//    /// <param name="type">O tipo do tema.</param>
//    /// <param name="name">O nome do tema.</param>
//    /// <param name="colorHues">Um dicionário que mapeia a tonalidade da cor para a cor.</param>
//    /// <param name="isDefaultTheme">Um sinalizador indicando se é o tema padrão.</param>
//    private void Create(string type, string name, Dictionary<string, Color> colorHues, bool isDefaultTheme = false)
//    {
//        var themeProperties = new PropertyDictionary();

//        foreach ((string hue, Color color) in colorHues)
//        {
//            themeProperties.Add($"--theme-{hue}", color);
//        }

//        var themeSelector = new Selector($"[x-{type}-theme={name}]", themeProperties);

//        if (isDefaultTheme)
//        {
//            themeSelector.Extend($"html:not([x-{type}-theme])");
//        }

//        Import(themeSelector);
//    }

//    /// <summary>
//    /// Cria as classes de um tema.
//    /// </summary>
//    /// <param name="colorHues">Um dicionário que mapeia a tonalidade da cor para a cor</param>
//    private void CreateClasses(Dictionary<string, Color> colorHues)
//    {
//        foreach ((string hue, Color color) in colorHues)
//        {
//            foreach ((string prefix, string param) in _prefixAndParams)
//            {
//                AddSelector($".theme-{prefix}-{hue}", new()
//                {
//                    { param, Var($"--theme-{hue}", color) }
//                });

//                if (prefix is "bg")
//                {
//                    foreach (string type in new string[] { "from", "to" })
//                    {
//                        AddSelector($".theme-bg-{type}-{hue}", new()
//                        {
//                            { $"--theme-bg-{type}", Var($"--theme-{hue}", color) }
//                        });
//                    }
//                }
//            }
//        }
//    }

//    /// <summary>
//    /// Cria as classes gradientes de um tema.
//    /// </summary>
//    private void CreateGradientClasses(string position1, string? position2 = null)
//    {
//        string positionName = position2 is not null ? $"{position1}-{position2}" : position1;
//        string positions = position2 is not null ? $"{position1} {position2}" : position1;

//        Var themeBgFrom = Var("--theme-bg-from", Theme.GetFeaturedColor("800"));
//        Var themeBgTo = Var("--theme-bg-to", Theme.GetFeaturedColor("900"));

//        AddSelector($".theme-bg-to-{positionName}", new()
//        {
//            { "background-image", $"linear-gradient(to {positions}, {themeBgFrom}, {themeBgTo}) !important" }
//        });
//    }
//}
