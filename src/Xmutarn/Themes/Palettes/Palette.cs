using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Themes.Palettes;

/// <summary>
/// Representa uma paleta de cores.
/// </summary>
internal static class Palette
{
    /// <summary>
    /// A tonalidade padrão das cores.
    /// </summary>
    public const string DefaultColorHue = "500";

    /// <summary>
    /// Obtém um dicionário que mapeia o nome da cor para um dicionário que mapeia a tonalidade da cor para a cor da
    /// paleta.
    /// </summary>
    /// <remarks>Cores baseadas na paleta do Material Design de 2014 (https://material.io/design/color).</remarks>
    public static Dictionary<string, Dictionary<string, Color>> Colors { get; } = new()
    {
        [ColorName.Transparent] = new()
        {
            { "500", "transparent" }
        },
        [ColorName.Black] = new()
        {
            { "500", "black" }
        },
        [ColorName.White] = new()
        {
            { "500", "white" }
        },
        [ColorName.Red] = new()
        {
            { "50", "#FFEBEE" },
            { "100", "#FFCDD2" },
            { "200", "#EF9A9A" },
            { "300", "#E57373" },
            { "400", "#EF5350" },
            { "500", "#F44336" },
            { "600", "#E53935" },
            { "700", "#D32F2F" },
            { "800", "#C62828" },
            { "900", "#B71C1C" },
            { "A100", new("#FF8A80", isAccent: true) },
            { "A200", new("#FF5252", isAccent: true) },
            { "A400", new("#FF1744", isAccent: true) },
            { "A700", new("#D50000", isAccent: true) }
        },
        [ColorName.Pink] = new()
        {
            { "50", "#FCE4EC" },
            { "100", "#F8BBD0" },
            { "200", "#F48FB1" },
            { "300", "#F06292" },
            { "400", "#EC407A" },
            { "500", "#E91E63" },
            { "600", "#D81B60" },
            { "700", "#C2185B" },
            { "800", "#AD1457" },
            { "900", "#880E4F" },
            { "A100", new("#FF80AB", isAccent: true) },
            { "A200", new("#FF4081", isAccent: true) },
            { "A400", new("#F50057", isAccent: true) },
            { "A700", new("#C51162", isAccent: true) }
        },
        [ColorName.Purple] = new()
        {
            { "50", "#F3E5F5" },
            { "100", "#E1BEE7" },
            { "200", "#CE93D8" },
            { "300", "#BA68C8" },
            { "400", "#AB47BC" },
            { "500", "#9C27B0" },
            { "600", "#8E24AA" },
            { "700", "#7B1FA2" },
            { "800", "#6A1B9A" },
            { "900", "#4A148C" },
            { "A100", new("#EA80FC", isAccent: true) },
            { "A200", new("#E040FB", isAccent: true) },
            { "A400", new("#D500F9", isAccent: true) },
            { "A700", new("#AA00FF", isAccent: true) }
        },
        [ColorName.DeepPurple] = new()
        {
            { "50", "#EDE7F6" },
            { "100", "#D1C4E9" },
            { "200", "#B39DDB" },
            { "300", "#9575CD" },
            { "400", "#7E57C2" },
            { "500", "#673AB7" },
            { "600", "#5E35B1" },
            { "700", "#512DA8" },
            { "800", "#4527A0" },
            { "900", "#311B92" },
            { "A100", new("#B388FF", isAccent: true) },
            { "A200", new("#7C4DFF", isAccent: true) },
            { "A400", new("#651FFF", isAccent: true) },
            { "A700", new("#6200EA", isAccent: true) }
        },
        [ColorName.Indigo] = new()
        {
            { "50", "#E8EAF6" },
            { "100", "#C5CAE9" },
            { "200", "#9FA8DA" },
            { "300", "#7986CB" },
            { "400", "#5C6BC0" },
            { "500", "#3F51B5" },
            { "600", "#3949AB" },
            { "700", "#303F9F" },
            { "800", "#283593" },
            { "900", "#1A237E" },
            { "A100", new("#8C9EFF", isAccent: true) },
            { "A200", new("#536DFE", isAccent: true) },
            { "A400", new("#3D5AFE", isAccent: true) },
            { "A700", new("#304FFE", isAccent: true) }
        },
        [ColorName.Blue] = new()
        {
            { "50", "#E3F2FD" },
            { "100", "#BBDEFB" },
            { "200", "#90CAF9" },
            { "300", "#64B5F6" },
            { "400", "#42A5F5" },
            { "500", "#2196F3" },
            { "600", "#1E88E5" },
            { "700", "#1976D2" },
            { "800", "#1565C0" },
            { "900", "#0D47A1" },
            { "A100", new("#82B1FF", isAccent: true) },
            { "A200", new("#448AFF", isAccent: true) },
            { "A400", new("#2979FF", isAccent: true) },
            { "A700", new("#2962FF", isAccent: true) }
        },
        [ColorName.LightBlue] = new()
        {
            { "50", "#E1F5FE" },
            { "100", "#B3E5FC" },
            { "200", "#81D4FA" },
            { "300", "#4FC3F7" },
            { "400", "#29B6F6" },
            { "500", "#03A9F4" },
            { "600", "#039BE5" },
            { "700", "#0288D1" },
            { "800", "#0277BD" },
            { "900", "#01579B" },
            { "A100", new("#80D8FF", isAccent: true) },
            { "A200", new("#40C4FF", isAccent: true) },
            { "A400", new("#00B0FF", isAccent: true) },
            { "A700", new("#0091EA", isAccent: true) }
        },
        [ColorName.Cyan] = new()
        {
            { "50", "#E0F7FA" },
            { "100", "#B2EBF2" },
            { "200", "#80DEEA" },
            { "300", "#4DD0E1" },
            { "400", "#26C6DA" },
            { "500", "#00BCD4" },
            { "600", "#00ACC1" },
            { "700", "#0097A7" },
            { "800", "#00838F" },
            { "900", "#006064" },
            { "A100", new("#84FFFF", isAccent: true) },
            { "A200", new("#18FFFF", isAccent: true) },
            { "A400", new("#00E5FF", isAccent: true) },
            { "A700", new("#00B8D4", isAccent: true) }
        },
        [ColorName.Teal] = new()
        {
            { "50", "#E0F2F1" },
            { "100", "#B2DFDB" },
            { "200", "#80CBC4" },
            { "300", "#4DB6AC" },
            { "400", "#26A69A" },
            { "500", "#009688" },
            { "600", "#00897B" },
            { "700", "#00796B" },
            { "800", "#00695C" },
            { "900", "#004D40" },
            { "A100", new("#A7FFEB", isAccent: true) },
            { "A200", new("#64FFDA", isAccent: true) },
            { "A400", new("#1DE9B6", isAccent: true) },
            { "A700", new("#00BFA5", isAccent: true) }
        },
        [ColorName.Green] = new()
        {
            { "50", "#E8F5E9" },
            { "100", "#C8E6C9" },
            { "200", "#A5D6A7" },
            { "300", "#81C784" },
            { "400", "#66BB6A" },
            { "500", "#4CAF50" },
            { "600", "#43A047" },
            { "700", "#388E3C" },
            { "800", "#2E7D32" },
            { "900", "#1B5E20" },
            { "A100", new("#B9F6CA", isAccent: true) },
            { "A200", new("#69F0AE", isAccent: true) },
            { "A400", new("#00E676", isAccent: true) },
            { "A700", new("#00C853", isAccent: true) }
        },
        [ColorName.LightGreen] = new()
        {
            { "50", "#F1F8E9" },
            { "100", "#DCEDC8" },
            { "200", "#C5E1A5" },
            { "300", "#AED581" },
            { "400", "#9CCC65" },
            { "500", "#8BC34A" },
            { "600", "#7CB342" },
            { "700", "#689F38" },
            { "800", "#558B2F" },
            { "900", "#33691E" },
            { "A100", new("#CCFF90", isAccent: true) },
            { "A200", new("#B2FF59", isAccent: true) },
            { "A400", new("#76FF03", isAccent: true) },
            { "A700", new("#64DD17", isAccent: true) }
        },
        [ColorName.Lime] = new()
        {
            { "50", "#F9FBE7" },
            { "100", "#F0F4C3" },
            { "200", "#E6EE9C" },
            { "300", "#DCE775" },
            { "400", "#D4E157" },
            { "500", "#CDDC39" },
            { "600", "#C0CA33" },
            { "700", "#AFB42B" },
            { "800", "#9E9D24" },
            { "900", "#827717" },
            { "A100", new("#F4FF81", isAccent: true) },
            { "A200", new("#EEFF41", isAccent: true) },
            { "A400", new("#C6FF00", isAccent: true) },
            { "A700", new("#AEEA00", isAccent: true) }
        },
        [ColorName.Yellow] = new()
        {
            { "50", "#FFFDE7" },
            { "100", "#FFF9C4" },
            { "200", "#FFF59D" },
            { "300", "#FFF176" },
            { "400", "#FFEE58" },
            { "500", "#FFEB3B" },
            { "600", "#FDD835" },
            { "700", "#FBC02D" },
            { "800", "#F9A825" },
            { "900", "#F57F17" },
            { "A100", new("#FFFF8D", isAccent: true) },
            { "A200", new("#FFFF00", isAccent: true) },
            { "A400", new("#FFEA00", isAccent: true) },
            { "A700", new("#FFD600", isAccent: true) }
        },
        [ColorName.Amber] = new()
        {
            { "50", "#FFF8E1" },
            { "100", "#FFECB3" },
            { "200", "#FFE082" },
            { "300", "#FFD54F" },
            { "400", "#FFCA28" },
            { "500", "#FFC107" },
            { "600", "#FFB300" },
            { "700", "#FFA000" },
            { "800", "#FF8F00" },
            { "900", "#FF6F00" },
            { "A100", new("#FFE57F", isAccent: true) },
            { "A200", new("#FFD740", isAccent: true) },
            { "A400", new("#FFC400", isAccent: true) },
            { "A700", new("#FFAB00", isAccent: true) }
        },
        [ColorName.Orange] = new()
        {
            { "50", "#FFF3E0" },
            { "100", "#FFE0B2" },
            { "200", "#FFCC80" },
            { "300", "#FFB74D" },
            { "400", "#FFA726" },
            { "500", "#FF9800" },
            { "600", "#FB8C00" },
            { "700", "#F57C00" },
            { "800", "#EF6C00" },
            { "900", "#E65100" },
            { "A100", new("#FFD180", isAccent: true) },
            { "A200", new("#FFAB40", isAccent: true) },
            { "A400", new("#FF9100", isAccent: true) },
            { "A700", new("#FF6D00", isAccent: true) }
        },
        [ColorName.DeepOrange] = new()
        {
            { "50", "#FBE9E7" },
            { "100", "#FFCCBC" },
            { "200", "#FFAB91" },
            { "300", "#FF8A65" },
            { "400", "#FF7043" },
            { "500", "#FF5722" },
            { "600", "#F4511E" },
            { "700", "#E64A19" },
            { "800", "#D84315" },
            { "900", "#BF360C" },
            { "A100", new("#FF9E80", isAccent: true) },
            { "A200", new("#FF6E40", isAccent: true) },
            { "A400", new("#FF3D00", isAccent: true) },
            { "A700", new("#DD2C00", isAccent: true) }
        },
        [ColorName.Brown] = new()
        {
            { "50", "#EFEBE9" },
            { "100", "#D7CCC8" },
            { "200", "#BCAAA4" },
            { "300", "#A1887F" },
            { "400", "#8D6E63" },
            { "500", "#795548" },
            { "600", "#6D4C41" },
            { "700", "#5D4037" },
            { "800", "#4E342E" },
            { "900", "#3E2723" }
        },
        [ColorName.Grey] = new()
        {
            { "50", "#FAFAFA" },
            { "100", "#F5F5F5" },
            { "200", "#EEEEEE" },
            { "300", "#E0E0E0" },
            { "400", "#BDBDBD" },
            { "500", "#9E9E9E" },
            { "600", "#757575" },
            { "700", "#616161" },
            { "800", "#424242" },
            { "900", "#212121" }
        },
        [ColorName.BlueGrey] = new()
        {
            { "50", "#ECEFF1" },
            { "100", "#CFD8DC" },
            { "200", "#B0BEC5" },
            { "300", "#90A4AE" },
            { "400", "#78909C" },
            { "500", "#607D8B" },
            { "600", "#546E7A" },
            { "700", "#455A64" },
            { "800", "#37474F" },
            { "900", "#263238" }
        }
    };

    /// <summary>
    /// Obtém os nomes das cores da paleta.
    /// </summary>
    public static string[] ColorNames => Colors.Keys.ToArray();

    /// <summary>
    /// Obtém a cor transparente da paleta.
    /// </summary>
    public static string Transparent { get; } = GetColor(ColorName.Transparent);

    /// <summary>
    /// Obtém a cor preta da paleta.
    /// </summary>
    public static string Black { get; } = GetColor(ColorName.Black);

    /// <summary>
    /// Obtém a cor branca da paleta.
    /// </summary>
    public static string White { get; } = GetColor(ColorName.White);

    /// <summary>
    /// Obtém a cor vermelha da paleta.
    /// </summary>
    public static string Red { get; } = GetColor(ColorName.Red);

    /// <summary>
    /// Obtém a cor rosa da paleta.
    /// </summary>
    public static string Pink { get; } = GetColor(ColorName.Pink);

    /// <summary>
    /// Obtém a cor roxo da paleta.
    /// </summary>
    public static string Purple { get; } = GetColor(ColorName.Purple);

    /// <summary>
    /// Obtém a cor roxo escuro da paleta.
    /// </summary>
    public static string DeepPurple { get; } = GetColor(ColorName.DeepPurple);

    /// <summary>
    /// Obtém a cor índigo da paleta.
    /// </summary>
    public static string Indigo { get; } = GetColor(ColorName.Indigo);

    /// <summary>
    /// Obtém a cor azul da paleta.
    /// </summary>
    public static string Blue { get; } = GetColor(ColorName.Blue);

    /// <summary>
    /// Obtém a cor azul claro da paleta.
    /// </summary>
    public static string LightBlue { get; } = GetColor(ColorName.LightBlue);

    /// <summary>
    /// Obtém a cor ciano da paleta.
    /// </summary>
    public static string Cyan { get; } = GetColor(ColorName.Cyan);

    /// <summary>
    /// Obtém a cor cerceta da paleta.
    /// </summary>
    public static string Teal { get; } = GetColor(ColorName.Teal);

    /// <summary>
    /// Obtém a cor verde da paleta.
    /// </summary>
    public static string Green { get; } = GetColor(ColorName.Green);

    /// <summary>
    /// Obtém a cor verde claro da paleta.
    /// </summary>
    public static string LightGreen { get; } = GetColor(ColorName.LightGreen);

    /// <summary>
    /// Obtém a cor lima da paleta.
    /// </summary>
    public static string Lime { get; } = GetColor(ColorName.Lime);

    /// <summary>
    /// Obtém a cor amarelo da paleta.
    /// </summary>
    public static string Yellow { get; } = GetColor(ColorName.Yellow);

    /// <summary>
    /// Obtém a cor âmbar da paleta.
    /// </summary>
    public static string Amber { get; } = GetColor(ColorName.Amber);

    /// <summary>
    /// Obtém a cor laranja da paleta.
    /// </summary>
    public static string Orange { get; } = GetColor(ColorName.Orange);

    /// <summary>
    /// Obtém a cor laranja escuro da paleta.
    /// </summary>
    public static string DeepOrange { get; } = GetColor(ColorName.DeepOrange);

    /// <summary>
    /// Obtém a cor marrom da paleta.
    /// </summary>
    public static string Brown { get; } = GetColor(ColorName.Brown);

    /// <summary>
    /// Obtém a cor cinza da paleta.
    /// </summary>
    public static string Grey { get; } = GetColor(ColorName.Grey);

    /// <summary>
    /// Obtém a cor vermelha da paleta.
    /// </summary>
    public static string BlueGrey { get; } = GetColor(ColorName.BlueGrey);

    /// <summary>
    /// Obtém uma cor da paleta.
    /// </summary>
    /// <param name="name">O nome da cor a ser buscada na paleta.</param>
    /// <param name="hue">A tonalidade da cor a ser buscada na paleta.</param>
    public static Color GetColor(string name, string hue = DefaultColorHue) => Colors[name][hue];
}
