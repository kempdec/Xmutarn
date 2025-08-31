using KempDec.StarterDotNet.AppRoutes;
using Xmutarn.Web.Models.AppRoutes;

namespace Xmutarn.Web.Models;

/// <summary>
/// Fornece instâncias <see cref="IAppRoute"/> pré-construídas que podem ser usadas para definir uma rota do aplicativo.
/// </summary>
public static class AppRoute
{
    /// <summary>
    /// Obtém instâncias <see cref="IAppRoute"/> pré-construídas que podem ser usadas para definir uma rota do
    /// aplicativo.
    /// </summary>
    public static DocsAppRoute Docs { get; } = new();

    /// <summary>
    /// Obtém a rota do aplicativo de <see cref="Pages.Index"/>.
    /// </summary>
    /// <returns>A rota do aplicativo de <see cref="Pages.Index"/>.</returns>
    public static IndexAppRoute Index() => new();
}
