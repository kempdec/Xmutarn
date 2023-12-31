var xc = new KempDec.Xmutarn.Core.CSSBase();

// Variáveis.
var fontStack = "Helvetica, sans-serif";
var primaryColor = "#333";

xc.AddSelector("body", new()
{
    { "font", $"100% {fontStack}" },
    { "color", primaryColor }
});

// Nidificação (Nesting).
xc.AddSelector("nav ul", new()
{
    { "margin", "0" },
    { "padding", "0" },
    { "list-style", "none" }
});

xc.AddSelector("nav li", new()
{
    { "display", "inline-block" }
});

xc.AddSelector("nav a", new()
{
    { "display", "block" },
    { "padding", "6px 12px" },
    { "text-decoration", "none" }
});

// Ignora o código abaixo.
KempDec.Xmutarn.Core.Builders.Builder.WriteCSSTo(xc, "D:/Xmutarn/src/Xmutarn.Playground/playground.css");
