import { src, dest } from "gulp";

/** Representa uma dependência do projeto. */
export class Dependency {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da dependência.
   * @param filePath O caminho dos arquivos da dependência.
   */
  constructor(readonly name: string, readonly filePath: string) { }

  /**
   * Copia a dependência para o caminho de destino especificado.
   *
   * @param destPath O caminho de destino da dependência.
   */
  public copyTo(destPath: string): NodeJS.ReadWriteStream {

    const fullDestPath = `${destPath}/${this.name}`;

    return src(this.filePath)
      .pipe(dest(fullDestPath));
  }
}
