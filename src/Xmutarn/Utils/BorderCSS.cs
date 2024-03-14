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
    protected override void ImportMinCSS() => Import(""".border-left-lg,.border-bottom-lg,.border-right-lg,.border-top-lg,.border-lg,.border-left-md,.border-bottom-md,.border-right-md,.border-top-md,.border-md,.border-left-sm,.border-bottom-sm,.border-right-sm,.border-top-sm,.border-sm,.border-left-0,.border-bottom-0,.border-right-0,.border-top-0,.border-0{border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportCSS() => Import("""
        .border-left-lg, .border-bottom-lg, .border-right-lg, .border-top-lg, .border-lg, .border-left-md, .border-bottom-md, .border-right-md, .border-top-md, .border-md, .border-left-sm, .border-bottom-sm, .border-right-sm, .border-top-sm, .border-sm, .border-left-0, .border-bottom-0, .border-right-0, .border-top-0, .border-0 {
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important;
        }
        """);
}
