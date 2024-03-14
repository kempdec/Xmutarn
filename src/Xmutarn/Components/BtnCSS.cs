namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de botão do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class BtnCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".btn{position:relative;display:inline-flex;overflow:hidden;padding:0 1.143em;height:2.571875em;font-weight:500;text-transform:uppercase;letter-spacing:.02em;border-radius:.25rem;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.btn:not(.btn_outlined):not(.btn_outlined-color){border:none}.btn:not([disabled]):not(.btn_disabled){cursor:pointer}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color){color:#fff}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color)::before{background-color:#fff}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color):not(.btn_color-accent),.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-featured{background-color:var(--theme-500, #9C27B0)}.btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-accent{background-color:var(--theme-A400, #F50057)}.btn:not([disabled]):not(.btn_disabled):hover::before{opacity:.12}.btn:not([disabled]):not(.btn_disabled):active::before{opacity:.36}.btn:focus{outline:0}.btn:focus::before{opacity:.18}.btn::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:none;will-change:opacity;transition:opacity .2s}.btn[disabled],.btn_disabled{cursor:default;color:var(--theme-disabled, rgba(0, 0, 0, 0.38)) !important;background-color:var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important}.btn[disabled]::before,.btn_disabled::before{background-color:var(--theme-disabled, rgba(0, 0, 0, 0.38))}.btn_flat:not([disabled]):not(.btn_disabled),.btn_outlined:not([disabled]):not(.btn_disabled),.btn_outlined-color:not([disabled]):not(.btn_disabled){background-color:transparent}.btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured,.btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured,.btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent),.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured{color:var(--theme-500, #9C27B0)}.btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured::before,.btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured::before,.btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured::before{background-color:var(--theme-500, #9C27B0)}.btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent{color:var(--theme-A400, #F50057)}.btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent::before,.btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent::before,.btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent::before{background-color:var(--theme-A400, #F50057)}.btn_outlined,.btn_outlined-color{border:1px solid}.btn_outlined,.btn_outlined-color:not(.btn_color-featured):not(.btn_color-accent){border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12))}.btn_outlined-color.btn_color-featured{border-color:var(--theme-500, #9C27B0)}.btn_outlined-color.btn_color-accent{border-color:var(--theme-A400, #F50057)}.btn_size-xs{font-size:.625rem}.btn_size-sm{font-size:.75rem}.btn_size-md{font-size:.875rem}.btn_size-lg{font-size:1rem}.btn_size-xl{font-size:1.2rem}.btn--icon{margin-right:.571875em;margin-left:-0.28625em}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .btn {
          position: relative;
          display: inline-flex;
          overflow: hidden;
          padding: 0 1.143em;
          height: 2.571875em;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          border-radius: 0.25rem;
          justify-content: center;
          align-items: center;
          -webkit-user-select: none;
             -moz-user-select: none;
              -ms-user-select: none;
                  user-select: none;
        }
        .btn:not(.btn_outlined):not(.btn_outlined-color) {
          border: none;
        }
        .btn:not([disabled]):not(.btn_disabled) {
          cursor: pointer;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color) {
          color: white;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color)::before {
          background-color: white;
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color):not(.btn_color-accent), .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-featured {
          background-color: var(--theme-500, #9C27B0);
        }
        .btn:not([disabled]):not(.btn_disabled):not(.btn_flat):not(.btn_outlined):not(.btn_outlined-color).btn_color-accent {
          background-color: var(--theme-A400, #F50057);
        }
        .btn:not([disabled]):not(.btn_disabled):hover::before {
          opacity: 0.12;
        }
        .btn:not([disabled]):not(.btn_disabled):active::before {
          opacity: 0.36;
        }
        .btn:focus {
          outline: 0;
        }
        .btn:focus::before {
          opacity: 0.18;
        }
        .btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          pointer-events: none;
          will-change: opacity;
          transition: opacity 0.2s;
        }
        .btn[disabled], .btn_disabled {
          cursor: default;
          color: var(--theme-disabled, rgba(0, 0, 0, 0.38)) !important;
          background-color: var(--theme-dividers, rgba(0, 0, 0, 0.12)) !important;
        }
        .btn[disabled]::before, .btn_disabled::before {
          background-color: var(--theme-disabled, rgba(0, 0, 0, 0.38));
        }
        .btn_flat:not([disabled]):not(.btn_disabled), .btn_outlined:not([disabled]):not(.btn_disabled), .btn_outlined-color:not([disabled]):not(.btn_disabled) {
          background-color: transparent;
        }
        .btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured, .btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured, .btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent), .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured {
          color: var(--theme-500, #9C27B0);
        }
        .btn_flat:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_flat:not([disabled]):not(.btn_disabled).btn_color-featured::before, .btn_outlined:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-featured::before, .btn_outlined-color:not([disabled]):not(.btn_disabled):not(.btn_color-accent)::before, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-featured::before {
          background-color: var(--theme-500, #9C27B0);
        }
        .btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent {
          color: var(--theme-A400, #F50057);
        }
        .btn_flat:not([disabled]):not(.btn_disabled).btn_color-accent::before, .btn_outlined:not([disabled]):not(.btn_disabled).btn_color-accent::before, .btn_outlined-color:not([disabled]):not(.btn_disabled).btn_color-accent::before {
          background-color: var(--theme-A400, #F50057);
        }
        .btn_outlined, .btn_outlined-color {
          border: 1px solid;
        }
        .btn_outlined, .btn_outlined-color:not(.btn_color-featured):not(.btn_color-accent) {
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12));
        }
        .btn_outlined-color.btn_color-featured {
          border-color: var(--theme-500, #9C27B0);
        }
        .btn_outlined-color.btn_color-accent {
          border-color: var(--theme-A400, #F50057);
        }
        .btn_size-xs {
          font-size: 0.625rem;
        }
        .btn_size-sm {
          font-size: 0.75rem;
        }
        .btn_size-md {
          font-size: 0.875rem;
        }
        .btn_size-lg {
          font-size: 1rem;
        }
        .btn_size-xl {
          font-size: 1.2rem;
        }
        .btn--icon {
          margin-right: 0.571875em;
          margin-left: -0.28625em;
        }
        """);
}
