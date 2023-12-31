## Variáveis

**SCSS**
``` scss
$font-stack: Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}
```

**C#**
``` csharp
var fontStack = "Helvetica, sans-serif";
var primaryColor = "#333";

xc.AddSelector("body", new()
{
    { "font", $"100% {fontStack}" },
    { "color", primaryColor }
});
```

**CSS**
``` css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

## Nidificação (Nesting).
**SCSS**
``` scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

**C#**
``` csharp
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
```

**CSS**
``` css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```