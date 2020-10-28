import { Library } from "..";
import { FileController } from "./FileController";

const merge = require("merge-stream");

/** Responsável pela manipulação de bibliotecas. */
export class LibFileController extends FileController<Library[]> {

  /** Copia as bibliotecas para o caminho de destino. */
  public copyToDestPath(): NodeJS.ReadWriteStream {

    const streams = this.src.map(lib => lib.copyTo(this.destPath));

    return merge(streams);
  }
}
