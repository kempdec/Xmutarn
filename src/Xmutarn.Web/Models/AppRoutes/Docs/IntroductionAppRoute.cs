using KempDec.StarterDotNet.AppRoutes;

namespace Xmutarn.Web.Models.AppRoutes.Docs;

/// <summary>
/// Representa a rota do aplicativo para <see cref="Pages.Docs.Introduction"/>.
/// </summary>
/// <param name="section">A seção da página.</param>
/// <remarks>Inicializa uma nova instância de <see cref="IntroductionAppRoute"/>.</remarks>
public sealed class IntroductionAppRoute(string? section = null)
    : AppRouteBase($"/docs/introduction{section}")
{
}
