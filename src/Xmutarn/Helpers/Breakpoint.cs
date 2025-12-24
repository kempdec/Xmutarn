using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.Extensions;

namespace KempDec.Xmutarn.Helpers;

/// <summary>
/// Classe com métodos auxiliares para definição de pontos de interrupção.
/// </summary>
public static class Breakpoint
{
    /// <summary>
    /// Obtém os pontos de interrupção de mídia.
    /// </summary>
    public static List<CSSBreakpoint> Medias { get; } =
    [
        new(Name: "xs", MinWidth: 0.Px()),
        new(Name: "sm", MinWidth: 576.Px()),
        new(Name: "md", MinWidth: 768.Px()),
        new(Name: "lg", MinWidth: 992.Px()),
        new(Name: "xl", MinWidth: 1200.Px())
    ];
}
