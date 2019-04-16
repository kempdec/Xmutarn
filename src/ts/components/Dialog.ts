import {
  Component,
  Overlay
} from ".";

/** Responsável pelo gerenciamento de um diálogo. */
export default class Dialog extends Component {

  /**
   * Inicializa uma nova instância de Dialog.
   *
   * @param element O elemento do diálogo.
   */
  constructor(element: HTMLElement) {

    super(element);

    this.element.classList.add("dialog");
  }

  /** Overlay. */
  private overlay: Overlay = Overlay.create();

  /** Classe CSS de abertura do diálogo. */
  private static readonly dialogOpenClass: string = "dialog_open";

  /**
   * Abre o diálogo.
   *
   * @param useOverlay Um sinalizador indicando se deve ser utilizado um overlay na abertura do diálogo. O padrão é
   * "true".
   */
  open(useOverlay: boolean = true): void {

    if (useOverlay) {

      this.overlay.show();
    }

    this.element.classList.add(Dialog.dialogOpenClass);
  }

  /**
   * Adiciona um elemento ouvinte de abertura do diálogo para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de abertura do diálogo.
   * @param type O tipo de evento. O padrão é "click".
   */
  addOpenListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouvinte de abertura do diálogo deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      e.preventDefault();

      this.open();
    });
  }

  /** Fecha o diálogo. */
  close(): void {

    this.overlay.hide();

    this.element.classList.remove(Dialog.dialogOpenClass);
  }

  /**
   * Adiciona um elemento ouvinte de fechamento do diálogo para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de fechamento do diálogo.
   * @param type O tipo de evento. O padrão é "click".
   */
  addCloseListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      e.preventDefault();

      this.close();
    });
  }

  /**
   * Inicializa uma nova instância de Dialog, a partir do nome do atributo HTML especificado. Os elementos de diálogo
   * devem ter um identificador para terem suas instâncias inicializadas.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string): void {

    document.querySelectorAll(`[${attributeName}]`)
      .forEach((element: HTMLElement) => {

        if (element.hasAttribute("id")) {

          const dialog = new Dialog(element);
          const dialogId = element.getAttribute("id");

          document.querySelectorAll(`[x-listener-open-dialog="${dialogId}"]`)
            .forEach((element: HTMLElement) => dialog.addOpenListener(element));

          dialog.element.querySelectorAll(`[x-listener-close-dialog]`)
            .forEach((element: HTMLElement) => dialog.addCloseListener(element));
        }
      });
  }
}
