import { Dependency } from "./Dependency";

/** Representa uma dependência Node.js do projeto. */
export class NodeDependency extends Dependency {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da dependência.
   * @param filePath O caminho dos arquivos da dependência.
   */
  constructor(name: string, filePath: string) {

    super(name, `node_modules/${name}/${filePath}`);
  }
}
