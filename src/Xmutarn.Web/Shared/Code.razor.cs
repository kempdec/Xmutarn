using Microsoft.AspNetCore.Components;

namespace Xmutarn.Web.Shared;

/// <summary>
/// Adiciona um componente de trecho de código.
/// </summary>
public partial class Code
{
    /// <summary>
    /// Obtém ou inicializa o conteúdo filho do componente.
    /// </summary>
    [Parameter]
    [EditorRequired]
    public RenderFragment ChildContent { get; init; }
}
