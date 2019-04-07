export as namespace X;

export {
  Dialog,
  NavigationDrawer,
  Overlay,
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
    private _overlay;

    /** Classe CSS de abertura do diálogo. */
    private static readonly _dialogOpenClass;

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

/** Responsável pelo gerenciamento de uma gaveta de navegação. */
declare class NavigationDrawer extends Component {

    /**
     * Inicializa uma nova instância de NavigationDrawer.
     *
     * @param element O elemento da gaveta de navegação.
     */
    constructor(element: HTMLElement);

    /** Overlay. */
    private _overlay;

    /** Classe CSS de abertura da gaveta de navegação. */
    private static readonly _openClass;

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
  private static readonly _overlayActiveClass;

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

/** Responsável pelo gerenciamento de uma barra de ferramentas. */
declare class Toolbar extends Component {

  /**
   * Inicializa uma nova instância de Toolbar.
   *
   * @param element O elemento da barra de ferramentas.
   * @param options As opções da barra de ferramentas.
   */
  constructor(element: HTMLElement, options?: ToolbarOptions);

  /** Classe CSS de omissão da barra de ferramentas. */
  private static readonly _toolbarHideClass;

  /** Omite a barra de ferramentas na rolagem da página. */
  hideInScroll(): void;

  /**
   * Inicializa uma nova instância de Toolbar, a partir do nome do atributo HTML especificado.
   *
   * @param attributeName O nome do atributo HTML.
   */
  static initFromHtmlAttribute(attributeName: string): void;
}

/** Fornece abstração para as opções da barra de ferramentas. */
declare interface ToolbarOptions {

  /** Sinalizador indicando se a barra de ferramentas deve ser omitida na rolagem da página. */
  hideInScroll?: boolean;
}
