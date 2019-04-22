export as namespace X;

export {
  Component,
  Dialog,
  InputOptions,
  Input,
  NavigationDrawer,
  Overlay,
  ToastColor,
  ToastOptions,
  Toast,
  ToolbarOptions,
  Toolbar
};

/** Responsável pelo gerenciamento de um componente. */
declare abstract class Component {
  /** Obtém o elemento do componente. */
  readonly element: HTMLElement;
  /**
   * Inicializa uma nova instância de Component.
   *
   * @param element O elemento do componente.
   */
  constructor(element: HTMLElement);
}

/** Responsável pelo gerenciamento de um diálogo. */
declare class Dialog extends Component {
    /**
     * Inicializa uma nova instância de Dialog.
     *
     * @param element O elemento do diálogo.
     */
    constructor(element: HTMLElement);
    /** Overlay. */
    private overlay;
    /** Classe CSS de abertura do diálogo. */
    private static readonly dialogOpenClass;
    /**
     * Abre o diálogo.
     *
     * @param useOverlay Um sinalizador indicando se deve ser utilizado um overlay na abertura do diálogo. O padrão é
     * "true".
     */
    open(useOverlay?: boolean): void;
    /**
     * Adiciona um elemento ouvinte de abertura do diálogo para eventos do tipo especificado.
     *
     * @param element O elemento ouvinte de abertura do diálogo.
     * @param type O tipo de evento. O padrão é "click".
     */
    addOpenListener(element: HTMLElement, type?: string): void;
    /** Fecha o diálogo. */
    close(): void;
    /**
     * Adiciona um elemento ouvinte de fechamento do diálogo para eventos do tipo especificado.
     *
     * @param element O elemento ouvinte de fechamento do diálogo.
     * @param type O tipo de evento. O padrão é "click".
     */
    addCloseListener(element: HTMLElement, type?: string): void;
    /**
     * Inicializa uma nova instância de Dialog, a partir do nome do atributo HTML especificado. Os elementos de diálogo
     * devem ter um identificador para terem suas instâncias inicializadas.
     *
     * @param attributeName O nome do atributo HTML.
     */
    static initFromHtmlAttribute(attributeName: string): void;
}

/** Fornece abstração para as opções de um input. */
declare interface InputOptions {
  /** Rótulo do input. */
  label?: string;
  /** Sinalizador indicando se a cor adicionada ao elemento do input deve ser removida ao acionar o evento "focus". */
  removeColorOnFocus?: boolean;
}

/** Responsável pelo gerenciamento de um input. */
declare class Input extends Component {
  /** Opções padrão do input. */
  private static readonly defaultOptions;
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
  constructor(element: HTMLElement, options?: InputOptions);
  /** A classe CSS de ativação do rótulo do input. */
  private static readonly labelActiveClass;
  /** Ativa o elemento do rótulo do input. */
  private activeLabel;
  /** Desativa o elemento do rótulo do input. */
  private disableLabel;
  /**
   * Adiciona um elemento ouvinte de alternância do rótulo do input para eventos do tipo especificado.
   *
   * @param element O elemento de alternância do rótulo do input.
   * @param type O tipo de evento. O padrão é "blur".
   */
  private addToggleLabelListener;
  /**
   * Adiciona um elemento ouvinte de remoção da cor do input para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de remoção da cor do input.
   * @param type O tipo de evento. O padrão é "focus".
   */
  addRemoveColorListener(element: HTMLInputElement, type?: string): void;
  /**
   * Define o rótulo do input.
   *
   * @param text O texto do rótulo.
   */
  setLabel(text: string): void;
  /**
   * Inicializa uma nova instãncia de Input, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string, labelAttributeName: string): void;
}

/** Responsável pelo gerenciamento de uma gaveta de navegação. */
declare class NavigationDrawer extends Component {
  /**
   * Inicializa uma nova instância de NavigationDrawer.
   *
   * @param element O elemento da gaveta de navegação.
   */
  constructor(element: HTMLElement);
  /** Overlay. */
  private overlay;
  /** Classe CSS de abertura da gaveta de navegação. */
  private static readonly openClass;
  /**
   * Abre a gaveta de navegação.
   *
   * @param useOverlay Um sinalizador indicando se deve ser utilizado um overlay na abertura da gaveta de navegação. O
   * padrão é "true".
   */
  open(useOverlay?: boolean): void;
  /**
   * Adiciona um elemento ouvinte de abertura da gaveta de navegação para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de abertura da gaveta de navegação.
   * @param type O tipo de evento. O padrão é "click".
   */
  addOpenListener(element: HTMLElement, type?: string): void;
  /** Fecha a gaveta de navegação. */
  close(): void;
  /**
   * Adiciona um elemento ouvinte de fechamento da gaveta de navegação para eventos do tipo especificado.
   *
   * @param element O elemento ouvinte de fechamento da gaveta de navegação.
   * @param type O tipo de evento. O padrão é "click".
   */
  addCloseListener(element: HTMLElement, type?: string): void;
  /**
   * Inicializa uma nova instância de NavigationDrawer, a partir do nome do atributo HTML especificado. Os elementos de
   * gaveta de navegação devem ter um identificador para terem suas instâncias inicializadas.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string): void;
}

/** Responsável pelo gerenciamento de um overlay. */
declare class Overlay extends Component {
  /**
   * Inicializa uma nova instância de Overlay.
   *
   * @param element O elemento do overlay.
   */
  constructor(element: HTMLElement);
  /** Classe CSS de ativação do overlay. */
  private static readonly overlayActiveClass;
  /**
   * Exibi o overlay.
   *
   * @param delay O delay em milissegundos até a exibição do overlay.
   */
  show(delay?: number): void;
  /**
   * Omite o overlay.
   *
   * @param delay O delay em milissegundos até a omissão do overlay.
   */
  hide(delay?: number): void;
  /** Cria um overlay. */
  static create(): Overlay;
}

/** A cor de um toast. */
declare enum ToastColor {
  /** Cor destaque do tema. */
  Featured = "featured",
  /** Cor de realçe do tema. */
  Accent = "accent",
  /** Cor de sucesso. */
  Success = "success",
  /** Cor de alerta. */
  Alert = "alert",
  /** Cor de cuidado. */
  Warning = "warning"
}

/** Fornece abstração para as opções de um toast. */
declare interface ToastOptions {
  /** Um sinalizador indicando se o toast deve ser aberto automaticamente. */
  autoOpen?: boolean;
  /** A cor do toast. */
  color?: string | ToastColor;
  /** O delay em milissegundos para abertura do toast. */
  delay?: number;
  /** As classes de ícone do toast. */
  iconClasses?: string;
  /** Um sinalizador indicando se o toast deve ser removido ao fechar. */
  removeWhenClose?: boolean;
  /**
   * O timeout em milissegundos para fechamento do toast. Caso o valor fornecido seja "0", o toast não será fechado.
   * Se 'removeWhenClose' for especificado como 'true', o toast será removido após seu fechamento.
   */
  timeout?: number;
  /** O título do toast. */
  title?: string;
}

/** Responsável pelo gerenciamento de um toast. */
declare class Toast extends Component {
  /** Classes CSS do toast. */
  private static readonly classes;
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
  constructor(element: HTMLElement);
  /**
   * Abre o toast.
   *
   * @param delay O delay em milissegundos para abertura do toast. O padrão é "500".
   */
  open(delay?: number): void;
  /** Overlay. */
  private readonly overlay;
  /**
   * Fecha o toast e o overlay.
   *
   * @param timeout O timeout em milissegundos para fechamento do toast. O padrão é "7000".
   */
  close(timeout?: number): void;
  /**
   * Fecha e remove o toast e o overlay.
   *
   * @param timeout O timeout em milissegundos para o fechamento e remoção do toast. O padrão é "7000".
   */
  remove(timeout?: number): void;
  /** Opções padrão do toast. */
  private static readonly optionsDefault;
  /**
   * Cria um toast.
   *
   * @param message A mensagem do toast.
   * @param options As opções do toast.
   */
  static create(message: string, options?: ToastOptions): Toast;
}

/** Fornece abstração para as opções da barra de ferramentas. */
declare interface ToolbarOptions {
  /** Sinalizador indicando se a barra de ferramentas deve ser omitida na rolagem da página. */
  hideInScroll?: boolean;
}

/** Responsável pelo gerenciamento de uma barra de ferramentas. */
declare class Toolbar extends Component {
  /** Opções padrão da barra de ferramentas. */
  private static readonly defaultOptions;
  /**
   * Inicializa uma nova instância de Toolbar.
   *
   * @param element O elemento da barra de ferramentas.
   * @param options As opções da barra de ferramentas.
   */
  constructor(element: HTMLElement, options?: ToolbarOptions);
  /** Classe CSS de omissão da barra de ferramentas. */
  private static readonly toolbarHideClass;
  /** Omite a barra de ferramentas na rolagem da página. */
  hideInScroll(): void;
  /**
   * Inicializa uma nova instância de Toolbar, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string): void;
}
