import { Component } from "./Component";

/** Responsável pelo gerenciamento de um componente input. */
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

  /** As classes de cores do input. */
  private readonly colorClasses: { [key: string]: string } = {

    /** A cor de sucesso do input. */
    success: "input_color-success",

    /** A cor de alerta do input. */
    alert: "input_color-alert",

    /** A cor de aviso do input. */
    warning: "input_color-warning"
  };

  /** O elemento de rótulo do input. */
  private _labelElement: HTMLLabelElement;

  /** O elemento de descrição do input. */
  private _descriptionElement: HTMLParagraphElement;

  /** O elemento do campo do input. */
  public readonly fieldElement: HTMLInputElement;

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente input.
   */
  constructor(element: HTMLElement) {

    super(element);

    if (!element) {

      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    this.fieldElement = element.querySelector(`.${this.classes.field}`);

    if (!this.fieldElement) {

      throw new Error(`Não foi possível encontrar um elemento com a classe '${this.classes.field}'`);
    }

    this._labelElement = element.querySelector(`.${this.classes.label}`);
    this._descriptionElement = element.querySelector(`.${this.classes.description}`);
  }

  /** Adiciona alternância para o rótulo ativo do input. */
  public addActiveLabelToogle(): void {

    const activeLabel = (): void => {

      this.labelElement.classList.add(this.classes.activeLabel);
    }

    const disableLabel = (): void => {

      this.labelElement.classList.remove(this.classes.activeLabel);
    }

    const toggleActiveLabel = (): void => {

      if (!this.fieldElement.value) {

        disableLabel();

        return;
      }

      activeLabel();
    }

    toggleActiveLabel();

    this.fieldElement.addEventListener("blur", () => toggleActiveLabel());
  }

  /** Obtém o rótulo do input. */
  public get labelElement(): HTMLLabelElement {

    const createLabel = (): void => {

      this._labelElement = document.createElement("label");
      this.labelElement.classList.add(this.classes.label);

      this.element.appendChild(this.labelElement);

      this.addActiveLabelToogle();
    }

    if (!this._labelElement) {

      createLabel();
    }

    return this._labelElement;
  }

  /**
   * Define o texto do rótulo do input.
   *
   * @param text O texto do rótulo do input.
   */
  public setLabel(text: string): void {

    this.labelElement.innerText = text;
  }

  /** Remove a cor do input. */
  private removeColor(): void {

    for (let colorClass in this.colorClasses) {

      this.element.classList.remove(this.colorClasses[colorClass]);
    }
  }

  /** Obtém a descrição do input. */
  public get description(): HTMLParagraphElement {

    const createDescription = (): void => {

      this._descriptionElement = document.createElement("p");
      this.description.classList.add(this.classes.description);

      this.element.appendChild(this.description);
    }

    if (!this._descriptionElement) {

      createDescription();
    }

    return this._descriptionElement;
  }

  /** Remove a descrição do input. */
  public removeDescription(): void {

    if (this.description) {

      this.description.remove();
    }
  }

  /**
   * Define o texto da descrição do input.
   *
   * @param text O texto da descrição do input.
   * @param color A cor do input.
   */
  public setDescription(text: string, color: string = ""): void {

    this.description.innerText = text;

    if (color) {

      this.element.classList.add(color);

      const events = ["blur", "keyup"];

      for (let event of events) {

        this.fieldElement.addEventListener(event, () => {

          this.removeDescription();
          this.removeColor();
        });
      }
    } else {

      this.removeColor();
    }
  }

  /**
   * Define o texto da descrição do input na cor de sucesso.
   *
   * @param text O texto da descrição do input.
   */
  public setSuccessDescription(text: string): void {

    this.setDescription(text, this.colorClasses.success);
  }

  /**
   * Define o texto da descrição do input na cor de alerta.
   *
   * @param text O texto da descrição do input.
   */
  public setAlertDescription(text: string): void {

    this.setDescription(text, this.colorClasses.alert);
  }

  /**
   * Define o texto da descrição do input na cor de aviso.
   *
   * @param text O texto da descrição do input.
   */
  public setWarningDescription(text: string): void {

    this.setDescription(text, this.colorClasses.warning);
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

      input.setLabel(labelAttr);
    }

    const elements = document.querySelectorAll(`[${attrName}]`) as NodeListOf<HTMLElement>;

    elements.forEach(element => init(element, labelAttrName));
  }
}
