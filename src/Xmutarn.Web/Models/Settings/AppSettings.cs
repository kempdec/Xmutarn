using Xmutarn.Web.Extensions.AspNetCore;

namespace Xmutarn.Web.Models.Settings;

/// <summary>
/// Associação recursiva das configurações do aplicativo.
/// </summary>
public record AppSettings
{
    /// <summary>
    /// Obtém ou inicializa a versão do cache. Incrementar ela ajuda a evitar o cache de imagens e outros arquivos.
    /// </summary>
    public int CacheVersion { get; init; }

    /// <summary>
    /// Obtém um <see cref="QueryString"/> para a versão do cache.
    /// </summary>
    public QueryString CacheVersionQueryString => new($"?v={CacheVersion}");

    /// <summary>
    /// Obtém ou inicializa a URL do repositório do aplicativo no GitHub.
    /// </summary>
    public Uri? GitHubUrl { get; init; }

    /// <summary>
    /// Obtém ou inicializa a URL da licença do aplicativo no GitHub.
    /// </summary>
    public Uri? GitHubLicenseUrl => GitHubUrl?.With("blob/main/LICENSE");

    /// <summary>
    /// Adiciona a URL especificada com <see cref="CacheVersionQueryString"/>.
    /// </summary>
    /// <param name="url">A URL.</param>
    /// <returns>A URL especificada com <see cref="CacheVersionQueryString"/> adicionado.</returns>
    public string WithCache(string url) => url + CacheVersionQueryString;
}
