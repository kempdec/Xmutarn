/** Responsável pelo gerenciamento de um componente. */
export default abstract class Component {

  /** Elemento do componente. */
  private _element: HTMLElement;

  /**
   * Inicializa uma nova instância de Component.
   *
   * @param element O elemento do componente.
   */
  constructor(element: HTMLElement) {

    if (!element) {

      throw new Error("O elemento do componente deve ser fornecido.");
    }

    this._element = element;
  }

  /** Obtém o elemento do componente. */
  public get element(): HTMLElement {

    return this._element;
  }
}
