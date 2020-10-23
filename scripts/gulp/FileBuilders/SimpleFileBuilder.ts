import del from "del";

/** Fornece uma abstração para a construção simples de arquivos do projeto. */
export abstract class SimpleFileBuilder<T> {

  /**
   * Inicializa uma nova instância.
   *
   * @param src O objeto ou valor para a construção dos arquivos.
   * @param destPath O caminho de destino dos arquivos construídos.
   * @param destFilesPath O caminho dos arquivos de destino construídos.
   */
  constructor(protected src: T, protected destPath: string, protected destFilesPath: string = "") {

    if (this.destFilesPath == "") {

      this.destFilesPath = destPath;
    }
  }

  /** Deleta o caminho de destino dos arquivos construidos. */
  public deleteDestPath(): Promise<string[]> {

    return del(this.destFilesPath);
  }

  /** Constrói os arquivos do projeto. */
  public abstract build(): NodeJS.ReadWriteStream;
}
