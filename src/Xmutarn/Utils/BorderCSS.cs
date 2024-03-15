namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de borda do Xmutarn.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="BorderCSS"/>.</remarks>
/// <inheritdoc/>
public class BorderCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    protected override void ImportOldMinCSS() => Import(""".border-left-lg,.border-bottom-lg,.border-right-lg,.border-top-lg,.border-lg,.border-left-md,.border-bottom-md,.border-right-md,.border-top-md,.border-md,.border-left-sm,.border-bottom-sm,.border-right-sm,.border-top-sm,.border-sm,.border-left-0,.border-bottom-0,.border-right-0,.border-top-0,.border-0{border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important}.border-0{border-width:0 !important;border-style:solid}.border-top-0{border-top-width:0 !important;border-top-style:solid}.border-right-0{border-right-width:0 !important;border-right-style:solid}.border-bottom-0{border-bottom-width:0 !important;border-bottom-style:solid}.border-left-0{border-left-width:0 !important;border-left-style:solid}.border-sm{border-width:1px !important;border-style:solid}.border-top-sm{border-top-width:1px !important;border-top-style:solid}.border-right-sm{border-right-width:1px !important;border-right-style:solid}.border-bottom-sm{border-bottom-width:1px !important;border-bottom-style:solid}.border-left-sm{border-left-width:1px !important;border-left-style:solid}.border-md{border-width:2px !important;border-style:solid}.border-top-md{border-top-width:2px !important;border-top-style:solid}.border-right-md{border-right-width:2px !important;border-right-style:solid}.border-bottom-md{border-bottom-width:2px !important;border-bottom-style:solid}.border-left-md{border-left-width:2px !important;border-left-style:solid}.border-lg{border-width:3px !important;border-style:solid}.border-top-lg{border-top-width:3px !important;border-top-style:solid}.border-right-lg{border-right-width:3px !important;border-right-style:solid}.border-bottom-lg{border-bottom-width:3px !important;border-bottom-style:solid}.border-left-lg{border-left-width:3px !important;border-left-style:solid}.border-radius-0{border-radius:0 !important}.border-radius-top-0,.border-radius-top-right-0{border-top-right-radius:0 !important}.border-radius-top-0,.border-radius-top-left-0{border-top-left-radius:0 !important}.border-radius-bottom-0,.border-radius-bottom-right-0{border-bottom-right-radius:0 !important}.border-radius-bottom-0,.border-radius-bottom-left-0{border-bottom-left-radius:0 !important}.border-radius-circle{border-radius:50% !important}.border-radius-sm{border-radius:0.125rem !important}.border-radius-md{border-radius:0.3125rem !important}.border-radius-lg{border-radius:0.5rem !important}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportOldCSS() => Import("""
        .border-left-lg, .border-bottom-lg, .border-right-lg, .border-top-lg, .border-lg, .border-left-md, .border-bottom-md, .border-right-md, .border-top-md, .border-md, .border-left-sm, .border-bottom-sm, .border-right-sm, .border-top-sm, .border-sm, .border-left-0, .border-bottom-0, .border-right-0, .border-top-0, .border-0 {
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important;
        }

        .border-0 {
          border-width: 0 !important;
          border-style: solid;
        }
        
        .border-top-0 {
          border-top-width: 0 !important;
          border-top-style: solid;
        }
        
        .border-right-0 {
          border-right-width: 0 !important;
          border-right-style: solid;
        }
        
        .border-bottom-0 {
          border-bottom-width: 0 !important;
          border-bottom-style: solid;
        }
        
        .border-left-0 {
          border-left-width: 0 !important;
          border-left-style: solid;
        }
        
        .border-sm {
          border-width: 1px !important;
          border-style: solid;
        }
        
        .border-top-sm {
          border-top-width: 1px !important;
          border-top-style: solid;
        }
        
        .border-right-sm {
          border-right-width: 1px !important;
          border-right-style: solid;
        }
        
        .border-bottom-sm {
          border-bottom-width: 1px !important;
          border-bottom-style: solid;
        }
        
        .border-left-sm {
          border-left-width: 1px !important;
          border-left-style: solid;
        }
        
        .border-md {
          border-width: 2px !important;
          border-style: solid;
        }
        
        .border-top-md {
          border-top-width: 2px !important;
          border-top-style: solid;
        }
        
        .border-right-md {
          border-right-width: 2px !important;
          border-right-style: solid;
        }
        
        .border-bottom-md {
          border-bottom-width: 2px !important;
          border-bottom-style: solid;
        }
        
        .border-left-md {
          border-left-width: 2px !important;
          border-left-style: solid;
        }
        
        .border-lg {
          border-width: 3px !important;
          border-style: solid;
        }
        
        .border-top-lg {
          border-top-width: 3px !important;
          border-top-style: solid;
        }
        
        .border-right-lg {
          border-right-width: 3px !important;
          border-right-style: solid;
        }
        
        .border-bottom-lg {
          border-bottom-width: 3px !important;
          border-bottom-style: solid;
        }
        
        .border-left-lg {
          border-left-width: 3px !important;
          border-left-style: solid;
        }
        
        .border-radius-0 {
          border-radius: 0 !important;
        }
        
        .border-radius-top-0,
        .border-radius-top-right-0 {
          border-top-right-radius: 0 !important;
        }
        
        .border-radius-top-0,
        .border-radius-top-left-0 {
          border-top-left-radius: 0 !important;
        }
        
        .border-radius-bottom-0,
        .border-radius-bottom-right-0 {
          border-bottom-right-radius: 0 !important;
        }
        
        .border-radius-bottom-0,
        .border-radius-bottom-left-0 {
          border-bottom-left-radius: 0 !important;
        }
        
        .border-radius-circle {
          border-radius: 50% !important;
        }
        
        .border-radius-sm {
          border-radius: 0.125rem !important;
        }
        
        .border-radius-md {
          border-radius: 0.3125rem !important;
        }
        
        .border-radius-lg {
          border-radius: 0.5rem !important;
        }
        """);
}
