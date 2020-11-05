/** Fornece abstração para o gerenciamento de um componente. */
export abstract class Component {

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente.
   */
  constructor(public readonly element: HTMLElement) { }
}
