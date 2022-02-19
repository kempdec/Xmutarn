namespace Xmutarn.Web.Models.Settings;

/// <summary>
/// Associação recursiva das configurações do aplicativo.
/// </summary>
public class AppSettings
{
    /// <summary>
    /// Obtém ou inicializa a versão do Xmutarn do aplicativo.
    /// </summary>
    public string? XmutarnVersion { get; init; }

    /// <summary>
    /// Obtém ou inicializa o endereço do repositório no GitHub do aplicativo.
    /// </summary>
    public string? GithubAddress { get; init; }
}
