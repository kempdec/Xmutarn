using KempDec.StarterDotNet.AppRoutes;
using Xmutarn.Web.Models.AppRoutes.Docs.Utils;

namespace Xmutarn.Web.Models.AppRoutes.Docs;

/// <summary>
/// Fornece instâncias <see cref="IAppRoute"/> pré-construídas que podem ser usadas para definir uma rota do aplicativo.
/// </summary>
public class UtilsAppRoute
{
    /// <summary>
    /// Obtém a rota do aplicativo para <see cref="Pages.Docs.Utils.Typo"/>.
    /// </summary>
    /// <param name="section">A seção da página.</param>
    /// <returns>A rota do aplicativo para <see cref="Pages.Docs.Utils.Typo"/>.</returns>
    public TypoAppRoute Typo(string? section = null) => new(section);
}
