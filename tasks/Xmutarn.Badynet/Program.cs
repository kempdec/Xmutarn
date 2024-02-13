using KempDec.Xmutarn;
using KempDec.Xmutarn.Core;

var xmutarn = new XmutarnCSS();

WriteCSSTo(xmutarn, @"D:/Xmutarn/src/Xmutarn/wwwroot/css/xmutarn.css");

var xmutarnMin = new XmutarnCSS(isMinified: true);

WriteCSSTo(xmutarnMin, @"D:/Xmutarn/src/Xmutarn/wwwroot/css/xmutarn.min.css");

static void WriteCSSTo(CSS css, string filePath)
{
    using var writer = new StreamWriter(filePath);

    writer.WriteLine(css);
}
