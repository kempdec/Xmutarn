import Component from "./Component";

/** Responsável pelo gerenciamento de uma barra de ferramentas. */
export default class Toolbar extends Component {

  /**
   * Inicializa uma nova instância de Toolbar.
   *
   * @param element O elemento da barra de ferramentas.
   */
  constructor(element: HTMLElement) {

    super(element);
  }

  /** Classe CSS de omissão da barra de ferramentas. */
  private static readonly _toolbarHideClass: string = "toolbar_hide";

  /** Omite a barra de ferramentas na rolagem da página. */
  public hideInScroll(): void {

    let lastScrollTop: number = 0;

    window.addEventListener("scroll", () => {

      const scrollTop: number = document.documentElement.scrollTop;

      if (scrollTop > this.element.clientHeight && scrollTop > lastScrollTop) {

        this.element.classList.add(Toolbar._toolbarHideClass);
      } else {

        this.element.classList.remove(Toolbar._toolbarHideClass);
      }

      lastScrollTop = scrollTop;
    });
  }

  /**
   * Inicializa uma nova instância de Toolbar, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  public static initFromHtmlAttribute(attributeName: string): void {

    document.querySelectorAll(`[${attributeName}]`)
      .forEach((element: HTMLElement) => {

        new Toolbar(element);
      });
  }
}
