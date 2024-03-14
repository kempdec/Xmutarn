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
    protected override void ImportMinCSS() => Import(""".flex-row{display:flex;margin:0 -0.9375rem;flex-wrap:wrap}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportCSS() => Import("""
        .flex-row {
          display: flex;
          margin: 0 -0.9375rem;
          flex-wrap: wrap;
        }
        """);
}
