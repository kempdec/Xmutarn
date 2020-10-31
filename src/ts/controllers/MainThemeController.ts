import { MainTheme } from "../models";
import { ThemeController } from "./ThemeController";

/** Responsável pelo gerenciamento de um tema principal. */
export class MainThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor() {

    super("main");
  }

  public get current(): MainTheme {

    return super.current as MainTheme;
  }

  public update(name: MainTheme | string): void {

    super.update(name as keyof typeof MainTheme);
  }
}
