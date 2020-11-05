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
    activeLabel: "input--label_active"
  };

  /** O campo do input. */
  public readonly field: HTMLInputElement;

  /** O rótulo do input. */
  private _label: HTMLLabelElement;

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
  }

  /** Ativa o rótulo do input. */
  private activeLabel(): void {

    this.label.classList.add(this.classes.activeLabel);
  }

  /** Desativa o rótulo do input. */
  private disableLabel(): void {

    this.label.classList.remove(this.classes.activeLabel);
  }

  /** Adiciona alternância para o rótulo ativo do input. */
  public addActiveLabelToogle(): void {

    this.field.addEventListener("blur", () => {

      if (!this.field.value) {

        this.disableLabel();

        return;
      }

      this.activeLabel();
    });
  }

  /** Cria e retorna um rótulo do input. */
  private createLabel(): HTMLLabelElement {

    const label = document.createElement("label");

    label.classList.add(this.classes.label);
    this.element.appendChild(label);

    this.addActiveLabelToogle();

    return label;
  }

  /** Obtém o rótulo do input. */
  public get label(): HTMLLabelElement {

    if (!this._label) {

      this._label = this.createLabel();
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

  /**
   * Inicializa novas instâncias a partir do nome do atributo HTML especificado.
   *
   * @param attrName O nome do atributo HTML de inicialização.
   * @param labelAttrName O nome do atributo HTML de rótulo do input.
   */
  public static initFromHtml(attrName: string, labelAttrName: string): void {

    const elements = document.querySelectorAll(`[${attrName}]`) as NodeListOf<HTMLElement>;

    for (let element of elements) {

      if (!element.hasAttribute(labelAttrName)) {

        throw new Error(`Não foi possível encontrar um elemento com o atributo '${labelAttrName}'.`);
      }

      const input = new InputComponent(element);
      const labelAttr = element.getAttribute(labelAttrName);

      input.setLabelText(labelAttr);
    }
  }
}
