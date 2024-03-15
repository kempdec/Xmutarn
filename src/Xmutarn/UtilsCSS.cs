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
        Import(new ClearfixCSS(IsMinified));
        Import(new CursorCSS(IsMinified));
        Import(new DisplayCSS(IsMinified));
        Import(new FixedCSS(IsMinified));
        Import(new FlexCSS(IsMinified));
        Import(new FloatCSS(IsMinified));
        Import(new PositionCSS(IsMinified));
        Import(new ShadowCSS(IsMinified));
        Import(new SizingCSS(IsMinified));
        Import(new SpacingCSS(IsMinified));
    }
}
