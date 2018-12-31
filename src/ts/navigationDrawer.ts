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
