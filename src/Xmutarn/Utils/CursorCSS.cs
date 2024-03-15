namespace KempDec.Xmutarn.Utils;

/// <summary>
/// Representa o CSS dos utilitários de cursor do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class CursorCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".cursor-default{cursor:default}.cursor-grab{cursor:-webkit-grab;cursor:grab}.cursor-pointer{cursor:pointer}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .cursor-default {
          cursor: default;
        }
        
        .cursor-grab {
          cursor: -webkit-grab;
          cursor: grab;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
        """);
}
