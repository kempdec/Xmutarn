using KempDec.Xmutarn.Core.Functions;
using KempDec.Xmutarn.Core.Modifiers;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Fornece abstração para um CSS.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSBase"/>.</remarks>
/// <param name="cssList">Os CSS.</param>
public abstract class CSSBase(params ICSS[] cssList) : ICSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="string"/>.
    /// </summary>
    /// <param name="css">O CSS.</param>
    public static implicit operator string(CSSBase css) => css.ToString();

    /// <summary>
    /// Os CSS.
    /// </summary>
    private readonly List<ICSS> _cssList = [.. cssList];

    /// <inheritdoc/>
    public override string ToString() => ToCSS();

    /// <summary>
    /// Adiciona um seletor CSS.
    /// </summary>
    /// <param name="selector">O valor do seletor CSS.</param>
    /// <param name="properties">As propriedades do seletor CSS.</param>
    public void AddSelector(string selector, PropertyDictionary properties) =>
        Import(new Selector(selector, properties));

    /// <summary>
    /// Importa um CSS para o CSS atual.
    /// </summary>
    /// <param name="css">O CSS a ser importado.</param>
    public void Import(ICSS css) => _cssList.Add(css);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="Modifiers.Important"/>.
    /// </summary>
    /// <param name="value">O valor de uma propriedade CSS.</param>
    /// <returns>Uma nova instância de <see cref="Modifiers.Important"/>.</returns>
    public static Important Important(IPropertyValue value) => new(value);

    /// <summary>
    /// Inicializa uma nova instância de <see cref="Functions.Var"/>.
    /// </summary>
    /// <param name="name">O nome da variável CSS.</param>
    /// <param name="defaultValue">O valor padrão da variável CSS.</param>
    /// <returns>Uma nova instância de <see cref="Functions.Var"/>.</returns>
    public static Var Var(string name, IPropertyValue defaultValue) => new(name, defaultValue);

    /// <inheritdoc/>
    public string ToCSS() => string.Join($"{Environment.NewLine}{Environment.NewLine}", _cssList);
}
