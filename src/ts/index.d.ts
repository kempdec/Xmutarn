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
export class InputComponent extends Component {

  /** O campo do input. */
  public readonly field: HTMLInputElement;

  /**
   * Inicializa uma nova instância.
   *
   * @param element O elemento do componente "input".
   */
  constructor(element: HTMLElement);

  /** Adiciona alternância para o rótulo ativo do input. */
  public addActiveLabelToogle(): void;

  /** Obtém o rótulo do input. */
  public get label(): HTMLLabelElement;

  /**
   * Define o texto do rótulo do input.
   *
   * @param text O texto do rótulo do input.
   */
  public setLabelText(text: string): void;

  /**
   * Inicializa novas instâncias a partir do nome do atributo HTML especificado.
   *
   * @param attrName O nome do atributo HTML de inicialização.
   * @param labelAttrName O nome do atributo HTML de rótulo do input.
   */
  public static initFromHtml(attrName: string, labelAttrName: string): void;
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
