using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.Property;
using KempDec.Xmutarn.Core.PropertyTypes;
using KempDec.Xmutarn.Core.PropertyValues;

namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Define propriedades e métodos utilitários para tipografia.
/// </summary>
public static class Typo
{
    /// <summary>
    /// Obtém os tipos de alinhamento de texto.
    /// </summary>
    public static List<TextAlignType> Aligns { get; } =
    [
        TextAlignType.Left,
        TextAlignType.Right,
        TextAlignType.Center,
        TextAlignType.Justify
    ];

    /// <summary>
    /// Obtém ou define a família de fontes padrão.
    /// </summary>
    public static CSSFontFamily DefaultFamily { get; set; } = new("Roboto", FontFamilyGeneric.SansSerif);

    /// <summary>
    /// Obtém as famílias de fontes.
    /// </summary>
    public static Dictionary<string, CSSFontFamily> Families { get; } = new()
    {
        { "roboto", DefaultFamily }
    };

    /// <summary>
    /// Obtém as expessuras de fontes.
    /// </summary>
    public static Dictionary<string, CSSFontWeight> Weights { get; } = new()
    {
        { "thin", FontWeight.Thin },
        { "light", FontWeight.Light },
        { "regular", FontWeight.Regular },
        { "medium", FontWeight.Medium },
        { "bold", FontWeight.Bold },
        { "black", FontWeight.Black }
    };

    /// <summary>
    /// Obtém os tamanhos de fontes.
    /// </summary>
    public static Dictionary<string, CSSProperties> Sizes { get; } = new()
    {
        {
            "h1",
            new()
            {
                fontSize = FontSize.PxToRem(96),
                fontWeight = FontWeight.Light,
                letterSpacing = "-0.01562em",
                lineHeight = "1"
            }
        },
        {
            "h2",
            new()
            {
                fontSize = FontSize.PxToRem(60),
                fontWeight = FontWeight.Light,
                letterSpacing = "-0.00833em",
                lineHeight = "1"
            }
        },
        {
            "h3",
            new()
            {
                fontSize = FontSize.PxToRem(48),
                fontWeight = FontWeight.Regular,
                letterSpacing = "normal",
                lineHeight = "3.125rem"
            }
        },
        {
            "h4",
            new()
            {
                fontSize = FontSize.PxToRem(34),
                fontWeight = FontWeight.Regular,
                letterSpacing = "0.00735em",
                lineHeight = "2.5rem"
            }
        },
        {
            "h5",
            new()
            {
                fontSize = FontSize.PxToRem(24),
                fontWeight = FontWeight.Regular,
                letterSpacing = "normal",
                lineHeight = "2rem"
            }
        },
        {
            "h6",
            new()
            {
                fontSize = FontSize.PxToRem(20),
                fontWeight = FontWeight.Medium,
                letterSpacing = "0.0125em",
                lineHeight = "1.6"
            }
        },
        {
            "subtitle-1",
            new()
            {
                fontSize = FontSize.PxToRem(18),
                fontWeight = FontWeight.Regular,
                letterSpacing = "0.00937em",
                lineHeight = "1.875rem"
            }
        },
        {
            "subtitle-2",
            new()
            {
                fontSize = FontSize.PxToRem(15),
                fontWeight = FontWeight.Medium,
                letterSpacing = "0.00714em",
                lineHeight = "1.625rem"
            }
        },
        {
            "body-1",
            new()
            {
                fontSize = FontSize.PxToRem(16),
                fontWeight = FontWeight.Regular,
                letterSpacing = "0.03125em",
                lineHeight = "1.5"
            }
        },
        {
            "body-2",
            new()
            {
                fontSize = FontSize.PxToRem(14),
                fontWeight = FontWeight.Regular,
                letterSpacing = "0.01786em",
                lineHeight = "1.5rem"
            }
        },
        {
            "caption-1",
            new()
            {
                fontSize = FontSize.PxToRem(13),
                fontWeight = FontWeight.Regular,
                letterSpacing = "0.03333em",
                lineHeight = "1.375rem"
            }
        },
        {
            "caption-2",
            new()
            {
                fontSize = FontSize.PxToRem(12),
                fontWeight = FontWeight.Medium,
                letterSpacing = "0.03333em",
                lineHeight = "1.25rem"
            }
        }
    };
}
