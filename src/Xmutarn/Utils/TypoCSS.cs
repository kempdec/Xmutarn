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
}
