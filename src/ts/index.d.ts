export as namespace X;

/** Fornece abstração para o gerenciamento de um componente. */
export abstract class Component {

  /** O elemento do componente. */
  public readonly element: HTMLElement;

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente.
   */
  constructor(element: HTMLElement);
}

/** Responsável pelo gerenciamento de um componente "input". */
/** Responsável pelo gerenciamento de um componente input. */
export class InputComponent extends Component {

  /** O elemento do campo do input. */
  public readonly fieldElement: HTMLInputElement;

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente input.
   */
  constructor(element: HTMLElement);

  /** Adiciona alternância para o rótulo ativo do input. */
  public addActiveLabelToogle(): void;

  /** Obtém o rótulo do input. */
  public get labelElement(): HTMLLabelElement;

  /**
   * Define o texto do rótulo do input.
   *
   * @param text O texto do rótulo do input.
   */
  public setLabel(text: string): void;

  /** Obtém a descrição do input. */
  public get description(): HTMLParagraphElement;

  /** Remove a descrição do input. */
  public removeDescription(): void;

  /**
   * Define o texto da descrição do input.
   *
   * @param text O texto da descrição do input.
   * @param color A cor do input.
   */
  public setDescription(text: string, color: string): void;

  /**
   * Define o texto da descrição do input na cor de sucesso.
   *
   * @param text O texto da descrição do input.
   */
  public setSuccessDescription(text: string): void;

  /**
   * Define o texto da descrição do input na cor de alerta.
   *
   * @param text O texto da descrição do input.
   */
  public setAlertDescription(text: string): void;

  /**
   * Define o texto da descrição do input na cor de aviso.
   *
   * @param text O texto da descrição do input.
   */
  public setWarningDescription(text: string): void;

  /**
   * Inicializa novas instâncias a partir do nome do atributo HTML especificado.
   *
   * @param attrName O nome do atributo HTML de inicialização.
   * @param labelAttrName O nome do atributo HTML de rótulo do input.
   */
  public static initFromHtml(attrName: string, labelAttrName: string): void;
}

/** Responsável pelo gerenciamento de um componente toast. */
export class ToastComponent extends Component {

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento responsável pelo componente toast.
   */
  constructor(element: HTMLElement);

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
   * Define um sinalizador indicando se o toast está ativo.
   *
   * @param isActive Um sinalizador indicando se toast está ativo.
   * @param millisecondsDelay O número de milissegundos para aguardar antes de definir um sinalizador indicando se o
   * toast está ativo.
   */
  public setIsActive(isActive: boolean, millisecondsDelay: number): void;

  /** Desativa o toast. */
  public deactivate(): void;

  /**
   * Ativa o toast.
   *
   * @param millisecondsTimeout O número de milissegundos para aguardar antes de desativar o toast novamente. Se 0 for
   * informado, o toast não será desativado.
   */
  public activate(millisecondsTimeout: number): void;

  /**
   * Define um novo toast.
   *
   * @param classes As classes do toast.
   * @param icon O ícone do toast.
   * @param title O título do toast.
   * @param msg A mensagem do toast.
   */
  public setNew(classes: string, icon: string, title: string, msg: string): void;

  /**
   * Define um novo toast com uma mensagem.
   *
   * @param msg A mensagem do toast.
   * @param classes As classes do toast.
   */
  public setNewMsg(msg: string, classes: string): void;

  /**
   * Define um novo toast com uma mensagem de destaque.
   *
   * @param msg A mensagem do toast.
   */
  public setNewFeaturedMsg(msg: string): void;

  /**
   * Define um novo toast com uma mensagem de realce.
   *
   * @param msg A mensagem do toast.
   */
  public setNewAccentMsg(msg: string): void;

  /**
   * Define um novo toast com uma mensagem de sucesso.
   *
   * @param msg A mensagem do toast.
   */
  public setNewSuccessMsg(msg: string): void;

  /**
   * Define um novo toast com uma mensagem de alerta.
   *
   * @param msg A mensagem do toast.
   */
  public setNewAlertMsg(msg: string): void;

  /**
   * Define um novo toast com uma mensagem de aviso.
   *
   * @param msg A mensagem do toast.
   */
  public setNewWarningMsg(msg: string): void;
}

/** Responsável pelo gerenciamento de um tema principal. */
export class AccentThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor();

  public get current(): AccentTheme;

  public update(name: AccentTheme | string): void;
}

/** Responsável pelo gerenciamento de um tema principal. */
export class FeaturedThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor();

  public get current(): FeaturedTheme;

  public update(name: FeaturedTheme | string): void;
}

/** Responsável pelo gerenciamento de um tema principal. */
export class MainThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor();

  public get current(): MainTheme;

  public update(name: MainTheme | string): void;
}

/** Fornece abstração para o controlador de um tema. */
export abstract class ThemeController {

  /** O nome do atributo do tema. */
  public readonly attrName: string;

  /**
   * Inicializa uma nova instância.
   *
   * @param type O tipo de tema.
   */
  constructor(type: string);

  /** O tema atual. */
  public get current(): string;

  /**
   * Atualiza o tema.
   *
   * @param name O nome do tema.
   */
  public update(name: string): void;
}

/** Representa um tema de realçe. */
export enum AccentTheme {

  /** Vermelho. */
  "red" = "red",

  /** Rosa. */
  "pink" = "pink",

  /** Roxo. */
  "purple" = "purple",

  /** Roxo escuro. */
  "deep-purple" = "deep-purple",

  /** Índigo. */
  "indigo" = "indigo",

  /** Azul. */
  "blue" = "blue",

  /** Azul claro. */
  "light-blue" = "light-blue",

  /** Ciano. */
  "cyan" = "cyan",

  /** Azul petróleo. */
  "teal" = "teal",

  /** Verde. */
  "green" = "green",

  /** Verde claro. */
  "light-green" = "light-green",

  /** Lima. */
  "lime" = "lime",

  /** Amarelo. */
  "yellow" = "yellow",

  /** Âmbar. */
  "amber" = "amber",

  /** Laranja. */
  "orange" = "orange",

  /** Laranja escuro. */
  "deep-orange" = "deep-orange"
}

/** Representa um tema de destaque. */
export enum FeaturedTheme {

  /** Vermelho. */
  "red" = "red",

  /** Rosa. */
  "pink" = "pink",

  /** Roxo. */
  "purple" = "purple",

  /** Roxo escuro. */
  "deep-purple" = "deep-purple",

  /** Índigo. */
  "indigo" = "indigo",

  /** Azul. */
  "blue" = "blue",

  /** Azul claro. */
  "light-blue" = "light-blue",

  /** Ciano. */
  "cyan" = "cyan",

  /** Azul petróleo. */
  "teal" = "teal",

  /** Verde. */
  "green" = "green",

  /** Verde claro. */
  "light-green" = "light-green",

  /** Lima. */
  "lime" = "lime",

  /** Amarelo. */
  "yellow" = "yellow",

  /** Âmbar. */
  "amber" = "amber",

  /** Laranja. */
  "orange" = "orange",

  /** Laranja escuro. */
  "deep-orange" = "deep-orange",

  /** Marrom. */
  "brown" = "brown",

  /** Cinza. */
  "grey" = "grey",

  /** Cinza azul. */
  "blue-grey" = "blue-grey"
}

/** Representa um tema principal. */
export enum MainTheme {

  /** Claro. */
  light = "light",

  /** Escuro. */
  dark = "dark"
}
