/// <reference path="toastColor.ts" />

/**
 * Responsável por gerenciar um toast.
 */
class Toast {
  /** O identificador do elemento responsável pelo toast. */
  private static readonly _toasterId: string = "toaster";

  /** A classe CSS de ativação do toast. */
  private static readonly _toastActiveClass: string = "toast_active";

  /** O elemento responsável pelo toast. */
  public element: HTMLElement;

  /** O elemento do toast. */
  public toast: HTMLElement;

  /**
   * Inicializa uma nova instância de Toast.
   *
   * @param {string} message A mensagem do toast.
   * @param {string} title O título do toast.
   * @param {ToastColor} color A cor do toast.
   * @param {number} delay O delay em milissegundos para abertura do toast.
   * @param {number} timeout O timeout para fechamento do toast. Caso o valor fornecido seja "0", o toast não será
   * fechado.
   */
  constructor(message: string, title?: string, color?: ToastColor, delay?: number, timeout?: number) {
    if (!message) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    // obtém e define as cores do toast.
    const toastColors: string[] = Object.keys(ToastColor).map((x: any): string => ToastColor[x]);

    if (color && toastColors.indexOf(color) == -1) {
      throw new Error(`A cor '${color}' não está disponível.`);
    }

    this.element = document.querySelector("#" + Toast._toasterId);

    if (!this.element) {
      // cria e define o elemento responsável por gerenciar o toast.
      this.element = document.createElement("section");

      this.element.setAttribute("id", Toast._toasterId);
      this.element.classList.add("toaster");

      document.querySelector("body").appendChild(this.element);
    }

    // cria e define o elemento do toast.
    this.toast = document.createElement("article");

    this.toast.classList.add("toast");

    if (color) {
      this.toast.classList.add("toast_color-" + color);
    }

    // cria e define o elemento de conteúdo do toast.
    const toastContent: HTMLElement = document.createElement("div");

    toastContent.classList.add("toast--content");

    this.toast.appendChild(toastContent);

    if (title) {
      const toastContentTitle: HTMLHeadingElement = document.createElement("h1");

      toastContentTitle.classList.add("toast--content--title", "typography-body-2");
      toastContentTitle.innerText = title;

      toastContent.appendChild(toastContentTitle);
    }

    // cria e define o elemento de mensagem do conteúdo do toast.
    const toastContentMessage: HTMLParagraphElement = document.createElement("p");

    toastContentMessage.classList.add("toast--content--message", "typography-body-2");
    toastContentMessage.innerText = message;

    if (title) {
      toastContentMessage.classList.add("toast--content--message_secondary");
    }

    toastContent.appendChild(toastContentMessage);

    this.open(delay);

    // chama a função de fechamento do toast após o "delay" para evitar que o toast seja fechado mais cedo que o
    // esperado.
    setTimeout((): void => this.close(timeout), delay);
  }

  /** Timeout de desativação do toast, em milissegundos. */
  private static readonly _timeoutToastDisable: number = 400;

  /**
   * Abre o toast.
   *
   * @param {number} delay O delay em milissegundos para abertura do toast.
   */
  public open(delay: number = 0): void {
    // ativa o novo toast, e remove o toast ativo após o "delay".
    setTimeout((): void => {
      const activeToast: HTMLElement = this.element.querySelector(".toast");

      // desativa o toast ativo, caso houver algum.
      if (activeToast) {
        activeToast.classList.remove(Toast._toastActiveClass);
      }

      // aguarda 400ms, para que o toast ativo seja completamente desativado.
      setTimeout((): void => {
        if (activeToast) {
          activeToast.remove();
        }

        this.element.appendChild(this.toast);

        // ativa o novo toast após 100ms para evitar de ser apresentado de forma brusca.
        setTimeout((): void => this.toast.classList.add(Toast._toastActiveClass), 100);
      }, Toast._timeoutToastDisable);
    }, delay);
  }

  /**
   * Fecha o toast.
   *
   * @param {number} timeout O timeout para fechamento do toast. Caso o valor fornecido seja "0", o toast não será
   * fechado.
   */
  public close(timeout: number = 5000): void {
    if (timeout != 0) {
      // desativa o toast após o "timeout".
      setTimeout((): void => {
        this.toast.classList.remove(Toast._toastActiveClass);

        // aguarda 400ms, para que o toast seja completamente desativado, e remove-o em seguida.
        setTimeout((): void => this.toast.remove(), Toast._timeoutToastDisable);
      }, timeout);
    }
  }
}
