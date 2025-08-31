using Microsoft.AspNetCore.Components;
using Microsoft.Extensions.Options;
using Xmutarn.Web.Models.Settings;

namespace Xmutarn.Web;

/// <summary>
/// Representa o componente principal do aplicativo.
/// </summary>
public partial class App
{
    /// <summary>
    /// Obtém ou inicializa as configurações do aplicativo.
    /// </summary>
    [Inject]
    private IOptionsMonitor<AppSettings> AppSettings { get; init; } = null!;
}
