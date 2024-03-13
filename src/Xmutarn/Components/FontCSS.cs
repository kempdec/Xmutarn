using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de fonte do Xmutarn.
/// </summary>
public class FontCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="FontCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public FontCSS(bool isMinified) : base(isMinified)
    {
        if (IsMinified)
        {
            ImportMinCSS();
        }
        else
        {
            ImportCSS();
        }
    }

    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    private void ImportMinCSS() => Import("""@font-face{font-family:"Roboto";font-style:normal;font-weight:100;src:local("Roboto Thin"),local("Roboto-Thin"),url("../fonts/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzI.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:100;src:local("Roboto Thin Italic"),local("Roboto-ThinItalic"),url("../fonts/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:300;src:local("Roboto Light"),local("Roboto-Light"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:300;src:local("Roboto Light Italic"),local("Roboto-LightItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:local("Roboto"),local("Roboto-Regular"),url("../fonts/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:400;src:local("Roboto Italic"),local("Roboto-Italic"),url("../fonts/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:500;src:local("Roboto Medium"),local("Roboto-Medium"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:500;src:local("Roboto Medium Italic"),local("Roboto-MediumItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:700;src:local("Roboto Bold"),local("Roboto-Bold"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:700;src:local("Roboto Bold Italic"),local("Roboto-BoldItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:normal;font-weight:900;src:local("Roboto Black"),local("Roboto-Black"),url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}@font-face{font-family:"Roboto";font-style:italic;font-weight:900;src:local("Roboto Black Italic"),local("Roboto-BlackItalic"),url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2") format("woff2");unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    private void ImportCSS() => Import("""
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 100;
          src: local("Roboto Thin"), local("Roboto-Thin"), url("../fonts/roboto/v18/KFOkCnqEu92Fr1MmgVxIIzI.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 100;
          src: local("Roboto Thin Italic"), local("Roboto-ThinItalic"), url("../fonts/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzAdLw.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 300;
          src: local("Roboto Light"), local("Roboto-Light"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmSU5fBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 300;
          src: local("Roboto Light Italic"), local("Roboto-LightItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 400;
          src: local("Roboto"), local("Roboto-Regular"), url("../fonts/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 400;
          src: local("Roboto Italic"), local("Roboto-Italic"), url("../fonts/roboto/v18/KFOkCnqEu92Fr1Mu51xIIzI.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          src: local("Roboto Medium"), local("Roboto-Medium"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 500;
          src: local("Roboto Medium Italic"), local("Roboto-MediumItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 700;
          src: local("Roboto Bold"), local("Roboto-Bold"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmWUlfBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 700;
          src: local("Roboto Bold Italic"), local("Roboto-BoldItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 900;
          src: local("Roboto Black"), local("Roboto-Black"), url("../fonts/roboto/v18/KFOlCnqEu92Fr1MmYUtfBBc4.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        @font-face {
          font-family: "Roboto";
          font-style: italic;
          font-weight: 900;
          src: local("Roboto Black Italic"), local("Roboto-BlackItalic"), url("../fonts/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc6CsQ.woff2") format("woff2");
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        """);
}
