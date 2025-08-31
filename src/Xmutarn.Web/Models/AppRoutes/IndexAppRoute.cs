using KempDec.StarterDotNet.AppRoutes;

namespace Xmutarn.Web.Models.AppRoutes;

/// <summary>
/// Representa a rota do aplicativo de <see cref="Pages.Index"/>.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="IndexAppRoute"/>.</remarks>
public sealed class IndexAppRoute() : AppRouteBase("/")
{
}
