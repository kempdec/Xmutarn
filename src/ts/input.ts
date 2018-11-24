/**
 * Responsável por gerenciar um input.
 */
class Input {
  /** A classe CSS de ativação do rótulo do input. */
  private static readonly _labelActiveClass: string = "input--label_active";

  /** Obtém ou define o input. */
  public input: HTMLInputElement;

  /** Obtém ou define o rótulo do input. */
  public label: HTMLLabelElement;

  /**
   * Inicializa uma nova instância de Input.
   *
   * @param {HTMLElement} element O elemento responsável pelo input.
   * @param {string?} labelText O texto do rótulo do input.
   */
  constructor(public element: HTMLElement, labelText?: string) {
    if (!element) {
      throw new Error("O primeiro argumento não foi fornecido.");
    }

    this.input = element.querySelector("input");

    if (!this.input) {
      throw new Error("O elemento 'input' não foi encontrado.");
    }

    this.label = element.querySelector(".input--label");

    if (!this.label && !labelText) {
      throw new Error("O 'label' do input não foi encontrado ou o segundo argumento não foi fornecido.");
    }

    if (!this.label && labelText) {
      this.setLabel(labelText);
    }

    if (this.input.value) {
      this._activeLabel();
    }

    // ativa ou desativa o rótulo, com base no valor do input, ao acionar o evento "blur".
    this.input.addEventListener("blur", (): void => {
      if (this.input.value) {
        this._activeLabel();
      } else {
        this._disableLabel();
      }
    });
  }

  /**
   * Ativa o rótulo do input.
   */
  private _activeLabel(): void {
    this.label.classList.add(Input._labelActiveClass);
  }

  /**
   * Desativa o rótulo do input.
   */
  private _disableLabel(): void {
    this.label.classList.remove(Input._labelActiveClass);
  }

  /**
   * Define o rótulo do input.
   *
   * @param {string} text O texto do rótulo.
   */
  public setLabel(text: string): void {
    // cria um rótulo, caso nenhum seja encontrado.
    if (!this.label) {
      this.label = document.createElement("label");

      this.label.classList.add("input--label");

      this.element.appendChild(this.label);
    }

    this.label.innerText = text;
  }
}

// inicializa uma nova instância de Input, a partir do atributo HTML "x-role".
document.querySelectorAll("[x-role='input']").forEach((element: HTMLElement): void => {
  new Input(element, element.getAttribute("x-label-text"));
});
