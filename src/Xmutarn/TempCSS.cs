using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa um CSS temporário que em breve será refatorado.
/// </summary>
/// <remarks>Usado com CSS antigo do Xmutarn que não foi refatorado.</remarks>
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
            ImportOldMinCSS();
        }
        else
        {
            ImportOldCSS();
        }
    }

    /// <summary>
    /// Importa o CSS minificado antigo do Xmutarn.
    /// </summary>
    protected abstract void ImportOldMinCSS();

    /// <summary>
    /// Importa o CSS antigo do Xmutarn.
    /// </summary>
    protected abstract void ImportOldCSS();
}
