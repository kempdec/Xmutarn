import { Component } from ".";
import { InputOptions } from "./options";

/** Responsável pelo gerenciamento de um input. */
export default class Input extends Component {

  /** Opções padrão do input. */
  private static readonly defaultOptions: InputOptions = {
    removeColorOnFocus: true
  };

  /** Elemento do input. */
  readonly inputElement: HTMLInputElement;

  /** Elemento do rótulo do input. */
  readonly labelElement: HTMLLabelElement;

  /**
   * Inicializa uma nova instância de Input.
   *
   * @param element O elemento responsável pelo o input.
   * @param options As opções do input.
   */
  constructor(element: HTMLElement, options: InputOptions = null) {

    super(element);

    Object.assign(Input.defaultOptions, options);

    element.classList.add("input");

    this.inputElement = element.querySelector(".input--field");

    if (!this.inputElement) {

      throw new Error("O elemento responsável pelo o input não contém o elemento input com a classe 'input--field'.");
    }

    this.labelElement = element.querySelector(".input--label");

    if (!this.labelElement) {

      if (!options.label) {

        throw new Error(
          "O elemento responsável pelo input não contém o elemento do rótulo do input com a classe `input--label`.");
      }

      this.setLabel(options.label);
    }

    if (this.inputElement.value) {

      this.activeLabel();
    }

    this.addToggleLabelListener(this.inputElement);

    if (options.removeColorOnFocus) {

      this.addRemoveColorListener(this.inputElement);
    }
  }

  /** A classe CSS de ativação do rótulo do input. */
  private static readonly labelActiveClass: string = "input--label_active";

  /** Ativa o elemento do rótulo do input. */
  private activeLabel(): void {

    this.labelElement.classList.add(Input.labelActiveClass);
  }

  /** Desativa o elemento do rótulo do input. */
  private disableLabel(): void {

    this.labelElement.classList.remove(Input.labelActiveClass);
  }

  /**
   * Adiciona um elemento ouvinte de alternância do rótulo do input para eventos do tipo especificado.
   *
   * @param element O elemento de alternância do rótulo do input.
   * @param type O tipo de evento. O padrão é "blur".
   */
  private addToggleLabelListener(element: HTMLInputElement, type: string = "blur"): void {

    if (!element) {

      throw new Error("O elemento ouvinte de alternância do rótulo do input deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      e.preventDefault();

      if (this.inputElement.value) {

        this.activeLabel();

        return;
      }

      this.disableLabel();
    });
  }

  /**
   * Adiciona um elemento ouvinte de remoção da cor do input para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de remoção da cor do input.
   * @param type O tipo de evento. O padrão é "focus".
   */
  addRemoveColorListener(element: HTMLInputElement, type: string = "focus"): void {

    if (!element) {
      throw new Error("O elemento ouvinte de remoção da cor do input deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      e.preventDefault();

      element.classList.remove("input_alert-color");
    });
  }

  /**
   * Define o rótulo do input.
   *
   * @param text O texto do rótulo.
   */
  setLabel(text: string): void {

    this.labelElement.innerText = text;
  }

  /**
   * Inicializa uma nova instãncia de Input, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string, labelAttributeName: string): void {

    document.querySelectorAll(`[${attributeName}]`)
      .forEach((element: HTMLElement) => {

        let options: InputOptions;

        if (element.hasAttribute(labelAttributeName)) {

          options.label = element.getAttribute(labelAttributeName);
        }

        new Input(element, options);
      });
  }
}
