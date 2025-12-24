using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa o valor da propriedade CSS <c>text-align</c>.
/// </summary>
public record class CSSTextAlign : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextAlign"/>.
    /// </summary>
    /// <param name="align">O tipo de alinhamento do texto.</param>
    [SetsRequiredMembers]
    public CSSTextAlign(TextAlignType align) : this(align.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextAlign"/>.
    /// </summary>
    /// <param name="value">O valor textual do alinhamento.</param>
    [SetsRequiredMembers]
    public CSSTextAlign(string value) : base(value)
    {
    }

    /// <summary>
    /// Converte implicitamente um <see cref="TextAlignType"/> em <see cref="CSSTextAlign"/>.
    /// </summary>
    public static implicit operator CSSTextAlign(TextAlignType align) => new(align);

    /// <summary>
    /// Converte implicitamente uma cadeia de caracteres em <see cref="CSSTextAlign"/>.
    /// </summary>
    public static implicit operator CSSTextAlign(string value) => new(value);

    /// <summary>
    /// Converte implicitamente um <see cref="CSSTextAlign"/> em <see cref="string"/>.
    /// </summary>
    public static implicit operator string(CSSTextAlign align) => align.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
