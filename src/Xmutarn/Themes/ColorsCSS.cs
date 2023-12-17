using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Themes.Palettes;

namespace KempDec.Xmutarn.Themes;

/// <summary>
/// Representa o CSS das cores.
/// </summary>
internal class ColorsCSS : CSSBase
{
    /// <summary>
    /// Um dicionário que mapeia os prefixos para os parâmetros das cores.
    /// </summary>
    private readonly Dictionary<string, string> _prefixAndParams = new()
    {
        { "fg", "color" },
        { "bg", "background" }
    };

    /// <summary>
    /// Inicializa uma nova instância de <see cref="ColorsCSS"/>.
    /// </summary>
    public ColorsCSS() : base()
    {
        foreach (string colorName in Palette.ColorNames)
        {
            Color color = Palette.GetColor(colorName);

            foreach ((string prefix, string param) in _prefixAndParams)
            {
                // Exemplo: .fg-red.
                AddSelector($".{prefix}-{colorName}", new()
                {
                    { param, Important(color) }
                });
            }
        }
    }
}
