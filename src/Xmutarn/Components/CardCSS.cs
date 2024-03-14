namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de cartão do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class CardCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".card{position:relative;border-radius:.3125rem}.card:not(.card_hide-structure){border:1px solid;border-color:var(--theme-dividers, rgba(0, 0, 0, 0.12));background-color:var(--theme-card, white)}.card_hide-structure{background-color:transparent;border:none}.card--header{margin:0;padding:1rem}.card--header--title,.card--header--summary{margin:0}.card--header--title{color:var(--theme-primary, rgba(0, 0, 0, 0.87))}.card--header--summary{color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.card--header--small{color:inherit;opacity:.7}.card--media{position:relative;background:#000 no-repeat top center;background-size:cover;box-sizing:border-box}.card--media::before{content:"";display:block}.card--media:first-child{border-top-right-radius:inherit;border-top-left-radius:inherit}.card--media:last-child{border-bottom-right-radius:inherit;border-bottom-left-radius:inherit}.card--media_format-hd{padding-bottom:56.25%}.card--media_format-sd{padding-bottom:75%}.card--media_format-square{padding-bottom:100%}.card--media--area{position:absolute;left:0;z-index:10;width:100%}.card--media--area:not(.card--media--area_in-top){bottom:0}.card--media--area_in-top{top:0}.card--media--image{max-width:100%;max-height:34.375rem}.card--content{margin:0;padding:1rem}.card--content p:first-child{margin-top:0}.card--content p:last-child{margin-bottom:0}.card--action{position:relative;margin:0;padding:.5rem}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .card {
          position: relative;
          border-radius: 0.3125rem;
        }
        .card:not(.card_hide-structure) {
          border: 1px solid;
          border-color: var(--theme-dividers, rgba(0, 0, 0, 0.12));
          background-color: var(--theme-card, white);
        }
        .card_hide-structure {
          background-color: transparent;
          border: none;
        }
        .card--header {
          margin: 0;
          padding: 1rem;
        }
        .card--header--title, .card--header--summary {
          margin: 0;
        }
        .card--header--title {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
        }
        .card--header--summary {
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .card--header--small {
          color: inherit;
          opacity: 0.7;
        }
        .card--media {
          position: relative;
          background: black no-repeat top center;
          background-size: cover;
          box-sizing: border-box;
        }
        .card--media::before {
          content: "";
          display: block;
        }
        .card--media:first-child {
          border-top-right-radius: inherit;
          border-top-left-radius: inherit;
        }
        .card--media:last-child {
          border-bottom-right-radius: inherit;
          border-bottom-left-radius: inherit;
        }
        .card--media_format-hd {
          padding-bottom: 56.25%;
        }
        .card--media_format-sd {
          padding-bottom: 75%;
        }
        .card--media_format-square {
          padding-bottom: 100%;
        }
        .card--media--area {
          position: absolute;
          left: 0;
          z-index: 10;
          width: 100%;
        }
        .card--media--area:not(.card--media--area_in-top) {
          bottom: 0;
        }
        .card--media--area_in-top {
          top: 0;
        }
        .card--media--image {
          max-width: 100%;
          max-height: 34.375rem;
        }
        .card--content {
          margin: 0;
          padding: 1rem;
        }
        .card--content p:first-child {
          margin-top: 0;
        }
        .card--content p:last-child {
          margin-bottom: 0;
        }
        .card--action {
          position: relative;
          margin: 0;
          padding: 0.5rem;
        }
        """);
}
