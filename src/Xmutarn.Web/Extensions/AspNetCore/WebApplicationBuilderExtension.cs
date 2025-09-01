using Xmutarn.Web.Models.Settings;

namespace Xmutarn.Web.Extensions.AspNetCore;

/// <summary>
/// Classe com métodos extensivos para <see cref="WebApplicationBuilder"/>.
/// </summary>
public static class WebApplicationBuilderExtension
{
    /// <summary>
    /// Adiciona as configurações do aplicativo para o aplicativo.
    /// </summary>
    /// <param name="builder">O construtor do aplicativo.</param>
    /// <returns>As configurações do aplicativo.</returns>
    public static AppSettings AddAppSettings(this WebApplicationBuilder builder)
    {
        AppSettings appSettings = builder.Configuration.GetSection(nameof(AppSettings)).Get<AppSettings>()
            ?? throw new InvalidOperationException("Não foi possível encontrar as configurações do aplicativo.");

        builder.Configuration.AddEnvironmentVariables(prefix: "Xmutarn_");
        builder.Services.AddSingleton(_ => appSettings);

        return appSettings;
    }
}
