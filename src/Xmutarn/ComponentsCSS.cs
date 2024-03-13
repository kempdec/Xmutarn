using KempDec.Xmutarn.Components;
using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa o CSS dos componentes do Xmutarn.
/// </summary>
public class ComponentsCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="ComponentsCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public ComponentsCSS(bool isMinified) : base(isMinified)
    {
        Import(new BorderCSS(IsMinified));
        Import(new ContainerCSS(IsMinified));
        Import(new FlexCSS(IsMinified));
        Import(new FontCSS(IsMinified));
        Import(new InputCSS(IsMinified));
    }
}
