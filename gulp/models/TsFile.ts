/** Representa um arquivo TypeScript. */
export class TsFile {

  /**
   * Inicializa uma nova instância.
   *
   * @param path O caminho do arquivo.
   * @param name O nome do arquivo.
   * @param standalone O módulo autônomo do arquivo.
   * @param header O cabeçalho do arquivo.
   */
  constructor(public readonly path: string, public readonly name: string, public readonly standalone = "",
    public readonly header = "") { }
}
