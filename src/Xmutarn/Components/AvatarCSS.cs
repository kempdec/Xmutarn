namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de avatar do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class AvatarCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => Import(""".avatar{display:flex;align-items:center}.avatar--image{width:2.8125rem;height:2.8125rem}.avatar--image:not(.avatar--image_rounded){border-radius:50%}.avatar--image_rounded{border-radius:.5rem}.avatar--info{display:inline-block;margin-left:.75rem}.avatar--title,.avatar--summary{margin:0;font-weight:500}.avatar--title{color:var(--theme-primary, rgba(0, 0, 0, 0.87))}.avatar--summary{color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.avatar--small{color:inherit;opacity:.7}""");

    /// <inheritdoc/>
    protected override void ImportOldCSS() => Import("""
        .avatar {
          display: flex;
          align-items: center;
        }
        .avatar--image {
          width: 2.8125rem;
          height: 2.8125rem;
        }
        .avatar--image:not(.avatar--image_rounded) {
          border-radius: 50%;
        }
        .avatar--image_rounded {
          border-radius: 0.5rem;
        }
        .avatar--info {
          display: inline-block;
          margin-left: 0.75rem;
        }
        .avatar--title, .avatar--summary {
          margin: 0;
          font-weight: 500;
        }
        .avatar--title {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
        }
        .avatar--summary {
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .avatar--small {
          color: inherit;
          opacity: 0.7;
        }
        """);
}
