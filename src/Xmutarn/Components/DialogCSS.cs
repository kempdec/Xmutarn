namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de diálogo do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class DialogCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".dialog{position:fixed;top:0;right:0;bottom:0;left:0;z-index:70;overflow-x:hidden;overflow-y:auto;transition:opacity .75s;opacity:0;pointer-events:none}.dialog_open{opacity:1;pointer-events:auto}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .dialog {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 70;
          overflow-x: hidden;
          overflow-y: auto;
          transition: opacity 0.75s;
          opacity: 0;
          pointer-events: none;
        }
        .dialog_open {
          opacity: 1;
          pointer-events: auto;
        }
        """);
}
