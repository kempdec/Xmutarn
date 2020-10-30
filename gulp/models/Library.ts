/** Representa uma biblioteca. */
export class Library {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da biblioteca.
   * @param filePath O caminho dos arquivos da biblioteca.
   */
  constructor(public readonly name: string, public readonly filePath: string) { }
}
