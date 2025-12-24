using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa um estilo de fonte CSS (<c>font-style</c>).
/// </summary>
public record class CSSFontStyle : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontStyle"/>.
    /// </summary>
    /// <param name="style">O estilo da fonte.</param>
    [SetsRequiredMembers]
    public CSSFontStyle(FontStyleType style) : this(style.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontStyle"/>.
    /// </summary>
    /// <param name="value">O valor do estilo da fonte.</param>
    [SetsRequiredMembers]
    public CSSFontStyle(string value) : base(value)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontStyle"/>.
    /// </summary>
    /// <param name="style">O estilo da fonte.</param>
    public static implicit operator CSSFontStyle(FontStyleType style) => new(style);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSFontStyle"/>.
    /// </summary>
    /// <param name="value">O valor do estilo da fonte.</param>
    public static implicit operator CSSFontStyle(string value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="fontStyle">O estilo da fonte.</param>
    public static implicit operator string(CSSFontStyle fontStyle) => fontStyle.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
