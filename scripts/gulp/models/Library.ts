import { src, dest } from "gulp";

/** Representa uma biblioteca. */
export class Library {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da biblioteca.
   * @param filePath O caminho dos arquivos da biblioteca.
   */
  constructor(public readonly name: string, public readonly filePath: string) { }

  /**
   * Copia a biblioteca para o caminho de destino especificado.
   *
   * @param destPath O caminho de destino da biblioteca.
   */
  public copyTo(destPath: string): NodeJS.ReadWriteStream {

    const fullDestPath = `${destPath}/${this.name}`;

    return src(this.filePath)
      .pipe(dest(fullDestPath));
  }
}
