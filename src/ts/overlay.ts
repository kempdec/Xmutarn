/** Responsável pelo gerenciamento de um overlay. */
export default class Overlay {

  /** Elemento do overlay. */
  private _element: HTMLElement;

  /**
   * Inicializa uma nova instância de Overlay.
   *
   * @param element O elemento do overlay.
   */
  constructor(element: HTMLElement) {

    if (!element) {
      throw new Error("O elemento do overlay deve ser fornecido.");
    }

    this._element = element;
  }

  /** Obtém o elemento do overlay. */
  public get element(): HTMLElement {

    return this._element;
  }

  /** Classe CSS de ativação do overlay. */
  private static readonly _overlayActiveClass: string = "overlay_active";

  /**
   * Exibi o overlay.
   *
   * @param delay O delay em milissegundos até a exibição do overlay.
   */
  public show(delay: number = 300): HTMLElement {

    setTimeout(() => this.element.classList.add(Overlay._overlayActiveClass), delay);

    return this.element;
  }

  /**
   * Omite o overlay.
   *
   * @param delay O delay em milissegundos até a omissão do overlay.
   */
  public hide(delay: number = 300): HTMLElement {

    setTimeout(() => this.element.classList.remove(Overlay._overlayActiveClass), delay);

    return this.element;
  }

  /** Cria um overlay. */
  public static create(): Overlay {

    const element = document.createElement("div");

    document.querySelector("body").appendChild(element);

    return new Overlay(element);
  }
}
