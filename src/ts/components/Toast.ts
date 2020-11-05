import { Overlay } from ".";
import { Component } from "./Component";
import { ToastOptions } from "./options";

/** Responsável pelo gerenciamento de um toast. */
export default class Toast extends Component {

  /** Classes CSS do toast. */
  private static readonly classes = {

    /** Classe CSS do toaster do toast. */
    toaster: "toaster",

    /** Classe CSS do toast. */
    this: "toast",

    /** Classe CSS de ativação do toast. */
    thisActive: "toast_active",

    /** Classe CSS do ícone do toast. */
    icon: "toast--icon",

    /** Classe CSS do conteúdo do toast. */
    content: "toast--content",

    /** Classe CSS do título do conteúdo do toast. */
    contentTitle: "toast--content--title",

    /** Classe CSS da tipografia do título do conteúdo do toast. */
    contentTitleTypography: "typo-body-2",

    /** Classe CSS da mensagem do conteúdo do toast. */
    contentMessage: "toast--content--message",

    /** Classe CSS da variante 'secondary' da mensagem do conteúdo do toast. */
    contentMessageSecondary: "toast--content--message_secondary",

    /** Classe CSS da tipografia da mensagem do conteúdo do toast. */
    contentMessageTypography: "typo-body-2"
  };

  /** Elemento do toaster do toast. */
  readonly toasterElement: HTMLElement;

  /** Elemento do conteúdo do toast. */
  readonly contentElement: HTMLElement;

  /** Elemento da mensagem do conteúdo do toast. */
  readonly messageContentElement: HTMLParagraphElement;

  /**
   * Inicializa uma nova instância de Toast.
   *
   * @param element O elemento do toast.
   */
  constructor(element: HTMLElement) {

    super(element);

    this.toasterElement = element.parentElement;

    if (!this.toasterElement.classList.contains(Toast.classes.toaster)) {

      throw new Error(`O elemento do toaster do toast não contém a classe '${Toast.classes.toaster}'.`);
    }

    this.contentElement = element.querySelector(`.${Toast.classes.content}`);

    if (!this.contentElement) {

      throw new Error("O elemento do conteúdo do toast não foi encontrado.");
    }

    this.messageContentElement = this.contentElement.querySelector(`.${Toast.classes.contentMessage}`);

    if (!this.messageContentElement) {

      throw new Error("O elemento da mensagem do conteúdo do toast não foi encontrado.");
    }
  }

  /**
   * Abre o toast.
   *
   * @param delay O delay em milissegundos para abertura do toast. O padrão é "500".
   */
  open(delay: number = 500): void {

    setTimeout(() => this.element.classList.add(Toast.classes.thisActive), delay);
  }

  /** Overlay. */
  private readonly overlay: Overlay = Overlay.create();

  /**
   * Fecha o toast e o overlay.
   *
   * @param timeout O timeout em milissegundos para fechamento do toast. O padrão é "7000".
   */
  close(timeout: number = 7000): void {

    setTimeout(() => {

      this.element.classList.remove(Toast.classes.thisActive);

      this.overlay.hide();
    }, timeout);
  }

  /**
   * Fecha e remove o toast e o overlay.
   *
   * @param timeout O timeout em milissegundos para o fechamento e remoção do toast. O padrão é "7000".
   */
  remove(timeout: number = 7000): void {

    setTimeout(() => {

      this.close(0);

      // aguarda 400ms, para que o toast seja completamente escondido e remove-o em seguida.
      setTimeout(() => {

        this.element.remove();
        this.toasterElement.remove();
        this.overlay.element.remove();
      }, 400);
    }, timeout);
  }

  /** Opções padrão do toast. */
  private static readonly optionsDefault: ToastOptions = {
    autoOpen: true,
    removeWhenClose: true
  };

  /**
   * Cria um toast.
   *
   * @param message A mensagem do toast.
   * @param options As opções do toast.
   */
  static create(message: string, options: ToastOptions = null): Toast {

    options = Object.assign(options, Toast.optionsDefault);

    /** Elemento do toaster do toast. */
    const toasterElement = document.createElement("aside");

    toasterElement.classList.add(Toast.classes.toaster);
    document.body.append(toasterElement);

    /** Elemento do toast. */
    const element = document.createElement("article");

    element.classList.add(Toast.classes.this);
    toasterElement.append(element);

    /** Elemento do conteúdo do toast. */
    const contentElement = document.createElement("div");

    contentElement.classList.add(Toast.classes.content);
    element.append(contentElement);

    /** Elemento da mensagem do conteúdo do toast. */
    const messageContentElement = document.createElement("p");

    messageContentElement.classList.add(Toast.classes.contentMessage, Toast.classes.contentMessageTypography);
    messageContentElement.innerText = message;
    contentElement.append(messageContentElement);

    const toast = new Toast(element);

    if (options.autoOpen) {

      toast.open(options.delay);
    }

    if (options.color) {

      element.classList.add(`toast_color-${options.color}`);
    }

    if (options.iconClasses) {

      /** Elemento do ícone do toast. */
      const iconElement = document.createElement("div");

      iconElement.classList.add(Toast.classes.icon, ...options.iconClasses.split(" "));
      element.prepend(iconElement);
    }

    if (options.title) {

      /** Elemento do título do toast. */
      const titleContentElement = document.createElement("h1");

      titleContentElement.classList.add(Toast.classes.contentTitle, Toast.classes.contentTitleTypography);
      titleContentElement.innerText = options.title;
      contentElement.prepend(titleContentElement);

      messageContentElement.classList.add(Toast.classes.contentMessageSecondary);
    }

    if (options.timeout === undefined || options.timeout > 0) {

      if (options.removeWhenClose) {

        toast.remove(options.timeout);
      } else {

        toast.close(options.timeout);
      }
    } else {

      toast.overlay.show();
    }

    return toast;
  }
}
