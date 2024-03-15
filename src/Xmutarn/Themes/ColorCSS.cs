using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.PropertyValues;
using KempDec.Xmutarn.Themes.Palettes;

namespace KempDec.Xmutarn.Themes;

/// <summary>
/// Representa o CSS das cores do Xmutarn.
/// </summary>
public class ColorsCSS : CSS
{
    /// <summary>
    /// Um dicionário que mapeia os prefixos para os parâmetros das cores.
    /// </summary>
    private readonly Dictionary<string, string> _prefixAndParams = new()
    {
        { "fg", nameof(CSSSelector.color) },
        { "bg", nameof(CSSSelector.background) }
    };

    /// <summary>
    /// Inicializa uma nova instância de <see cref="ColorsCSS"/>.
    /// </summary>
    public ColorsCSS()
    {
        foreach (string colorName in Palette.ColorNames)
        {
            CSSColor color = Palette.GetColor(colorName) with
            {
                IsImportant = true
            };

            foreach ((string prefix, string param) in _prefixAndParams)
            {
                // Exemplo: .fg-red.
                Add(selector: $".{prefix}-{colorName}", new CSSPropertyDictionary
                {
                    { param, color }
                });
            }
        }
    }
}
