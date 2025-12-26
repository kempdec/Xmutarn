using KempDec.StarterDotNet.Blazor.JSInterops;
using Microsoft.JSInterop;

namespace Xmutarn.Web.Models;

/// <summary>
/// Responsável pela interopabilidade JavaScript do aplicativo.
/// </summary>
public class AppJSInterop : StarterJSInterop, IAsyncDisposable
{
    private readonly Lazy<Task<IJSObjectReference>> _moduleTask;

    /// <summary>
    /// Inicializa uma nova instância de <see cref="AppJSInterop"/>.
    /// </summary>
    /// <param name="runtime">O runtime JavaScript ao qual as chamadas devem ser despachadas.</param>
    public AppJSInterop(IJSRuntime runtime) : base(runtime) =>
        _moduleTask = ImportModuleFileAsync(moduleName: "AppJSInterop", moduleFilePath: "./js/interop.js");

    /// <inheritdoc/>
    public override async ValueTask DisposeAsync()
    {
        if (_moduleTask.IsValueCreated)
        {
            IJSObjectReference module = await _moduleTask.Value;

            await module.DisposeAsync();
        }

        await base.DisposeAsync();
    }
}
