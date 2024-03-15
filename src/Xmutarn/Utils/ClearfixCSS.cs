namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de cleafix do Xmutarm.
/// </summary>
/// <inheritdoc/>
public class ClearfixCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".clearfix::after,.card::after,.card--action::after{content:"";display:block;clear:both}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .clearfix::after, .card::after, .card--action::after {
          content: "";
          display: block;
          clear: both;
        }
        """);
}
