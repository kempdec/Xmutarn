/**
 * Responsável por gerenciar um overlay.
 */
class Overlay {
  /**
   * Inicializa uma nova instância de Overlay.
   *
   * @param {HTMLElement} element O elemento do overlay.
   */
  constructor(public element: HTMLElement) {
    if (!element) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    element.classList.add("overlay");
  }

  /** A classe CSS de ativação do overlay. */
  private static readonly _overlayActiveClass: string = "overlay_active";

  /**
   * Exibi o overlay.
   *
   * @param {number} delay O delay em milissegundos até a exibição do overlay.
   *
   * @returns {HTMLElement} O elemento do overlay.
   */
  public show(delay: number = 300): HTMLElement {
    setTimeout(() => this.element.classList.add(Overlay._overlayActiveClass), delay);

    return this.element;
  }

  /**
   * Omite o overlay.
   *
   * @param {number} delay O delay em milissegundos até a omissão do overlay.
   *
   * @returns {HTMLElement} O elemento do overlay.
   */
  public hide(delay: number = 300): HTMLElement {
    setTimeout(() => this.element.classList.remove(Overlay._overlayActiveClass), delay);

    return this.element;
  }

  /**
   * Cria um overlay.
   *
   * @returns {Overlay} Uma instância de Overlay correspondente ao elemento criado.
   */
  public static createOverlay(): Overlay {
    const element = document.createElement("div");

    document.querySelector("body").appendChild(element);

    return new Overlay(element);
  }
}
