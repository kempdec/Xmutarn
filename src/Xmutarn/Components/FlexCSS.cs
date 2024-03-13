using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de flex do Xmutarn.
/// </summary>
public class FlexCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="FlexCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public FlexCSS(bool isMinified) : base(isMinified)
    {
        if (IsMinified)
        {
            ImportMinCSS();
        }
        else
        {
            ImportCSS();
        }
    }

    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    private void ImportMinCSS() => Import(""".flex-row{display:flex;margin:0 -0.9375rem;flex-wrap:wrap}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    private void ImportCSS() => Import("""
        .flex-row {
          display: flex;
          margin: 0 -0.9375rem;
          flex-wrap: wrap;
        }
        """);
}
