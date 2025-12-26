using KempDec.StarterDotNet.AppRoutes;

namespace Xmutarn.Web.Models.AppRoutes.Docs.Utils;

/// <summary>
/// Representa a rota do aplicativo para <see cref="Pages.Docs.Utils.Typo"/>.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="TypoAppRoute"/>.</remarks>
/// <param name="section">A seção da página.</param>
public sealed class TypoAppRoute(string? section = null) : AppRouteBase(route: $"/docs/utils/typo{section}")
{
}
