import Cookies from "js-cookie";

/** Representa um tema. */
export class Theme {

  /** O elemento HTML. */
  private readonly html: HTMLHtmlElement;

  /** O nome do atributo do tema. */
  private readonly attrName: string;

  /** O nome do cookie do tema. */
  private readonly cookieName: string;

  /**
   * Inicializa uma nova instância.
   *
   * @param type O tipo de tema.
   */
  constructor(type: "main" | "featured" | "accent") {

    this.html = document.querySelector("html");
    this.attrName = `x-${type}-theme`;
    this.cookieName = `${type}-theme`;
  }

  /** O tema atual. */
  public get current(): string {

    return Cookies.get(this.cookieName);
  }

  /**
   * Atualiza o tema.
   *
   * @param name O nome do tema.
   */
  public update(name: string): void {

    Cookies.set(this.cookieName, name, { expires: 60 });

    this.html.setAttribute(this.attrName, name);
  }
}
