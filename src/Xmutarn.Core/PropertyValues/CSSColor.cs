namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa uma cor CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSColor"/>.</remarks>
/// <param name="value">O valor da cor.</param>
/// <param name="isAccent">Um sinalizador indicando se a cor é de realçe.</param>
public class CSSColor(string value, bool isAccent = false) : CSSPropertyValue(value)
{
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
    public bool IsAccent { get; } = isAccent;
}
