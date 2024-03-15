namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de dimensionamento do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class SizingCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".width-25{width:25% !important}.width-50{width:50% !important}.width-75{width:75% !important}.width-100{width:100% !important}.width-auto{width:auto !important}.max-width-100{max-width:100% !important}.height-25{height:25% !important}.height-50{height:50% !important}.height-75{height:75% !important}.height-100{height:100% !important}.height-auto{height:auto !important}.max-height-100{max-height:100% !important}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .width-25 {
          width: 25% !important;
        }
        
        .width-50 {
          width: 50% !important;
        }
        
        .width-75 {
          width: 75% !important;
        }
        
        .width-100 {
          width: 100% !important;
        }
        
        .width-auto {
          width: auto !important;
        }
        
        .max-width-100 {
          max-width: 100% !important;
        }
        
        .height-25 {
          height: 25% !important;
        }
        
        .height-50 {
          height: 50% !important;
        }
        
        .height-75 {
          height: 75% !important;
        }
        
        .height-100 {
          height: 100% !important;
        }
        
        .height-auto {
          height: auto !important;
        }
        
        .max-height-100 {
          max-height: 100% !important;
        }
        """);
}
