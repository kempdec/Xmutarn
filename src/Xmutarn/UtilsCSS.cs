using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Utils;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa o CSS dos utilitários do Xmutarn.
/// </summary>
public class UtilsCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="UtilsCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public UtilsCSS(bool isMinified) : base(isMinified)
    {
        Import(new TyposCSS(IsMinified));
        Import(new BorderCSS(IsMinified));
    }
}
