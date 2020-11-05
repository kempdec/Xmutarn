import { Component } from "./Component";

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
  private static readonly overlayActiveClass: string = "overlay_active";

  /**
   * Exibi o overlay.
   *
   * @param delay O delay em milissegundos até a exibição do overlay.
   */
  show(delay: number = 300) {

    setTimeout(() => this.element.classList.add(Overlay.overlayActiveClass), delay);
  }

  /**
   * Omite o overlay.
   *
   * @param delay O delay em milissegundos até a omissão do overlay.
   */
  hide(delay: number = 300) {

    setTimeout(() => this.element.classList.remove(Overlay.overlayActiveClass), delay);
  }

  /** Cria um overlay. */
  static create(): Overlay {

    const element = document.createElement("div");

    document.querySelector("body").appendChild(element);

    return new Overlay(element);
  }
}
