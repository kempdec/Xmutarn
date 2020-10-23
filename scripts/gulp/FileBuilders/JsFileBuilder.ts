import browserify from "browserify";
import buffer from "vinyl-buffer";
import header from "gulp-header";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import terser from "gulp-terser";
import tsify from "tsify";
import { dest } from "gulp";
import { FileBuilder } from "./FileBuilder";

/** Responsável pela construção de arquivos JS do projeto. */
export class JsFileBuilder extends FileBuilder<string[]> {

  /**
     * Inicializa uma nova instância.
     *
     * @param srcFilePath Os caminhos dos arquivos fonte a serem construídos.
     * @param destPath O caminho de destino dos arquivos construídos.
     * @param fileName O nome do arquivo construído.
     * @param standalone O módulo autônomo do arquivo construído.
     * @param fileHeader O cabeçalho do arquivo construído.
     */
  constructor(srcFilePath: string[], destPath: string, readonly fileName: string, readonly standalone = "", readonly fileHeader = "") {

    super(srcFilePath, destPath);
  }

  /**
   * Cria e retorna o bundle dos arquivos JS do projeto.
   *
   * @param standalone O módulo autônomo do arquivo construído.
   */
  private createBundle(standalone: string): NodeJS.ReadableStream {

    const browserifyObj = browserify({
      basedir: ".",
      entries: this.src,
      standalone: standalone
    });

    return browserifyObj.plugin(tsify).bundle();
  }

  /** Constrói o arquivo JS expandido do projeto. */
  public buildExpanded(): NodeJS.ReadWriteStream {

    const bundle = this.createBundle(this.standalone);

    return bundle.pipe(source(`${this.fileName}.js`))
      .pipe(header(this.fileHeader))
      .pipe(dest(this.destPath));
  }

  /** Constrói o arquivo JS minificado do projeto. */
  public buildMinified(): NodeJS.ReadWriteStream {

    const bundle = this.createBundle(this.standalone);

    return bundle.pipe(source(`${this.fileName}.min.js`))
      .pipe(buffer())
      .pipe(header(this.fileHeader))
      .pipe(sourcemaps.init())
      .pipe(terser())
      .pipe(sourcemaps.write("."))
      .pipe(dest(this.destPath));
  }
}
