import { FeaturedTheme } from "../models";
import { ThemeController } from "./ThemeController";

/** Responsável pelo gerenciamento de um tema principal. */
export class FeaturedThemeController extends ThemeController {

  /** Inicializa uma nova instância. */
  constructor() {

    super("featured");
  }

  public get current(): FeaturedTheme {

    return super.current as FeaturedTheme;
  }

  public update(name: FeaturedTheme | string): void {

    super.update(name as keyof typeof FeaturedTheme);
  }
}
