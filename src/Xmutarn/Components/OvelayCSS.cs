namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de sobreposição do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class OvelayCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".overlay{position:fixed;top:0;right:0;bottom:0;left:0;z-index:50;min-width:100%;min-height:100%;background-color:rgba(0,0,0,.5);transition:opacity .25s;opacity:0;pointer-events:none}.overlay_active{opacity:1;pointer-events:auto}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .overlay {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 50;
          min-width: 100%;
          min-height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          transition: opacity 0.25s;
          opacity: 0;
          pointer-events: none;
        }
        .overlay_active {
          opacity: 1;
          pointer-events: auto;
        }
        """);
}
