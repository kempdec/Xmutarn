namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitáios de sombra do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class ShadowCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".shadow-none{box-shadow:none !important}.shadow-floating,.menu,.toast{box-shadow:0 .125rem .25rem -0.0625rem rgba(0,0,0,.2),0 .25rem .3125rem 0 rgba(0,0,0,.14),0 .0625rem .625rem 0 rgba(0,0,0,.12)}.shadow-highlight,.navigation-drawer{box-shadow:0 .0625rem .3125rem rgba(0,0,0,.12)}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .shadow-none {
          box-shadow: none !important;
        }
        
        .shadow-floating, .menu, .toast {
          box-shadow: 0 0.125rem 0.25rem -0.0625rem rgba(0, 0, 0, 0.2), 0 0.25rem 0.3125rem 0 rgba(0, 0, 0, 0.14), 0 0.0625rem 0.625rem 0 rgba(0, 0, 0, 0.12);
        }
        
        .shadow-highlight, .navigation-drawer {
          box-shadow: 0 0.0625rem 0.3125rem rgba(0, 0, 0, 0.12);
        }
        """);
}
