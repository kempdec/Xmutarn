import { Component } from ".";
import { ToolbarOptions } from "./options";

/** Responsável pelo gerenciamento de uma barra de ferramentas. */
export default class Toolbar extends Component {

  /** Opções padrão da barra de ferramentas. */
  private static readonly defaultOptions: ToolbarOptions = {
    hideInScroll: true
  };

  /**
   * Inicializa uma nova instância de Toolbar.
   *
   * @param element O elemento da barra de ferramentas.
   * @param options As opções da barra de ferramentas.
   */
  constructor(element: HTMLElement, options: ToolbarOptions = null) {

    super(element);

    Object.assign(Toolbar.defaultOptions, options);

    if (options.hideInScroll) {

      this.hideInScroll();
    }
  }

  /** Classe CSS de omissão da barra de ferramentas. */
  private static readonly toolbarHideClass: string = "toolbar_hide";

  /** Omite a barra de ferramentas na rolagem da página. */
  hideInScroll(): void {

    let lastScrollTop: number = 0;

    window.addEventListener("scroll", () => {

      const scrollTop: number = document.documentElement.scrollTop;

      if (scrollTop > this.element.clientHeight && scrollTop > lastScrollTop) {

        this.element.classList.add(Toolbar.toolbarHideClass);
      } else {

        this.element.classList.remove(Toolbar.toolbarHideClass);
      }

      lastScrollTop = scrollTop;
    });
  }

  /**
   * Inicializa uma nova instância de Toolbar, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string): void {

    document.querySelectorAll(`[${attributeName}]`)
      .forEach((element: HTMLElement) => new Toolbar(element));
  }
}
