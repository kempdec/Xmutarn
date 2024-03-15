namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de flex do Xmutarn.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="FlexCSS"/>.</remarks>
/// <inheritdoc/>
public class FlexCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    protected override void ImportOldMinCSS() => Import(""".flex-row{display:flex;margin:0 -0.9375rem;flex-wrap:wrap}.flex-col-12__xl,.flex-col-11__xl,.flex-col-10__xl,.flex-col-9__xl,.flex-col-8__xl,.flex-col-7__xl,.flex-col-6__xl,.flex-col-5__xl,.flex-col-4__xl,.flex-col-3__xl,.flex-col-2__xl,.flex-col-1__xl,.flex-col-12__lg,.flex-col-11__lg,.flex-col-10__lg,.flex-col-9__lg,.flex-col-8__lg,.flex-col-7__lg,.flex-col-6__lg,.flex-col-5__lg,.flex-col-4__lg,.flex-col-3__lg,.flex-col-2__lg,.flex-col-1__lg,.flex-col-12__md,.flex-col-11__md,.flex-col-10__md,.flex-col-9__md,.flex-col-8__md,.flex-col-7__md,.flex-col-6__md,.flex-col-5__md,.flex-col-4__md,.flex-col-3__md,.flex-col-2__md,.flex-col-1__md,.flex-col-12__sm,.flex-col-11__sm,.flex-col-10__sm,.flex-col-9__sm,.flex-col-8__sm,.flex-col-7__sm,.flex-col-6__sm,.flex-col-5__sm,.flex-col-4__sm,.flex-col-3__sm,.flex-col-2__sm,.flex-col-1__sm,.flex-col-12,.flex-col-11,.flex-col-10,.flex-col-9,.flex-col-8,.flex-col-7,.flex-col-6,.flex-col-5,.flex-col-4,.flex-col-3,.flex-col-2,.flex-col-1{position:relative;width:100%;padding:0 .9375rem}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportOldCSS() => Import("""
        .flex-row {
          display: flex;
          margin: 0 -0.9375rem;
          flex-wrap: wrap;
        }

        .flex-col-12__xl, .flex-col-11__xl, .flex-col-10__xl, .flex-col-9__xl, .flex-col-8__xl, .flex-col-7__xl, .flex-col-6__xl, .flex-col-5__xl, .flex-col-4__xl, .flex-col-3__xl, .flex-col-2__xl, .flex-col-1__xl, .flex-col-12__lg, .flex-col-11__lg, .flex-col-10__lg, .flex-col-9__lg, .flex-col-8__lg, .flex-col-7__lg, .flex-col-6__lg, .flex-col-5__lg, .flex-col-4__lg, .flex-col-3__lg, .flex-col-2__lg, .flex-col-1__lg, .flex-col-12__md, .flex-col-11__md, .flex-col-10__md, .flex-col-9__md, .flex-col-8__md, .flex-col-7__md, .flex-col-6__md, .flex-col-5__md, .flex-col-4__md, .flex-col-3__md, .flex-col-2__md, .flex-col-1__md, .flex-col-12__sm, .flex-col-11__sm, .flex-col-10__sm, .flex-col-9__sm, .flex-col-8__sm, .flex-col-7__sm, .flex-col-6__sm, .flex-col-5__sm, .flex-col-4__sm, .flex-col-3__sm, .flex-col-2__sm, .flex-col-1__sm, .flex-col-12, .flex-col-11, .flex-col-10, .flex-col-9, .flex-col-8, .flex-col-7, .flex-col-6, .flex-col-5, .flex-col-4, .flex-col-3, .flex-col-2, .flex-col-1 {
          position: relative;
          width: 100%;
          padding: 0 0.9375rem;
        }
        """);
}
