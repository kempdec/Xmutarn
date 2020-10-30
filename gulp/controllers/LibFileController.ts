import { dest, src } from "gulp";
import { Library } from "..";
import { FileController } from "./FileController";

const merge = require("merge-stream");

/** Responsável pela manipulação de bibliotecas. */
export class LibFileController extends FileController<Library[]> {

  /**
   * Copia uma biblioteca para o caminho de destino.
   *
   * @param library A biblioteca a ser copiada.
   */
  private copyToDestPath(library: Library): NodeJS.ReadWriteStream {

    const fullDestPath = `${this.destPath}/${library.name}`;

    return src(library.filePath)
      .pipe(dest(fullDestPath));
  }

  /** Copia as bibliotecas para o caminho de destino. */
  public copyAllToDestPath(): NodeJS.ReadWriteStream {

    const streams = this.src.map(lib => this.copyToDestPath(lib));

    return merge(streams);
  }
}
