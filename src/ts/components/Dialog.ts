import Overlay from "./Overlay";
import Component from "./Component";

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
  private _overlay: Overlay = Overlay.create();

  /** Classe CSS de abertura do diálogo. */
  private static readonly _dialogOpenClass: string = "dialog_open";

  /**
   * Abre o diálogo.
   *
   * @param useOverlay Um sinalizador indicando se deve ser utilizado um overlay na abertura do diálogo. O padrão é
   * "true".
   */
  public open(useOverlay: boolean = true): void {

    if (useOverlay) {

      this._overlay.show();
    }

    this.element.classList.add(Dialog._dialogOpenClass);
  }

  /**
   * Adiciona um elemento ouvinte de abertura do diálogo para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de abertura do diálogo.
   * @param type O tipo de evento. O padrão é "click".
   */
  public addOpenListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouviente de abertura do diálogo deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      this.open();

      e.preventDefault();
    });
  }

  /** Fecha o diálogo. */
  public close(): void {

    this._overlay.hide();

    this.element.classList.remove(Dialog._dialogOpenClass);
  }

  /**
   * Adiciona um elemento ouvinte de fechamento do diálogo para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de fechamento do diálogo.
   * @param type O tipo de evento. O padrão é "click".
   */
  public addCloseListener(element: HTMLElement, type: string = "click"): void {

    if (!element) {

      throw new Error("O elemento ouviente de fechamento do diálogo deve ser fornecido.");
    }

    element.addEventListener(type, e => {

      this.close();

      e.preventDefault();
    });
  }

  /**
   * Inicializa uma nova instância de Dialog, a partir do nome do atributo HTML especificado. Os elementos de diálogo
   * devem ter um identificador para terem suas instâncias inicializadas.
   *
   * @param attributeName O nome do atributo HTML.
   */
  public static initFromHtmlAttribute(attributeName: string): void {

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
