namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de toast do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class ToastCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".toaster{position:fixed;bottom:0;left:0;z-index:90;width:100%}.toaster::after{content:"";display:block;clear:both}.toast{position:relative;display:flex;margin:0;padding:0;width:100%;font-size:.875rem;color:#fff;background-color:#323232;transform:translate(0, 250%);transition:transform .25s 0ms cubic-bezier(0.4, 0, 1, 1);align-items:center}.toast_active{transform:translate(0);transition:transform .25s 0ms cubic-bezier(0, 0, 0.2, 1)}.toast_color-featured{background-color:var(--theme-700, #7B1FA2)}.toast_color-accent{background-color:var(--theme-A400, #F50057)}.toast_color-success{background-color:#4caf50}.toast_color-alert{background-color:#f44336}.toast_color-warning{background-color:#ff9800}.toast--icon{position:relative;display:inline-block;margin:0 0 0 1rem}.toast--content{position:relative;display:inline-block;margin:0;padding:1rem 1.625rem}.toast--content--title{margin:0;color:inherit;font-weight:500}.toast--content--message{margin:0;font-size:inherit;color:inherit}.toast--content--message_secondary{opacity:.9}@media(min-width: 31.25rem){.toaster{width:auto}.toast{margin:0 0 0 1.25rem;margin-bottom:1.25rem;min-width:18.75rem;max-width:31.25rem;border-radius:.1875rem}}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .toaster {
          position: fixed;
          bottom: 0;
          left: 0;
          z-index: 90;
          width: 100%;
        }
        .toaster::after {
          content: "";
          display: block;
          clear: both;
        }
        
        .toast {
          position: relative;
          display: flex;
          margin: 0;
          padding: 0;
          width: 100%;
          font-size: 0.875rem;
          color: white;
          background-color: #323232;
          transform: translate(0, 250%);
          transition: transform 0.25s 0ms cubic-bezier(0.4, 0, 1, 1);
          align-items: center;
        }
        .toast_active {
          transform: translate(0);
          transition: transform 0.25s 0ms cubic-bezier(0, 0, 0.2, 1);
        }
        .toast_color-featured {
          background-color: var(--theme-700, #7B1FA2);
        }
        .toast_color-accent {
          background-color: var(--theme-A400, #F50057);
        }
        .toast_color-success {
          background-color: #4CAF50;
        }
        .toast_color-alert {
          background-color: #F44336;
        }
        .toast_color-warning {
          background-color: #FF9800;
        }
        .toast--icon {
          position: relative;
          display: inline-block;
          margin: 0 0 0 1rem;
        }
        .toast--content {
          position: relative;
          display: inline-block;
          margin: 0;
          padding: 1rem 1.625rem;
        }
        .toast--content--title {
          margin: 0;
          color: inherit;
          font-weight: 500;
        }
        .toast--content--message {
          margin: 0;
          font-size: inherit;
          color: inherit;
        }
        .toast--content--message_secondary {
          opacity: 0.9;
        }
        
        @media (min-width: 31.25rem) {
          .toaster {
            width: auto;
          }
        
          .toast {
            margin: 0 0 0 1.25rem;
            margin-bottom: 1.25rem;
            min-width: 18.75rem;
            max-width: 31.25rem;
            border-radius: 0.1875rem;
          }
        }
        """);
}
