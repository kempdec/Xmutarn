import pug from "gulp-pug";
import { dest, src } from "gulp";
import { FileController } from "../controllers";

/** Responsável pela construção de arquivos HTML com PUG. */
export class PugFileBuilder extends FileController<string> {

  /** Constrói os arquivos HTML. */
  public build(): NodeJS.ReadWriteStream {

    return src(this.src)
      .pipe(pug())
      .pipe(dest(this.destPath));
  }
}
