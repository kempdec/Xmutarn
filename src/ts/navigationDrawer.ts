/// <reference path="overlay.ts" />

/**
 * Responsável por gerenciar uma gaveta de navegação.
 */
class NavigationDrawer {
  /** O overlay. */
  private _overlay: Overlay = Overlay.createOverlay();

  /**
   * Inicializa uma nova instância de NavigationDrawer.
   *
   * @param element
   */
  constructor(public element: HTMLElement) {
    if (!element) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    element.classList.add("navigation-drawer");

    this._overlay.element.addEventListener("click", () => this.close());
  }

  /** A classe CSS de abertura da gaveta de navegação. */
  private static readonly _navigationDrawerOpenClass: string = "navigation-drawer_open";

  /**
   * Abre o diálogo.
   */
  public open(): void {
    this._overlay.show();

    this.element.classList.add(NavigationDrawer._navigationDrawerOpenClass);
  }

  /**
   * Fecha o diálogo.
   */
  public close(): void {
    this._overlay.hide();

    this.element.classList.remove(NavigationDrawer._navigationDrawerOpenClass);
  }
}

// inicializa uma nova instância de NavigationDrawer, a partir do atributo HTML "x-open-nav-drawer-id".
document.querySelectorAll("[x-open-nav-drawer-id]").forEach(element => {
  // obtém o valor do atributo do elemento selecionado.
  const attributeValue: string = element.attributes.getNamedItem("x-open-nav-drawer-id").value;

  const navDrawer: NavigationDrawer = new NavigationDrawer(document.querySelector("#" + attributeValue.replace("#", "")));

  element.addEventListener("click", e => {
    navDrawer.open();

    e.preventDefault();
  });
});
