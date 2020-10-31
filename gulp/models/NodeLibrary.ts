import { Library } from "./Library";

/** Representa uma biblioteca Node.js. */
export class NodeLibrary extends Library {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da biblioteca.
   * @param filePath O caminho dos arquivos da biblioteca.
   */
  constructor(name: string, filePath: string) {

    const nodeFilePath = `node_modules/${name}/${filePath}`;

    super(name, nodeFilePath);
  }
}
