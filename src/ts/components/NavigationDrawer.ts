import {
  Component,
  Overlay
} from ".";

/** Responsável pelo gerenciamento de uma gaveta de navegação. */
export default class NavigationDrawer extends Component {

  /**
   * Inicializa uma nova instância de NavigationDrawer.
   *
   * @param element O elemento da gaveta de navegação.
   */
  constructor(element: HTMLElement) {

    super(element);

    this.element.classList.add("navigation-drawer");
  }

  /** Overlay. */
  private _overlay: Overlay = Overlay.create();

  /** Classe CSS de abertura da gaveta de navegação. */
  private static readonly _openClass: string = "navigation-drawer_open";

  /**
   * Abre a gaveta de navegação.
   *
   * @param useOverlay Um sinalizador indicando se deve ser utilizado um overlay na abertura da gaveta de navegação. O
   * padrão é "true".
   */
  public open(useOverlay: boolean = true): void {

    if (useOverlay) {

      this._overlay.show();
    }

    this.element.classList.add(NavigationDrawer._openClass);
  }

  /**
   * Adiciona um elemento ouvinte de abertura da gaveta de navegação para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de abertura da gaveta de navegação.
   * @param type O tipo de evento. O padrão é "click".
   */
  public addOpenListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouviente de abertura da gaveta de navegação deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      this.open();

      e.preventDefault();
    });
  }

  /** Fecha a gaveta de navegação. */
  public close(): void {

    this._overlay.hide();

    this.element.classList.remove(NavigationDrawer._openClass);
  }

  /**
   * Adiciona um elemento ouvinte de fechamento da gaveta de navegação para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de fechamento da gaveta de navegação.
   * @param type O tipo de evento. O padrão é "click".
   */
  public addCloseListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouviente de fechamento da gaveta de navegação deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      this.close();

      e.preventDefault();
    });
  }

  /**
   * Inicializa uma nova instância de NavigationDrawer, a partir do nome do atributo HTML especificado. Os elementos de
   * gaveta de navegação devem ter um identificador para terem suas instâncias inicializadas.
   *
   * @param attributeName O nome do atributo HTML.
   */
  public static initFromHtmlAttribute(attributeName: string): void {

    document.querySelectorAll(`[${attributeName}]`)
      .forEach((element: HTMLElement) => {

        if (element.hasAttribute("id")) {

          const navDrawer = new NavigationDrawer(element);
          const navDrawerId = element.getAttribute("id");

          navDrawer.addCloseListener(navDrawer._overlay.element);

          document.querySelectorAll(`[x-listener-open-nav-drawer="${navDrawerId}"]`)
            .forEach((element: HTMLElement) => navDrawer.addOpenListener(element));

          navDrawer.element.querySelectorAll(`[x-listener-close-nav-drawer]`)
            .forEach((element: HTMLElement) => navDrawer.addCloseListener(element));
        }
      });
  }
}
