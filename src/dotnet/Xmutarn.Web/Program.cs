using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Xmutarn.Web;
using Xmutarn.Web.Models.Settings;

WebAssemblyHostBuilder? builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

AppSettings appSettings = builder.Configuration.GetSection(nameof(AppSettings)).Get<AppSettings>();

builder.Services.AddScoped(_ => appSettings);
builder.Services.AddScoped(_ => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();
