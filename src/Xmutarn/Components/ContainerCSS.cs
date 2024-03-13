using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS dos contêineres do Xmutarn.
/// </summary>
public class ContainerCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="ContainerCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public ContainerCSS(bool isMinified) : base(isMinified)
    {
        if (IsMinified)
        {
            ImportMinCSS();
        }
        else
        {
            ImportCSS();
        }
    }

    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    private void ImportMinCSS() => Import(""".container,.container-fluid{margin:0 auto;padding:0 .9375rem;width:100%}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}@media(min-width: 1200px){.container{max-width:1140px}}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    private void ImportCSS() => Import("""
        .container, .container-fluid {
          margin: 0 auto;
          padding: 0 0.9375rem;
          width: 100%;
        }
        
        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
        }
        @media (min-width: 768px) {
          .container {
            max-width: 720px;
          }
        }
        @media (min-width: 992px) {
          .container {
            max-width: 960px;
          }
        }
        @media (min-width: 1200px) {
          .container {
            max-width: 1140px;
          }
        }
        """);
}
