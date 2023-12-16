using KempDec.Xmutarn.Core.Builders;

namespace KempDec.Xmutarn.Sample.Components.Pages;

public partial class Home
{
    protected override void OnInitialized() => Builder.WriteCSSTo(new XmutarnCSS(), "wwwroot/css/xmutarn.css");
}
