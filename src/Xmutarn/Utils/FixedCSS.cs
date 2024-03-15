namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de fixed do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class FixedCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".fixed-top{position:fixed;top:0;right:0;bottom:auto;left:0}.fixed-bottom{position:fixed;top:auto;right:0;bottom:0;left:0}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .fixed-top {
          position: fixed;
          top: 0;
          right: 0;
          bottom: auto;
          left: 0;
        }
        
        .fixed-bottom {
          position: fixed;
          top: auto;
          right: 0;
          bottom: 0;
          left: 0;
        }
        """);
}
