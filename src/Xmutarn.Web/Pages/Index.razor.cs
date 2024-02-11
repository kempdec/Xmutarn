using Microsoft.AspNetCore.Components;
using Xmutarn.Web.Models.Settings;

namespace Xmutarn.Web.Pages;

/// <summary>
/// Representa a página inicial.
/// </summary>
public partial class Index
{
    /// <summary>
    /// Obtém ou inicializa as configurações do aplicativo.
    /// </summary>
    [Inject]
    private AppSettings AppSettings { get; init; } = null!;
}
