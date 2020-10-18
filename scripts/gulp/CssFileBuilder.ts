import autoprefixer from "gulp-autoprefixer";
import header from "gulp-header";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import {
  dest,
  src
} from "gulp";

import { FileBuilder } from "./FileBuilder";

const merge = require("merge-stream");

/** Responsável pela construção de arquivos CSS do projeto. */
export class CssFileBuilder extends FileBuilder {

  /**
   * Inicializa uma nova instância.
   *
   * @param srcPath O caminho dos arquivos fonte a serem construídos.
   * @param destPath O caminho de destino dos arquivos construídos.
   * @param fileHeader O cabeçalho dos arquivos construídos.
   */
  constructor(srcPath: string, destPath: string, private fileHeader: string = "") {

    super(srcPath, destPath);
    console.log(destPath);
  }

  /** Constrói os arquivos CSS expandidos do projeto. */
  public buildExpanded(): NodeJS.ReadWriteStream {

    return src(this.srcPath)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "expanded" }))
      .pipe(autoprefixer())
      .pipe(header(this.fileHeader))
      .pipe(sourcemaps.write("."))
      .pipe(dest(this.destPath));
  }

  /** Constrói os arquivos CSS minificados do projeto. */
  public buildMinified(): NodeJS.ReadWriteStream {

    return src(this.srcPath)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }))
      .pipe(rename(path => path.basename += ".min"))
      .pipe(autoprefixer())
      .pipe(header(this.fileHeader))
      .pipe(sourcemaps.write("."))
      .pipe(dest(this.destPath));
  }

  /** Constrói os arquivos CSS do projeto. */
  public build(): NodeJS.ReadWriteStream {

    const stream: NodeJS.ReadWriteStream[] = [];

    stream.push(this.buildExpanded());
    stream.push(this.buildMinified());

    return merge(stream);
  }
}
