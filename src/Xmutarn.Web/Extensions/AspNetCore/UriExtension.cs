namespace Xmutarn.Web.Extensions.AspNetCore;

/// <summary>
/// Classe com métodos extensivos para <see cref="Uri"/>.
/// </summary>
public static class UriExtension
{
    /// <summary>
    /// Obtém uma nova instância de <see cref="Uri"/> com a URI relativa adicionada para a URI base especificada.
    /// </summary>
    /// <param name="uri">A URI base.</param>
    /// <param name="relativeUri">A URI relativa para ser adicionada a URI base.</param>
    /// <param name="keepAbsolutePath">Um sinalizador indicando se o caminho absoluto da URI base deve ser
    /// mantido.</param>
    /// <returns>Uma nova instância de <see cref="Uri"/> com a URI relativa adicionada para a URI base
    /// especificada.</returns>
    public static Uri With(this Uri uri, Uri relativeUri, bool keepAbsolutePath = true) =>
        With(uri, relativeUri.IsAbsoluteUri ? relativeUri.PathAndQuery : relativeUri.OriginalString,
            keepAbsolutePath: keepAbsolutePath);

    /// <summary>
    /// Obtém uma nova instância de <see cref="Uri"/> com a URI relativa adicionada para a URI base especificada.
    /// </summary>
    /// <param name="uri">A URI base.</param>
    /// <param name="relativeUri">A URI relativa para ser adicionada a URI base.</param>
    /// <param name="queryString">A <see cref="QueryString"/> da URI relativa.</param>
    /// <param name="keepAbsolutePath">Um sinalizador indicando se o caminho absoluto da URI base deve ser
    /// mantido.</param>
    /// <returns>Uma nova instância de <see cref="Uri"/> com a URI relativa adicionada para a URI base
    /// especificada.</returns>
    public static Uri With(this Uri uri, string relativeUri, QueryString? queryString = null,
        bool keepAbsolutePath = true)
    {
        if (keepAbsolutePath)
        {
            relativeUri = $"{uri.AbsolutePath.TrimEnd('/')}/{relativeUri.TrimStart('/')}";
        }

        return new(uri, relativeUri + queryString);
    }

    /// <summary>
    /// Obtém uma nova instância de <see cref="Uri"/> com a <see cref="QueryString"/> especificada.
    /// </summary>
    /// <param name="uri">A URI base.</param>
    /// <param name="queryString">A <see cref="QueryString"/> a ser adicionada.</param>
    /// <returns>Uma nova instância de <see cref="Uri"/> com a <see cref="QueryString"/> especificada.</returns>
    public static string WithQueryString(this Uri uri, QueryString queryString) => uri + queryString.ToString();

    /// <summary>
    /// Obtém uma nova instância de <see cref="Uri"/> com o nome e valor do parâmetro de uma <c>QueryString</c>
    /// especificados.
    /// </summary>
    /// <param name="uri">A URI base.</param>
    /// <param name="name">O nome do parâmetro da <c>QueryString</c>.</param>
    /// <param name="value">O valor do parâmetro da <c>QueryString</c>.</param>
    /// <returns>Uma nova instância de <see cref="Uri"/> com o nome e valor do parâmetro de uma <c>QueryString</c>
    /// especificados.</returns>
    public static string WithQueryString(this Uri uri, string name, object value) =>
        uri.WithQueryString(new QueryString($"?{name}={value}"));
}
