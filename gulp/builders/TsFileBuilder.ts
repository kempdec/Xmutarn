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
import { TsFile } from "..";

const merge = require("merge-stream");

/** Responsável pela construção de arquivos JavaScript com TypeScript. */
export class TsFileBuilder extends FileBuilder<TsFile[]> {

  /**
     * Inicializa uma nova instância.
     *
     * @param srcFiles Os arquivos fonte a serem construídos.
     * @param destPath O caminho de destino dos arquivos construídos.
     */
  constructor(srcFiles: TsFile[], destPath: string) {

    super(srcFiles, destPath);
  }

  /**
   * Cria e retorna um bundle em JS.
   *
   * @param file O arquivo para criar o bundle.
   */
  private createBundle(file: TsFile): NodeJS.ReadableStream {

    const browserifyObj = browserify({
      basedir: ".",
      entries: file.path,
      standalone: file.standalone
    });

    return browserifyObj.plugin(tsify).bundle();
  }

  /**
   * Constrói os arquivos JS.
   *
   * @param file O arquivo a ser construído.
   * @param isMinified Um sinalizador indicando se a construção do arquivo é minificada.
   */
  private buildJs(file: TsFile, isMinified: boolean): NodeJS.ReadWriteStream {

    const extName = isMinified ? ".min.js" : ".js";

    let stream =
      this.createBundle(file)
        .pipe(source(file.name))
        .pipe(buffer())
        .pipe(rename({ extname: extName }))
        .pipe(header(file.header));

    if (isMinified) {

      stream =
        stream
          .pipe(sourcemaps.init())
          .pipe(terser())
          .pipe(sourcemaps.write("."));
    }

    return stream.pipe(dest(this.destPath));
  }

  /** Constrói os arquivos JS expandidos. */
  public buildExpanded(): NodeJS.ReadWriteStream {

    const streams = this.src.map(file => this.buildJs(file, false));

    return merge(streams);
  }

  /** Constrói os arquivo JS minificados. */
  public buildMinified(): NodeJS.ReadWriteStream {

    const streams = this.src.map(file => this.buildJs(file, true));

    return merge(streams);
  }
}
