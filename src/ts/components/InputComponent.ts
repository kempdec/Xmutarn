import { Component } from "./Component";

/** Responsável pelo gerenciamento de um componente "input". */
export class InputComponent extends Component {

  /** As classes do input. */
  private readonly classes = {

    /** O campo do input. */
    field: "input--field",

    /** O rótulo do input. */
    label: "input--label",

    /** O rótulo ativo do input. */
    activeLabel: "input--label_active",

    /** A descrição do input. */
    description: "input--description"
  };

  /** O rótulo do input. */
  private _label: HTMLLabelElement;

  /** A descrição do input. */
  private _description: HTMLParagraphElement;

  /** O campo do input. */
  public readonly field: HTMLInputElement;

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente "input".
   */
  constructor(element: HTMLElement) {

    super(element);

    if (!element) {

      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    this.field = element.querySelector(`.${this.classes.field}`);

    if (!this.field) {

      throw new Error(`Não foi possível encontrar um elemento com a classe '${this.classes.field}'`);
    }

    this._label = element.querySelector(`.${this.classes.label}`);
    this._description = element.querySelector(`.${this.classes.description}`);
  }

  /** Adiciona alternância para o rótulo ativo do input. */
  public addActiveLabelToogle(): void {

    const activeLabel = (): void => {

      this.label.classList.add(this.classes.activeLabel);
    }

    const disableLabel = (): void => {

      this.label.classList.remove(this.classes.activeLabel);
    }

    const toggleActiveLabel = (): void => {

      if (!this.field.value) {

        disableLabel();

        return;
      }

      activeLabel();
    }

    toggleActiveLabel();

    this.field.addEventListener("blur", () => toggleActiveLabel());
  }

  /** Obtém o rótulo do input. */
  public get label(): HTMLLabelElement {

    const createLabel = (): void => {

      this._label = document.createElement("label");

      this.label.classList.add(this.classes.label);
      this.element.appendChild(this.label);

      this.addActiveLabelToogle();
    }

    if (!this._label) {

      createLabel();
    }

    return this._label;
  }

  /**
   * Define o texto do rótulo do input.
   *
   * @param text O texto do rótulo do input.
   */
  public setLabelText(text: string): void {

    this.label.innerText = text;
  }

  /** Obtém a descrição do input. */
  public get description(): HTMLParagraphElement {

    const createDescription = (): void => {

      this._description = document.createElement("p");

      this.description.classList.add(this.classes.description);
      this.element.appendChild(this.description);
    }

    if (!this._description) {

      createDescription();
    }

    return this._description;
  }

  /**
   * Define o texto da descrição do input.
   *
   * @param text O texto da descrição do input.
   */
  public setDescriptionText(text: string): void {

    this.description.innerText = text;
  }

  /** Remove a descrição do input. */
  public removeDescription(): void {

    if (this.description) {

      this.description.remove();
    }
  }

  /**
   * Inicializa novas instâncias a partir do nome do atributo HTML especificado.
   *
   * @param attrName O nome do atributo HTML de inicialização.
   * @param labelAttrName O nome do atributo HTML de rótulo do input.
   */
  public static initFromHtml(attrName: string, labelAttrName: string): void {

    function init(element: HTMLElement, labelAttrName: string) {

      if (!element.hasAttribute(labelAttrName)) {

        throw new Error(`Não foi possível encontrar um elemento com o atributo '${labelAttrName}'.`);
      }

      const input = new InputComponent(element);
      const labelAttr = element.getAttribute(labelAttrName);

      input.setLabelText(labelAttr);
    }

    const elements = document.querySelectorAll(`[${attrName}]`) as NodeListOf<HTMLElement>;

    elements.forEach(element => init(element, labelAttrName));
  }
}
