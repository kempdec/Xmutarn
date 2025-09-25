namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um CSS principal.
/// </summary>
/// <remarks>A única diferente entre <see cref="CSSMain"/> e <see cref="CSS"/> é que ele contém o método
/// <see cref="OnInitialized"/> que pode ser chamado ao final do construtor para executar uma lógica
/// personalizada após a inicialização do CSS.</remarks>
public class CSSMain : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSMain"/>.
    /// </summary>
    /// <inheritdoc/>
    public CSSMain(bool isMinified = false) : base(isMinified)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSMain"/>.
    /// </summary>
    /// <inheritdoc/>
    public CSSMain(IEnumerable<CSSSelector> selectors, bool isMinified = false) : base(selectors, isMinified)
    {
    }

    /// <summary>
    /// Executa uma lógica personalizada após a inicialização do CSS.
    /// </summary>
    public virtual void OnInitialized()
    {
    }
}
