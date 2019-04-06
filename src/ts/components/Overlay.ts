import { Component } from ".";

/** Responsável pelo gerenciamento de um overlay. */
export default class Overlay extends Component {

  /**
   * Inicializa uma nova instância de Overlay.
   *
   * @param element O elemento do overlay.
   */
  constructor(element: HTMLElement) {

    super(element);

    this.element.classList.add("overlay");
  }

  /** Classe CSS de ativação do overlay. */
  private static readonly _overlayActiveClass: string = "overlay_active";

  /**
   * Exibi o overlay.
   *
   * @param delay O delay em milissegundos até a exibição do overlay.
   */
  public show(delay: number = 300) {

    setTimeout(() => this.element.classList.add(Overlay._overlayActiveClass), delay);
  }

  /**
   * Omite o overlay.
   *
   * @param delay O delay em milissegundos até a omissão do overlay.
   */
  public hide(delay: number = 300) {

    setTimeout(() => this.element.classList.remove(Overlay._overlayActiveClass), delay);
  }

  /** Cria um overlay. */
  public static create(): Overlay {

    const element = document.createElement("div");

    document.querySelector("body").appendChild(element);

    return new Overlay(element);
  }
}
