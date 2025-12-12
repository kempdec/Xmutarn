using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa o valor da propriedade CSS <c>text-transform</c>.
/// </summary>
public record class CSSTextTransform : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextTransform"/>.
    /// </summary>
    /// <param name="transform">O tipo da transformação do texto.</param>
    [SetsRequiredMembers]
    public CSSTextTransform(TextTransformType transform) : this(transform.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextTransform"/>.
    /// </summary>
    /// <param name="value">O valor da transformação do texto.</param>
    [SetsRequiredMembers]
    public CSSTextTransform(string value) : base(value)
    {
    }

    /// <summary>
    /// Converte implicitamente um <see cref="TextTransformType"/> para <see cref="CSSTextTransform"/>.
    /// </summary>
    /// <param name="transform">O tipo da transformação.</param>
    public static implicit operator CSSTextTransform(TextTransformType transform) => new(transform);

    /// <summary>
    /// Converte implicitamente uma <see cref="string"/> para <see cref="CSSTextTransform"/>.
    /// </summary>
    /// <param name="value">O valor textual da transformação.</param>
    public static implicit operator CSSTextTransform(string value) => new(value);

    /// <summary>
    /// Converte implicitamente <see cref="CSSTextTransform"/> para <see cref="string"/>.
    /// </summary>
    /// <param name="textTransform">O valor da transformação.</param>
    public static implicit operator string(CSSTextTransform textTransform) => textTransform.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
