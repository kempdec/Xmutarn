using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;
using System.Diagnostics.CodeAnalysis;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa uma família de fontes CSS (<c>font-family</c>).
/// </summary>
public record class CSSFontFamily : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontFamily"/>.
    /// </summary>
    /// <param name="fontGenericFamily">A família genérica de fontes.</param>
    [SetsRequiredMembers]
    public CSSFontFamily(FontFamilyGeneric fontGenericFamily) : this(value: string.Empty, fontGenericFamily)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontFamily"/>.
    /// </summary>
    /// <param name="value">O valor da família de fontes.</param>
    /// <param name="fontGenericFamily">A família genérica de fontes.</param>
    [SetsRequiredMembers]
    public CSSFontFamily(string value, FontFamilyGeneric? fontGenericFamily = null) : this([value], fontGenericFamily)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontFamily"/>.
    /// </summary>
    /// <param name="values">Os valores das famílias de fontes.</param>
    /// <param name="fontGenericFamily">A família genérica de fontes.</param>
    [SetsRequiredMembers]
    public CSSFontFamily(string[] values, FontFamilyGeneric? fontGenericFamily = null) : base()
    {
        for (int i = 0; i < values.Length; i++)
        {
            values[i] = $"\"{values[i]}\"";
        }

        Value = string.Join(", ", values);
        FontGenericFamily = fontGenericFamily;
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontFamily"/>.
    /// </summary>
    /// <param name="value">O valor da família de fontes.</param>
    public static implicit operator CSSFontFamily(string value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontFamily"/>.
    /// </summary>
    /// <param name="fontGenericFamily">A família genérica de fontes.</param>
    public static implicit operator CSSFontFamily(FontFamilyGeneric fontGenericFamily) => new(fontGenericFamily);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="fontFamily">A família de fontes.</param>
    public static implicit operator string(CSSFontFamily fontFamily) => fontFamily.ToString();

    /// <summary>
    /// Obtém a família genérica de fontes.
    /// </summary>
    public FontFamilyGeneric? FontGenericFamily { get; set; }

    /// <inheritdoc/>
    public override string ToCSS()
    {
        if (FontGenericFamily is not null)
        {
            FinalValue = !string.IsNullOrWhiteSpace(Value)
                ? string.Join(", ", [Value, FontGenericFamily.ToKebabCase()])
                : FontGenericFamily.ToKebabCase();
        }

        return base.ToCSS();
    }

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
