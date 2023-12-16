using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Themes;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa o CSS do Xmutarn.
/// </summary>
public class XmutarnCSS : CSSBase
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="XmutarnCSS"/>.
    /// </summary>
    public XmutarnCSS()
    {
        // Cores e temas.
        Import(new ColorsCSS());
    }
}
