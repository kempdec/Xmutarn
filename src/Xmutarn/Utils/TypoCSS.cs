using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.Property;
using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;
using KempDec.Xmutarn.Helpers;

namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de tipografia do Xmutarn.
/// </summary>
public class TypoCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="TypoCSS"/>.
    /// </summary>
    public TypoCSS() : base()
    {
        SetFontFamily();
        SetFontStyle();
        SetTextOverflow();
        SetTextTransform();
        SetFontWeight();
        SetFontSize();
        SetTextAlign();
    }

    /// <summary>
    /// Define as famílias de fontes.
    /// </summary>
    private void SetFontFamily()
    {
        foreach ((string name, CSSFontFamily fontFamily) in Typo.Families)
        {
            Add(selector: $".typo-use-{name}", e =>
            {
                e.fontFamily = fontFamily;

                if (fontFamily == Typo.DefaultFamily)
                {
                    e.Extend(".typo-use-default");
                }
            });
        }
    }

    /// <summary>
    /// Define os tamanhos de fontes.
    /// </summary>
    private void SetFontSize()
    {
        foreach (KeyValuePair<string, CSSProperties> size in Typo.Sizes)
        {
            Add($".typo-{size.Key}", size.Value, Breakpoint.Medias);
        }

        Edit(".typo-body-2", e => e.Extend(".avatar--title, .avatar--summary"));
    }

    /// <summary>
    /// Define os estilos de fonte.
    /// </summary>
    private void SetFontStyle() => Add(selector: ".typo-style-italic", e => e.fontStyle = FontStyle.Italic.Important());

    /// <summary>
    /// Define as expessuras de fonte.
    /// </summary>
    private void SetFontWeight()
    {
        foreach ((string style, CSSFontWeight weight) in Typo.Weights)
        {
            Add($".typo-weight-{style}", e => e.fontWeight = weight.Important());
        }
    }

    /// <summary>
    /// Define o alinhamento do texto.
    /// </summary>
    private void SetTextAlign()
    {
        foreach (TextAlignType align in Typo.Aligns)
        {
            CSSTextAlign textAlign = align;

            Add($".typo-align-{align.ToKebabCase()}", e => e.textAlign = textAlign.Important(), Breakpoint.Medias);
        }
    }

    /// <summary>
    /// Define como os textos que excedem o tamanho do contêiner serão tratados.
    /// </summary>
    private void SetTextOverflow()
    {
        var properties = new CSSProperties
        {
            whiteSpace = "nowrap",
            overflow = "hidden"
        };

        TextOverflowType[] overflows = [TextOverflowType.Clip, TextOverflowType.Ellipsis];

        foreach (TextOverflowType overflow in overflows)
        {
            string selector = $".typo-overflow-{overflow.ToKebabCase()}";

            AddOrExtend(selector, properties);
            Add(selector, e => e.textOverflow = overflow);
        }
    }

    /// <summary>
    /// Define as transformações de texto.
    /// </summary>
    private void SetTextTransform()
    {
        Dictionary<string, CSSTextTransform> transforms = new()
        {
            { "none", TextTransform.None },
            { "upper", TextTransform.Uppercase },
            { "lower", TextTransform.Lowercase },
            { "capitalize", TextTransform.Capitalize }
        };

        foreach ((string name, CSSTextTransform transform) in transforms)
        {
            Add($".typo-to-{name}", e => e.textTransform = transform.Important());
        }
    }

    ///// <summary>
    ///// Importa o CSS minificado.
    ///// </summary>
    //protected override void ImportOldMinCSS() => Import(""".typo-use-roboto,.typo-use-default{font-family:"Roboto",sans-serif}.typo-style-italic{font-style:italic !important}.typo-overflow-ellipsis,.typo-overflow-clip{white-space:nowrap;overflow:hidden}.typo-overflow-clip{text-overflow:clip}.typo-overflow-ellipsis{text-overflow:ellipsis}.typo-to-upper{text-transform:uppercase !important}.typo-to-lower{text-transform:lowercase !important}.typo-to-capitalize{text-transform:capitalize !important}.typo-weight-thin{font-weight:100 !important}.typo-weight-light{font-weight:300 !important}.typo-weight-regular{font-weight:400 !important}.typo-weight-medium{font-weight:500 !important}.typo-weight-bold{font-weight:700 !important}.typo-weight-black{font-weight:900 !important}.typo-h1{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2,.avatar--title,.avatar--summary{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left{text-align:left !important}.typo-align-right{text-align:right !important}.typo-align-center{text-align:center !important}.typo-align-justify{text-align:justify !important}@media(min-width: 576px){.typo-h1__sm{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__sm{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__sm{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__sm{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__sm{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__sm{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__sm{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__sm{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__sm{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__sm{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__sm{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__sm{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__sm{text-align:left !important}.typo-align-right__sm{text-align:right !important}.typo-align-center__sm{text-align:center !important}}@media(min-width: 768px){.typo-h1__md{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__md{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__md{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__md{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__md{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__md{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__md{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__md{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__md{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__md{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__md{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__md{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__md{text-align:left !important}.typo-align-right__md{text-align:right !important}.typo-align-center__md{text-align:center !important}}@media(min-width: 992px){.typo-h1__lg{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__lg{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__lg{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__lg{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__lg{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__lg{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__lg{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__lg{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__lg{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__lg{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__lg{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__lg{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__lg{text-align:left !important}.typo-align-right__lg{text-align:right !important}.typo-align-center__lg{text-align:center !important}}@media(min-width: 1200px){.typo-h1__xl{font-size:6rem;font-weight:300;letter-spacing:-0.01562em;line-height:1}.typo-h2__xl{font-size:3.75rem;font-weight:300;letter-spacing:-0.00833em;line-height:1}.typo-h3__xl{font-size:3rem;font-weight:400;letter-spacing:normal;line-height:3.125rem}.typo-h4__xl{font-size:2.125rem;font-weight:400;letter-spacing:0.00735em;line-height:2.5rem}.typo-h5__xl{font-size:1.5rem;font-weight:400;letter-spacing:normal;line-height:2rem}.typo-h6__xl{font-size:1.25rem;font-weight:500;letter-spacing:0.0125em;line-height:1.6}.typo-subtitle-1__xl{font-size:1.125rem;font-weight:400;letter-spacing:0.00937em;line-height:1.875rem}.typo-subtitle-2__xl{font-size:0.9375rem;font-weight:500;letter-spacing:0.00714em;line-height:1.625rem}.typo-body-1__xl{font-size:1rem;font-weight:400;letter-spacing:0.03125em;line-height:1.5}.typo-body-2__xl{font-size:0.875rem;font-weight:400;letter-spacing:0.01786em;line-height:1.5rem}.typo-caption-1__xl{font-size:0.8125rem;font-weight:400;letter-spacing:0.03333em;line-height:1.375rem}.typo-caption-2__xl{font-size:0.75rem;font-weight:500;letter-spacing:0.03333em;line-height:1.25rem}.typo-align-left__xl{text-align:left !important}.typo-align-right__xl{text-align:right !important}.typo-align-center__xl{text-align:center !important}}""");

    ///// <summary>
    ///// Importa o CSS.
    ///// </summary>
    //protected override void ImportOldCSS() => Import("""
    //    @media (min-width: 576px) {
    //      .typo-h1__sm {
    //        font-size: 6rem;
    //        font-weight: 300;
    //        letter-spacing: -0.01562em;
    //        line-height: 1;
    //      }

    //      .typo-h2__sm {
    //        font-size: 3.75rem;
    //        font-weight: 300;
    //        letter-spacing: -0.00833em;
    //        line-height: 1;
    //      }

    //      .typo-h3__sm {
    //        font-size: 3rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 3.125rem;
    //      }

    //      .typo-h4__sm {
    //        font-size: 2.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00735em;
    //        line-height: 2.5rem;
    //      }

    //      .typo-h5__sm {
    //        font-size: 1.5rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 2rem;
    //      }

    //      .typo-h6__sm {
    //        font-size: 1.25rem;
    //        font-weight: 500;
    //        letter-spacing: 0.0125em;
    //        line-height: 1.6;
    //      }

    //      .typo-subtitle-1__sm {
    //        font-size: 1.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00937em;
    //        line-height: 1.875rem;
    //      }

    //      .typo-subtitle-2__sm {
    //        font-size: 0.9375rem;
    //        font-weight: 500;
    //        letter-spacing: 0.00714em;
    //        line-height: 1.625rem;
    //      }

    //      .typo-body-1__sm {
    //        font-size: 1rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03125em;
    //        line-height: 1.5;
    //      }

    //      .typo-body-2__sm {
    //        font-size: 0.875rem;
    //        font-weight: 400;
    //        letter-spacing: 0.01786em;
    //        line-height: 1.5rem;
    //      }

    //      .typo-caption-1__sm {
    //        font-size: 0.8125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.375rem;
    //      }

    //      .typo-caption-2__sm {
    //        font-size: 0.75rem;
    //        font-weight: 500;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.25rem;
    //      }

    //      .typo-align-left__sm {
    //        text-align: left !important;
    //      }

    //      .typo-align-right__sm {
    //        text-align: right !important;
    //      }

    //      .typo-align-center__sm {
    //        text-align: center !important;
    //      }
    //    }
    //    @media (min-width: 768px) {
    //      .typo-h1__md {
    //        font-size: 6rem;
    //        font-weight: 300;
    //        letter-spacing: -0.01562em;
    //        line-height: 1;
    //      }

    //      .typo-h2__md {
    //        font-size: 3.75rem;
    //        font-weight: 300;
    //        letter-spacing: -0.00833em;
    //        line-height: 1;
    //      }

    //      .typo-h3__md {
    //        font-size: 3rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 3.125rem;
    //      }

    //      .typo-h4__md {
    //        font-size: 2.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00735em;
    //        line-height: 2.5rem;
    //      }

    //      .typo-h5__md {
    //        font-size: 1.5rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 2rem;
    //      }

    //      .typo-h6__md {
    //        font-size: 1.25rem;
    //        font-weight: 500;
    //        letter-spacing: 0.0125em;
    //        line-height: 1.6;
    //      }

    //      .typo-subtitle-1__md {
    //        font-size: 1.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00937em;
    //        line-height: 1.875rem;
    //      }

    //      .typo-subtitle-2__md {
    //        font-size: 0.9375rem;
    //        font-weight: 500;
    //        letter-spacing: 0.00714em;
    //        line-height: 1.625rem;
    //      }

    //      .typo-body-1__md {
    //        font-size: 1rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03125em;
    //        line-height: 1.5;
    //      }

    //      .typo-body-2__md {
    //        font-size: 0.875rem;
    //        font-weight: 400;
    //        letter-spacing: 0.01786em;
    //        line-height: 1.5rem;
    //      }

    //      .typo-caption-1__md {
    //        font-size: 0.8125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.375rem;
    //      }

    //      .typo-caption-2__md {
    //        font-size: 0.75rem;
    //        font-weight: 500;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.25rem;
    //      }

    //      .typo-align-left__md {
    //        text-align: left !important;
    //      }

    //      .typo-align-right__md {
    //        text-align: right !important;
    //      }

    //      .typo-align-center__md {
    //        text-align: center !important;
    //      }
    //    }
    //    @media (min-width: 992px) {
    //      .typo-h1__lg {
    //        font-size: 6rem;
    //        font-weight: 300;
    //        letter-spacing: -0.01562em;
    //        line-height: 1;
    //      }

    //      .typo-h2__lg {
    //        font-size: 3.75rem;
    //        font-weight: 300;
    //        letter-spacing: -0.00833em;
    //        line-height: 1;
    //      }

    //      .typo-h3__lg {
    //        font-size: 3rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 3.125rem;
    //      }

    //      .typo-h4__lg {
    //        font-size: 2.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00735em;
    //        line-height: 2.5rem;
    //      }

    //      .typo-h5__lg {
    //        font-size: 1.5rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 2rem;
    //      }

    //      .typo-h6__lg {
    //        font-size: 1.25rem;
    //        font-weight: 500;
    //        letter-spacing: 0.0125em;
    //        line-height: 1.6;
    //      }

    //      .typo-subtitle-1__lg {
    //        font-size: 1.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00937em;
    //        line-height: 1.875rem;
    //      }

    //      .typo-subtitle-2__lg {
    //        font-size: 0.9375rem;
    //        font-weight: 500;
    //        letter-spacing: 0.00714em;
    //        line-height: 1.625rem;
    //      }

    //      .typo-body-1__lg {
    //        font-size: 1rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03125em;
    //        line-height: 1.5;
    //      }

    //      .typo-body-2__lg {
    //        font-size: 0.875rem;
    //        font-weight: 400;
    //        letter-spacing: 0.01786em;
    //        line-height: 1.5rem;
    //      }

    //      .typo-caption-1__lg {
    //        font-size: 0.8125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.375rem;
    //      }

    //      .typo-caption-2__lg {
    //        font-size: 0.75rem;
    //        font-weight: 500;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.25rem;
    //      }

    //      .typo-align-left__lg {
    //        text-align: left !important;
    //      }

    //      .typo-align-right__lg {
    //        text-align: right !important;
    //      }

    //      .typo-align-center__lg {
    //        text-align: center !important;
    //      }
    //    }
    //    @media (min-width: 1200px) {
    //      .typo-h1__xl {
    //        font-size: 6rem;
    //        font-weight: 300;
    //        letter-spacing: -0.01562em;
    //        line-height: 1;
    //      }

    //      .typo-h2__xl {
    //        font-size: 3.75rem;
    //        font-weight: 300;
    //        letter-spacing: -0.00833em;
    //        line-height: 1;
    //      }

    //      .typo-h3__xl {
    //        font-size: 3rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 3.125rem;
    //      }

    //      .typo-h4__xl {
    //        font-size: 2.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00735em;
    //        line-height: 2.5rem;
    //      }

    //      .typo-h5__xl {
    //        font-size: 1.5rem;
    //        font-weight: 400;
    //        letter-spacing: normal;
    //        line-height: 2rem;
    //      }

    //      .typo-h6__xl {
    //        font-size: 1.25rem;
    //        font-weight: 500;
    //        letter-spacing: 0.0125em;
    //        line-height: 1.6;
    //      }

    //      .typo-subtitle-1__xl {
    //        font-size: 1.125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.00937em;
    //        line-height: 1.875rem;
    //      }

    //      .typo-subtitle-2__xl {
    //        font-size: 0.9375rem;
    //        font-weight: 500;
    //        letter-spacing: 0.00714em;
    //        line-height: 1.625rem;
    //      }

    //      .typo-body-1__xl {
    //        font-size: 1rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03125em;
    //        line-height: 1.5;
    //      }

    //      .typo-body-2__xl {
    //        font-size: 0.875rem;
    //        font-weight: 400;
    //        letter-spacing: 0.01786em;
    //        line-height: 1.5rem;
    //      }

    //      .typo-caption-1__xl {
    //        font-size: 0.8125rem;
    //        font-weight: 400;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.375rem;
    //      }

    //      .typo-caption-2__xl {
    //        font-size: 0.75rem;
    //        font-weight: 500;
    //        letter-spacing: 0.03333em;
    //        line-height: 1.25rem;
    //      }

    //      .typo-align-left__xl {
    //        text-align: left !important;
    //      }

    //      .typo-align-right__xl {
    //        text-align: right !important;
    //      }

    //      .typo-align-center__xl {
    //        text-align: center !important;
    //      }
    //    }
    //    """);
}
