using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de borda do Xmutarn.
/// </summary>
public class BorderCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="BorderCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public BorderCSS(bool isMinified) : base(isMinified)
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
    private void ImportMinCSS() => Import(""".border-divider{display:block;margin:0;height:0;border-top:1px solid var(--theme-dividers, rgba(0, 0, 0, 0.12))}.border-divider_padded{margin:0 1rem}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    private void ImportCSS() => Import("""
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
