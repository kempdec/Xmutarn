namespace Xmutarn.Web.Models.Settings;

/// <summary>
/// Associação recursiva das configurações do aplicativo.
/// </summary>
public record AppSettings
{
    /// <summary>
    /// Obtém ou inicializa a URL do GitHub do aplicativo.
    /// </summary>
    public Uri? GitHubUrl { get; init; }
}
