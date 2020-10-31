import { AccentTheme } from "../models";
import { ThemeController } from "./ThemeController";

/** Responsável pelo gerenciamento de um tema principal. */
export class AccentThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor() {

    super("accent");
  }

  public get current(): AccentTheme {

    return super.current as AccentTheme;
  }

  public update(name: AccentTheme | string): void {

    super.update(name as keyof typeof AccentTheme);
  }
}
