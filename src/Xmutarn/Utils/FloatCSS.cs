namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de flutuação do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class FloatCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".float-right{float:right !important}.float-left{float:left !important}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .float-right {
          float: right !important;
        }
        
        .float-left {
          float: left !important;
        }
        """);
}
