namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS dos contêineres do Xmutarn.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="ContainerCSS"/>.</remarks>
/// <inheritdoc/>
public class ContainerCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    protected override void ImportMinCSS() => Import(""".container,.container-fluid{margin:0 auto;padding:0 .9375rem;width:100%}@media(min-width: 576px){.container{max-width:540px}}@media(min-width: 768px){.container{max-width:720px}}@media(min-width: 992px){.container{max-width:960px}}@media(min-width: 1200px){.container{max-width:1140px}}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportCSS() => Import("""
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
