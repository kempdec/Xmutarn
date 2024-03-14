namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de barra de ferramentas do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class ToolbarCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".toolbar{position:-webkit-sticky;position:sticky;top:0;display:flex;z-index:40;padding:0 .5rem;font-size:1rem;font-weight:500;color:#fff;justify-content:space-between;align-items:center;flex-wrap:wrap;transition:.3s;will-change:transform}.toolbar:not(.toolbar_dark-color){background-color:var(--theme-700, #7B1FA2)}.toolbar_dark-color{background-color:#212121}.toolbar_hide{transform:translateY(-100%)}.toolbar>.container,.toolbar>.container-fluid{display:flex;padding:0;justify-content:space-between;align-items:center;flex-wrap:wrap}.toolbar--nav{display:flex;overflow-x:auto;padding:.57125em 0;list-style:none;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.toolbar--nav--item{position:relative;margin:0 .125em;padding:1.143em;color:inherit;background-color:transparent;border-radius:.25rem;transition:background-color .4s;flex:0 0 auto}.toolbar--nav--item:hover,.toolbar--nav--item:active,.toolbar--nav--item:focus{color:inherit}.toolbar--nav--item:hover{background-color:rgba(255,255,255,.12)}.toolbar--nav--item:active{background-color:rgba(255,255,255,.36)}.toolbar--nav--item:focus{background-color:rgba(255,255,255,.18);outline:0}.toolbar--nav--item:not(.toolbar--nav--item_bordered){border:none}.toolbar--nav--item_active{background-color:rgba(255,255,255,.07)}.toolbar--nav--item_bordered{border:1px solid rgba(255,255,255,.5)}.toolbar--nav--item_dark{background-color:rgba(0,0,0,.3)}.toolbar--nav--item--icon{margin-right:.259375em;margin-left:-0.16125em}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .toolbar {
          position: -webkit-sticky;
          position: sticky;
          top: 0;
          display: flex;
          z-index: 40;
          padding: 0 0.5rem;
          font-size: 1rem;
          font-weight: 500;
          color: white;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          transition: 0.3s;
          will-change: transform;
        }
        .toolbar:not(.toolbar_dark-color) {
          background-color: var(--theme-700, #7B1FA2);
        }
        .toolbar_dark-color {
          background-color: #212121;
        }
        .toolbar_hide {
          transform: translateY(-100%);
        }
        .toolbar > .container,
        .toolbar > .container-fluid {
          display: flex;
          padding: 0;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .toolbar--nav {
          display: flex;
          overflow-x: auto;
          padding: 0.57125em 0;
          list-style: none;
          align-items: center;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
        }
        .toolbar--nav--item {
          position: relative;
          margin: 0 0.125em;
          padding: 1.143em;
          color: inherit;
          background-color: transparent;
          border-radius: 0.25rem;
          transition: background-color 0.4s;
          flex: 0 0 auto;
        }
        .toolbar--nav--item:hover, .toolbar--nav--item:active, .toolbar--nav--item:focus {
          color: inherit;
        }
        .toolbar--nav--item:hover {
          background-color: rgba(255, 255, 255, 0.12);
        }
        .toolbar--nav--item:active {
          background-color: rgba(255, 255, 255, 0.36);
        }
        .toolbar--nav--item:focus {
          background-color: rgba(255, 255, 255, 0.18);
          outline: 0;
        }
        .toolbar--nav--item:not(.toolbar--nav--item_bordered) {
          border: none;
        }
        .toolbar--nav--item_active {
          background-color: rgba(255, 255, 255, 0.07);
        }
        .toolbar--nav--item_bordered {
          border: 1px solid rgba(255, 255, 255, 0.5);
        }
        .toolbar--nav--item_dark {
          background-color: rgba(0, 0, 0, 0.3);
        }
        .toolbar--nav--item--icon {
          margin-right: 0.259375em;
          margin-left: -0.16125em;
        }
        """);
}
