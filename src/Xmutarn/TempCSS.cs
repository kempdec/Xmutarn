using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa um CSS temporário que em breve será refatorado.
/// </summary>
public abstract class TempCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="TempCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public TempCSS(bool isMinified) : base(isMinified)
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
    protected abstract void ImportMinCSS();

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected abstract void ImportCSS();
}
