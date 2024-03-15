namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de gaveta de navegação do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class NavigationDrawerCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".navigation-drawer{position:fixed;top:0;left:0;overflow-y:auto;z-index:60;width:18.75rem;height:100%;max-width:100%;background-color:var(--theme-card, white);transform:translateX(-100%);transition:.3s;will-change:transform}.navigation-drawer_open{transform:translateX(0)}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .navigation-drawer {
          position: fixed;
          top: 0;
          left: 0;
          overflow-y: auto;
          z-index: 60;
          width: 18.75rem;
          height: 100%;
          max-width: 100%;
          background-color: var(--theme-card, white);
          transform: translateX(-100%);
          transition: 0.3s;
          will-change: transform;
        }
        .navigation-drawer_open {
          transform: translateX(0);
        }
        """);
}
