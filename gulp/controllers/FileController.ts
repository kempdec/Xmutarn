import del from "del";

/** Fornece abstração para um controlador de arquivos. */
export abstract class FileController<T> {

  /**
   * Inicializa uma nova instância.
   *
   * @param src A fonte dos arquivos.
   * @param destPath O caminho de destino dos arquivos.
   * @param destFilesPath O caminho dos arquivos de destino.
   */
  constructor(protected readonly src: T, protected readonly destPath: string,
    protected readonly destFilesPath?: string) {

    if (!this.destFilesPath) {

      this.destFilesPath = destPath;
    }
  }

  /** Deleta os arquivos de destino. */
  public deleteDestFiles(): Promise<string[]> {

    return del(this.destFilesPath);
  }
}
