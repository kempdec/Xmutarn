namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de lista do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class ListCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".list{margin:0;list-style-type:none}.list:not(.list_padded){padding:.5rem 0}.list_padded{padding:.5rem}.list_padded .list--item{border-radius:.3125rem}.list--item{display:flex;cursor:pointer;padding:1em;color:var(--theme-primary, rgba(0, 0, 0, 0.87));transition:background-color .4s;align-items:center}.list--item:hover{color:inherit;background-color:rgba(0,0,0,.04)}.list--item:active{background-color:rgba(0,0,0,.16)}.list--item_active{background-color:rgba(0,0,0,.03)}.list--item--icon{margin-right:.571875em;margin-left:-0.28625em}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .list {
          margin: 0;
          list-style-type: none;
        }
        .list:not(.list_padded) {
          padding: 0.5rem 0;
        }
        .list_padded {
          padding: 0.5rem;
        }
        .list_padded .list--item {
          border-radius: 0.3125rem;
        }
        .list--item {
          display: flex;
          cursor: pointer;
          padding: 1em;
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
          transition: background-color 0.4s;
          align-items: center;
        }
        .list--item:hover {
          color: inherit;
          background-color: rgba(0, 0, 0, 0.04);
        }
        .list--item:active {
          background-color: rgba(0, 0, 0, 0.16);
        }
        .list--item_active {
          background-color: rgba(0, 0, 0, 0.03);
        }
        .list--item--icon {
          margin-right: 0.571875em;
          margin-left: -0.28625em;
        }
        """);
}
