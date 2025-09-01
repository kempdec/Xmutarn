using Xmutarn.Web;
using Xmutarn.Web.Extensions.AspNetCore;
using Xmutarn.Web.Models.Settings;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents();

AppSettings appSettings = builder.AddAppSettings();

WebApplication app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAntiforgery();
app.UseRequestLocalization(appSettings.Cultures);

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode();

app.Run();
