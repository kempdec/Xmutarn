using Microsoft.AspNetCore.Components;
using Xmutarn.Web.Models.Settings;

namespace Xmutarn.Web.Shared;

/// <summary>
/// Adiciona um componente de rodapé.
/// </summary>
public partial class Footer
{
    /// <summary>
    /// Obtém ou inicializa as configurações do aplicativo.
    /// </summary>
    [Inject]
    private AppSettings AppSettings { get; init; } = null!;
}
