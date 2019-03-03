/// <reference path="overlay.ts" />

/**
 * Responsável por gerenciar um diálogo.
 */
class Dialog {
  /**
   * Incializa uma nova instância de Dialog.
   *
   * @param {HTMLElement} element O elemento do diálogo.
   */
  constructor(public element: HTMLElement) {
    if (!element) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    element.classList.add("dialog");

    // fecha o diálogo quando o evento de clique é acionado no elemento com o atributo "x-close-dialog".
    element.querySelector("[x-close-dialog]")
      .addEventListener("click", e => {
        this.close();

        e.preventDefault();
      });
  }

  /** A classe CSS de abertura do diálogo. */
  private static readonly _dialogOpenClass: string = "dialog_open";

  /** O overlay. */
  private _overlay: Overlay = Overlay.createOverlay();

  /**
   * Abre o diálogo.
   */
  public open(): void {
    this._overlay.show();

    this.element.classList.add(Dialog._dialogOpenClass);
  }

  /**
   * Fecha o diálogo.
   */
  public close(): void {
    this._overlay.hide();

    this.element.classList.remove(Dialog._dialogOpenClass);
  }
}

// inicializa uma nova instância de Dialog, a partir do atributo HTML "x-open-dialog-id".
document.querySelectorAll("[x-open-dialog-id]").forEach(element => {
  // obtém o valor do atributo do elemento selecionado.
  const attributeValue: string = element.attributes.getNamedItem("x-open-dialog-id").value;

  const dialog: Dialog = new Dialog(document.getElementById(attributeValue.replace("#", "")));

  element.addEventListener("click", e => {
    dialog.open();

    e.preventDefault();
  });
});
