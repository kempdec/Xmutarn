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
