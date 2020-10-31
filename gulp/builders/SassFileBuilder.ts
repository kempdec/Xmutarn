import autoprefixer from "gulp-autoprefixer";
import header from "gulp-header";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import { dest, src } from "gulp";
import { FileBuilder } from "./FileBuilder";

(<any>sass).compiler = require("sass");

/** Responsável pela construção de arquivos CSS com SASS. */
export class SassFileBuilder extends FileBuilder<string> {

  /**
   * Inicializa uma nova instância.
   *
   * @param srcFilePath O caminho dos arquivos fonte a serem construídos.
   * @param destPath O caminho de destino dos arquivos construídos.
   * @param fileHeader O cabeçalho dos arquivos construídos.
   */
  constructor(srcFilePath: string, destPath: string, private fileHeader: string = "") {

    super(srcFilePath, destPath);
  }

  /**
   * Constrói os arquivos CSS.
   *
   * @param isMinified Um sinalizador indicando se a construção do arquivo é minificada.
   */
  private buildCss(isMinified: boolean): NodeJS.ReadWriteStream {

    const outputStyle = isMinified ? "compressed" : "expanded";

    let stream =
      src(this.src)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: outputStyle }));

    if (isMinified) {

      stream = stream.pipe(rename(path => path.basename += ".min"));
    }

    stream =
      stream.pipe(autoprefixer())
        .pipe(header(this.fileHeader))
        .pipe(sourcemaps.write("."))
        .pipe(dest(this.destPath));

    return stream;
  }

  /** Constrói os arquivos CSS expandidos. */
  public buildExpanded(): NodeJS.ReadWriteStream {

    return this.buildCss(false);
  }

  /** Constrói os arquivos CSS minificados. */
  public buildMinified(): NodeJS.ReadWriteStream {

    return this.buildCss(true);
  }
}
