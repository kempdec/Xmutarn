using Xmutarn.Web;
using Xmutarn.Web.Models.Settings;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

builder.Services.AddScoped(_ => builder.Configuration.GetSection(nameof(AppSettings)).Get<AppSettings>()
    ?? throw new InvalidOperationException("Não foi possível encontrar as configurações do aplicativo."));

WebApplication app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
