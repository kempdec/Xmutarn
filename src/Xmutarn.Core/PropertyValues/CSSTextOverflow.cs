using System.Diagnostics.CodeAnalysis;
using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa o valor da propriedade CSS <c>text-overflow</c>.
/// </summary>
public record class CSSTextOverflow : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextOverflow"/>.
    /// </summary>
    /// <param name="type">O valor predefinido de <c>text-overflow</c>.</param>
    [SetsRequiredMembers]
    public CSSTextOverflow(TextOverflowType type) : this(type.ToKebabCase())
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSTextOverflow"/>.
    /// </summary>
    /// <param name="value">O valor textual da propriedade.</param>
    [SetsRequiredMembers]
    public CSSTextOverflow(string value) : base(value)
    {
    }

    /// <summary>
    /// Converte um valor de <see cref="TextOverflowType"/> para <see cref="CSSTextOverflow"/>.
    /// </summary>
    /// <param name="type">O valor de transbordo de texto.</param>
    public static implicit operator CSSTextOverflow(TextOverflowType type) => new(type);

    /// <summary>
    /// Converte uma cadeia de caracteres em <see cref="CSSTextOverflow"/>.
    /// </summary>
    /// <param name="value">O valor textual da propriedade.</param>
    public static implicit operator CSSTextOverflow(string value) => new(value);

    /// <summary>
    /// Converte implicitamente um <see cref="CSSTextOverflow"/> em <see cref="string"/>.
    /// </summary>
    /// <param name="textOverflow">O valor da propriedade.</param>
    public static implicit operator string(CSSTextOverflow textOverflow) => textOverflow.ToString();

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
