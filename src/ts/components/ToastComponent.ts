import { Component } from "./Component";

/** Responsável pelo gerenciamento de um componente toast. */
export class ToastComponent extends Component {

  /** As classes dos componentes. */
  private readonly componentClass = {

    overlay: "overlay",

    overlayActive: "overlay_active",

    toaster: "toaster",

    toast: "toast",

    toastActive: "toast_active",

    toastIcon: "toast--icon",

    toastContent: "toast--content",

    toastTitle: "toast--content--title",

    toastMessage: "toast--content--message",

    toastMessageSecondary: "toast--content--message_secondary",

    toastFeaturedColor: "toast_color-featured",

    toastAccentColor: "toast_color-accent",

    toastSuccessColor: "toast_color-success",

    toastAlertColor: "toast_color-alert",

    toastWarningColor: "toast_color-warning",

    typo: "typo-body-2",

    displayNone: "display-none"
  };

  /** O elemento do componente overlay. */
  private overlayElement: HTMLElement;

  /** O elemento toaster. */
  private toasterElement: HTMLElement;

  /** O elemento do toast. */
  private toastElement: HTMLElement;

  /** O elemento de ícone do toast. */
  private toastIconElement: HTMLElement;

  /** O elemento de conteúdo do toast. */
  private toastContentElement: HTMLElement;

  /** O elemento de título do toast. */
  private toastTitleElement: HTMLElement;

  /** O elemento de mensagem do toast. */
  private toastMessageElement: HTMLElement;

  /** Define o elemento do componente overlay. */
  private setOverlayElement(): void {

    this.overlayElement = this.element.querySelector(`.${this.componentClass.overlay}`);

    if (this.overlayElement) {

      return;
    }

    this.overlayElement = document.createElement("div");
    this.overlayElement.classList.add(this.componentClass.overlay);

    this.element.appendChild(this.overlayElement);
  }

  /** Define o elemento toaster. */
  private setToasterElement(): void {

    this.toasterElement = this.element.querySelector(`.${this.componentClass.toaster}`);

    if (this.toasterElement) {

      return;
    }

    this.toasterElement = document.createElement("div");
    this.toasterElement.classList.add(this.componentClass.toaster);

    this.element.appendChild(this.toasterElement);
  }

  /** Define o elemento de ícone do toast. */
  private setToastIconElement(): void {

    this.toastIconElement = this.element.querySelector(`.${this.componentClass.toastIcon}`);

    if (this.toastIconElement) {

      return;
    }

    this.toastIconElement = document.createElement("div");
    this.toastIconElement.classList.add(this.componentClass.toastIcon);

    this.toastElement.appendChild(this.toastIconElement);
  }

  /** Define o elemento de título do toast. */
  private setToastTitleElement(): void {

    this.toastTitleElement = this.element.querySelector(`.${this.componentClass.toastTitle}`);

    if (this.toastTitleElement) {

      return;
    }

    this.toastTitleElement = document.createElement("p");
    this.toastTitleElement.classList.add(this.componentClass.toastTitle, this.componentClass.typo);

    this.toastContentElement.appendChild(this.toastTitleElement);
  }

  /** Define o elemento de mensagem do toast. */
  private setToastMessageElement(): void {

    this.toastMessageElement = this.element.querySelector(`.${this.componentClass.toastMessage}`);

    if (this.toastMessageElement) {

      return;
    }

    this.toastMessageElement = document.createElement("p");
    this.toastMessageElement.classList.add(this.componentClass.toastMessage, this.componentClass.typo);

    this.toastContentElement.appendChild(this.toastMessageElement);
  }

  /** Define o elemento de conteúdo do toast. */
  private setToastContentElement(): void {

    this.toastContentElement = this.element.querySelector(`.${this.componentClass.toastContent}`);

    if (this.toastContentElement) {

      return;
    }

    this.toastContentElement = document.createElement("div");
    this.toastContentElement.classList.add(this.componentClass.toastContent);

    this.toastElement.appendChild(this.toastContentElement);

    this.setToastTitleElement();
    this.setToastMessageElement();
  }

  /** Define o elemento toast. */
  private setToastElement(): void {

    this.toastElement = this.element.querySelector(`.${this.componentClass.toast}`);

    if (this.toastElement) {

      return;
    }

    this.toastElement = document.createElement("div");
    this.toastElement.classList.add(this.componentClass.toast);

    this.toasterElement.appendChild(this.toastElement);

    this.setToastIconElement();
    this.setToastContentElement();
  }

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento responsável pelo componente toast.
   */
  constructor(element: HTMLElement) {

    super(element);

    this.setOverlayElement();
    this.setToasterElement();
    this.setToastElement();
  }

  /** As classes do toast. */
  public classes: string;

  /** O ícone do toast. */
  public icon: string;

  /** O título do toast. */
  public title: string;

  /** A mensagem do toast. */
  public message: string;

  /** Um sinalizador indicando se o toast está ativo. */
  public isActive: boolean;

  /** Um sinalizador indicando se o toast tem sobreposição ativa. */
  public hasActiveOverlay: boolean;

  /**
   * Indica se uma cadeia de caracteres especificada é null, vazia ou consiste apenas em caracteres de espaço em branco.
   *
   * @param value A cadeia de caracteres a ser testada.
   */
  private isNullOrWhiteSpace(value: string): boolean {

    return !value?.trim();
  }

  /** Obtém um sinalizador indicando se o toast tem um ícone. */
  private get hasIcon(): boolean {

    return !this.isNullOrWhiteSpace(this.icon);
  }

  /** Obtém um sinalizador indicando se o toast tem um título. */
  private get hasTitle(): boolean {

    return !this.isNullOrWhiteSpace(this.title);
  }

  /** Atualiza o toast. */
  private update(): void {

    this.toastElement.classList.value = `${this.componentClass.toast} ${this.classes}`;

    if (this.hasIcon) {

      this.toastIconElement.classList.value = `${this.componentClass.toastIcon} ${this.icon}`;
    } else {

      this.toastIconElement.classList.add(this.componentClass.displayNone);
    }

    if (this.hasTitle) {

      this.toastTitleElement.innerText = this.title;
      this.toastTitleElement.classList.remove(this.componentClass.displayNone);

      this.toastMessageElement.classList.add(this.componentClass.toastMessageSecondary);
    } else {

      this.toastTitleElement.classList.add(this.componentClass.displayNone);

      this.toastMessageElement.classList.remove(this.componentClass.toastMessageSecondary);
    }

    this.toastMessageElement.innerText = this.message;
  }

  private timeout: NodeJS.Timeout;

  /**
   * Define um sinalizador indicando se o toast está ativo.
   *
   * @param isActive Um sinalizador indicando se toast está ativo.
   * @param millisecondsDelay O número de milissegundos para aguardar antes de definir um sinalizador indicando se o
   * toast está ativo.
   */
  public setIsActive(isActive: boolean, millisecondsDelay: number): void {

    clearTimeout(this.timeout);

    this.isActive = isActive;

    setTimeout(() => {

      if (this.isActive) {

        this.toastElement.classList.add(this.componentClass.toastActive);
      } else {

        this.toastElement.classList.remove(this.componentClass.toastActive);
      }

      if (this.hasActiveOverlay) {

        this.overlayElement.classList.add(this.componentClass.overlayActive);
      } else {

        this.overlayElement.classList.remove(this.componentClass.overlayActive);
      }
    }, millisecondsDelay);
  }

  /** Desativa o toast. */
  public deactivate(): void {

    this.hasActiveOverlay = false;

    this.setIsActive(false, 0);
  }

  /**
   * Ativa o toast.
   *
   * @param millisecondsTimeout O número de milissegundos para aguardar antes de desativar o toast novamente. Se 0 for
   * informado, o toast não será desativado.
   */
  public activate(millisecondsTimeout = 7000): void {

    if (millisecondsTimeout <= 0) {

      this.hasActiveOverlay = true;
    }

    this.setIsActive(true, 500);

    if (millisecondsTimeout > 0) {

      this.timeout = setTimeout(() => {

        this.deactivate();
      }, millisecondsTimeout);
    }
  }

  /**
   * Define um novo toast.
   *
   * @param classes As classes do toast.
   * @param icon O ícone do toast.
   * @param title O título do toast.
   * @param msg A mensagem do toast.
   */
  public setNew(classes: string, icon: string, title: string, msg: string): void {

    if (this.isActive) {

      this.deactivate();
    }

    this.classes = classes;
    this.icon = icon;
    this.title = title;
    this.message = msg;

    setTimeout(() => this.update(), 250);
  }

  /**
   * Define um novo toast com uma mensagem.
   *
   * @param msg A mensagem do toast.
   * @param classes As classes do toast.
   */
  public setNewMsg(msg: string, classes: string = ""): void {

    this.setNew(classes, "", "", msg);
  }

  /**
   * Define um novo toast com uma mensagem de destaque.
   *
   * @param msg A mensagem do toast.
   */
  public setNewFeaturedMsg(msg: string): void {

    this.setNewMsg(msg, this.componentClass.toastFeaturedColor);
  }

  /**
   * Define um novo toast com uma mensagem de realce.
   *
   * @param msg A mensagem do toast.
   */
  public setNewAccentMsg(msg: string): void {

    this.setNewMsg(msg, this.componentClass.toastAccentColor);
  }

  /**
   * Define um novo toast com uma mensagem de sucesso.
   *
   * @param msg A mensagem do toast.
   */
  public setNewSuccessMsg(msg: string): void {

    this.setNewMsg(msg, this.componentClass.toastSuccessColor);
  }

  /**
   * Define um novo toast com uma mensagem de alerta.
   *
   * @param msg A mensagem do toast.
   */
  public setNewAlertMsg(msg: string): void {

    this.setNewMsg(msg, this.componentClass.toastAlertColor);
  }

  /**
   * Define um novo toast com uma mensagem de aviso.
   *
   * @param msg A mensagem do toast.
   */
  public setNewWarningMsg(msg: string): void {

    this.setNewMsg(msg, this.componentClass.toastWarningColor);
  }
}
