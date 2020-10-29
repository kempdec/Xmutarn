import browserify from "browserify";
import buffer from "vinyl-buffer";
import header from "gulp-header";
import rename from "gulp-rename";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import terser from "gulp-terser";
import tsify from "tsify";
import { dest } from "gulp";
import { FileBuilder } from "./FileBuilder";

/** Responsável pela construção de arquivos JavaScript com TypeScript. */
export class TsFileBuilder extends FileBuilder<string | string[]> {

  /**
     * Inicializa uma nova instância.
     *
     * @param srcFilePath Os caminhos dos arquivos fonte a serem construídos.
     * @param destPath O caminho de destino dos arquivos construídos.
     * @param fileName O nome do arquivo construído.
     * @param standalone O módulo autônomo do arquivo construído.
     * @param fileHeader O cabeçalho do arquivo construído.
     */
  constructor(srcFilePath: string | string[], destPath: string, readonly fileName: string, readonly standalone = "",
    readonly fileHeader = "") {

    super(srcFilePath, destPath);
  }

  /**
   * Cria e retorna o bundle dos arquivos JS.
   *
   * @param entries O caminho dos arquivos de entrada para construção.
   * @param standalone O módulo autônomo do arquivo construído.
   */
  private createBundle(entries: string | string[], standalone: string): NodeJS.ReadableStream {

    const browserifyObj = browserify({
      basedir: ".",
      entries: entries,
      standalone: standalone
    });

    return browserifyObj.plugin(tsify).bundle();
  }

  /**
   * Constrói os arquivos JS.
   *
   * @param isMinified Um sinalizador indicando se a construção do arquivo é minificada.
   */
  private buildJs(isMinified: boolean): NodeJS.ReadWriteStream {

    const extName = isMinified ? ".min.js" : ".js";

    let stream =
      this.createBundle(this.src, this.standalone)
        .pipe(source(this.fileName))
        .pipe(buffer())
        .pipe(rename({ extname: extName }))
        .pipe(header(this.fileHeader));

    if (isMinified) {

      stream =
        stream
          .pipe(sourcemaps.init())
          .pipe(terser())
          .pipe(sourcemaps.write("."));
    }

    return stream.pipe(dest(this.destPath));
  }

  /** Constrói o arquivo JS expandido. */
  public buildExpanded(): NodeJS.ReadWriteStream {

    return this.buildJs(false);
  }

  /** Constrói o arquivo JS minificado. */
  public buildMinified(): NodeJS.ReadWriteStream {

    return this.buildJs(true);
  }
}
