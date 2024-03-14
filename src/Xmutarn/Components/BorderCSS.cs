namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de borda do Xmutarn.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="BorderCSS"/>.</remarks>
/// <inheritdoc/>
public class BorderCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    protected override void ImportMinCSS() => Import(""".border-divider{display:block;margin:0;height:0;border-top:1px solid var(--theme-dividers, rgba(0, 0, 0, 0.12))}.border-divider_padded{margin:0 1rem}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportCSS() => Import("""
        .border-divider {
          display: block;
          margin: 0;
          height: 0;
          border-top: 1px solid var(--theme-dividers, rgba(0, 0, 0, 0.12));
        }
        .border-divider_padded {
          margin: 0 1rem;
        }
        """);
}
