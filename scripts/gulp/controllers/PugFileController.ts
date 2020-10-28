import pug from "gulp-pug";
import { dest, src } from "gulp";
import { FileController } from "./FileController";

/** Responsável pela construção de arquivos HTML com PUG. */
export class PugFileController extends FileController<string> {

  /** Constrói os arquivos HTML. */
  public build(): NodeJS.ReadWriteStream {

    return src(this.src)
      .pipe(pug())
      .pipe(dest(this.destPath));
  }
}
