using System.Diagnostics.CodeAnalysis;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa uma cor CSS.
/// </summary>
public record class CSSColor : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSColor"/>.
    /// </summary>
    /// <param name="value">O valor da cor.</param>
    /// <param name="isAccent">Um sinalizador indicando se a cor é de realçe.</param>
    [SetsRequiredMembers]
    public CSSColor(string value, bool isAccent = false) : base(value) => IsAccent = isAccent;

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSColor"/>.
    /// </summary>
    /// <param name="value">O valor da cor.</param>
    public static implicit operator CSSColor(string value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="value">A cor.</param>
    public static implicit operator string(CSSColor value) => value.ToString();

    /// <summary>
    /// Obtém um sinalizador indicando se a cor é de realçe.
    /// </summary>
    public bool IsAccent { get; }

    /// <summary>
    /// Retorna o valor CSS equivalente.
    /// </summary>
    /// <returns>O valor CSS equivalente.</returns>
    public override string ToString() => ToCSS();
}
