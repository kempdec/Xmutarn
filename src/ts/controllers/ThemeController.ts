/** Fornece abstração para o controlador de um tema. */
export abstract class ThemeController {

  /** O elemento HTML. */
  private readonly html: HTMLHtmlElement;

  /** O nome do atributo do tema. */
  public readonly attrName: string;

  /**
   * Inicializa uma nova instância.
   *
   * @param type O tipo de tema.
   */
  constructor(type: string) {

    this.html = document.querySelector("html");
    this.attrName = `x-${type}-theme`;
  }

  /** O tema atual. */
  public get current(): string {

    const attr = this.html.getAttribute(this.attrName);

    return attr;
  }

  /**
   * Atualiza o tema.
   *
   * @param name O nome do tema.
   */
  public update(name: string): void {

    this.html.setAttribute(this.attrName, name);
  }
}
