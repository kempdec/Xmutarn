using Xmutarn.Web.Models.AppRoutes.Docs;

namespace Xmutarn.Web.Models.AppRoutes;

/// <summary>
/// Fornece instâncias <see cref="IAppRoute"/> pré-construídas que podem ser usadas para definir uma rota do aplicativo.
/// </summary>
public class DocsAppRoute
{
    /// <summary>
    /// Obtém a rota do aplicativo para <see cref="Pages.Docs.Introduction"/>.
    /// </summary>
    /// <param name="section">A seção da página.</param>
    /// <returns>A rota do aplicativo para <see cref="Pages.Docs.Introduction"/>.</returns>
    public IntroductionAppRoute Introduction(string? section = null) => new(section);
}
