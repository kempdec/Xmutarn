import del from "del";

/** Responsável pela construção de arquivos do projeto. */
export abstract class FileBuilder {

  /**
   * Inicializa uma nova instância.
   *
   * @param srcPath O caminho dos arquivos fonte a serem construídos.
   * @param destPath O caminho de destino dos arquivos construídos.
   */
  constructor(protected srcPath: string, protected destPath: string) {}

  /** Deleta o caminho de destino dos arquivos construidos. */
  public deleteDestPath(): Promise<string[]> {

    return del(this.destPath);
  }

  /** Constrói os arquivos expandidos do projeto. */
  public abstract buildExpanded(): NodeJS.ReadWriteStream;

  /** Constrói os arquivos minificados do projeto. */
  public abstract buildMinified(): NodeJS.ReadWriteStream;

  /** Constrói os arquivos do projeto. */
  public abstract build(): NodeJS.ReadWriteStream;
}
