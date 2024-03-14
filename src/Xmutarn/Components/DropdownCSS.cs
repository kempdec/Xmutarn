namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de menu suspenso do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class DropdownCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".dropdown{cursor:pointer}.dropdown::before{content:"";position:absolute;top:50%;right:0;margin:-0.125em .3125em 0 0;width:.3125em;height:.3125em;border-bottom:.0625rem solid;border-left:.0625rem solid;border-color:inherit;transform:rotate(-45deg);transition:transform .3s}.dropdown_active::before{transform:rotate(135deg)}""");
    
    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .dropdown {
          cursor: pointer;
        }
        .dropdown::before {
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          margin: -0.125em 0.3125em 0 0;
          width: 0.3125em;
          height: 0.3125em;
          border-bottom: 0.0625rem solid;
          border-left: 0.0625rem solid;
          border-color: inherit;
          transform: rotate(-45deg);
          transition: transform 0.3s;
        }
        .dropdown_active::before {
          transform: rotate(135deg);
        }
        """);
}
