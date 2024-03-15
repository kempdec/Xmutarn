namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de menu do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class MenuCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".menu{position:absolute;z-index:80;margin:0;min-width:10.625rem;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);background-color:var(--theme-card, white);border-radius:.125rem;transform:scale(0);transition:.3s;opacity:0;will-change:transform,opacity}.menu_open{transform:scale(1);opacity:1}.menu_origin-top-right,.menu_origin-top-start{transform-origin:top right}.menu_origin-top-left,.menu_origin-top-end{transform-origin:top left}.menu_origin-bottom-right,.menu_origin-bottom-start{transform-origin:bottom right}.menu_origin-bottom-left,.menu_origin-bottom-end{transform-origin:bottom left}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .menu {
          position: absolute;
          z-index: 80;
          margin: 0;
          min-width: 10.625rem;
          max-width: calc(100vw - 2rem);
          max-height: calc(100vh - 2rem);
          background-color: var(--theme-card, white);
          border-radius: 0.125rem;
          transform: scale(0);
          transition: 0.3s;
          opacity: 0;
          will-change: transform, opacity;
        }
        .menu_open {
          transform: scale(1);
          opacity: 1;
        }
        .menu_origin-top-right, .menu_origin-top-start {
          transform-origin: top right;
        }
        .menu_origin-top-left, .menu_origin-top-end {
          transform-origin: top left;
        }
        .menu_origin-bottom-right, .menu_origin-bottom-start {
          transform-origin: bottom right;
        }
        .menu_origin-bottom-left, .menu_origin-bottom-end {
          transform-origin: bottom left;
        }
        """);
}
