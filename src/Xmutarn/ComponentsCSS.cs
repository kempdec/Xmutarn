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
        Import(new BtnCSS(IsMinified));
        Import(new DropdownCSS(IsMinified));
        Import(new MenuCSS(IsMinified));
        Import(new ListCSS(IsMinified));
        Import(new ToolbarCSS(IsMinified));
        Import(new CardCSS(IsMinified));
        Import(new DialogCSS(IsMinified));
        Import(new NavigationDrawerCSS(IsMinified));
        Import(new OvelayCSS(IsMinified));
        Import(new ToastCSS(IsMinified));
        Import(new AvatarCSS(IsMinified));
    }
}
