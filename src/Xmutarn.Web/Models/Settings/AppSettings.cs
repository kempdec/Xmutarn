using Xmutarn.Web.Extensions.AspNetCore;

namespace Xmutarn.Web.Models.Settings;

/// <summary>
/// Associação recursiva das configurações do aplicativo.
/// </summary>
public record AppSettings
{
    /// <summary>
    /// Obtém ou inicializa a URL do repositório do aplicativo no GitHub.
    /// </summary>
    public Uri? GitHubUrl { get; init; }

    /// <summary>
    /// Obtém ou inicializa a URL da licença do aplicativo no GitHub.
    /// </summary>
    public Uri? GitHubLicenseUrl => GitHubUrl?.With("blob/main/LICENSE");
}
