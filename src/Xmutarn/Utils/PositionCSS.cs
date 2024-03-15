namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de posição do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class PositionCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".position-absolute{position:absolute !important}.position-fixed{position:fixed !important}.position-relative{position:relative !important}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .position-absolute {
          position: absolute !important;
        }
        
        .position-fixed {
          position: fixed !important;
        }
        
        .position-relative {
          position: relative !important;
        }
        """);
}
