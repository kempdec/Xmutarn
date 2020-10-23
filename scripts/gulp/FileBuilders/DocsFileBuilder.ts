import pug from "gulp-pug";
import { dest, src } from "gulp";
import { SimpleFileBuilder } from "./SimpleFileBuilder";

/** Responsável pela construção dos arquivos de documentação do projeto. */
export class DocsFileBuilder extends SimpleFileBuilder<string> {

  /** Constrói os arquivos de documentação do projeto. */
  public build(): NodeJS.ReadWriteStream {

    return src(this.src)
      .pipe(pug())
      .pipe(dest(this.destPath));
  }
}
