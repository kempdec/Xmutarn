import { src, dest } from "gulp";

const merge = require("merge-stream");

/** Representa uma dependência do projeto. */
export class Dependency {

  /**
   * Inicializa uma nova instância.
   *
   * @param name O nome da dependência.
   * @param filePath O caminho dos arquivos da dependência.
   */
  constructor(readonly name: string, readonly filePath: string) {}

  /** Os fluxos das cópias das dependências. */
  private static readonly copyStreams: NodeJS.ReadWriteStream[] = [];

  /** Obtém os fluxos das cópias das dependências. */
  public static getCopyStreams(): NodeJS.ReadWriteStream {

    const streams: NodeJS.ReadWriteStream[] = [];

    return merge(streams.concat(this.copyStreams));
  }

  /**
   * Copia a dependência para o caminho de destino especificado.
   *
   * @param destPath O caminho de destino da dependência.
   */
  public copyTo(destPath: string): NodeJS.ReadWriteStream {

    const stream = src(this.filePath)
      .pipe(dest(`${destPath}/${this.name}`));

    Dependency.copyStreams.push(stream);

    return stream;
  }
}
