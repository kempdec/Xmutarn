import { SimpleFileBuilder } from "./SimpleFileBuilder";

const merge = require("merge-stream");

/** Fornece abstração para a construção de arquivos do projeto. */
export abstract class FileBuilder<T> extends SimpleFileBuilder<T> {

  /** Constrói os arquivos expandidos do projeto. */
  public abstract buildExpanded(): NodeJS.ReadWriteStream;

  /** Constrói os arquivos minificados do projeto. */
  public abstract buildMinified(): NodeJS.ReadWriteStream;

  /** Constrói os arquivos do projeto. */
  public build(): NodeJS.ReadWriteStream {

    const stream: NodeJS.ReadWriteStream[] = [];

    stream.push(this.buildExpanded());
    stream.push(this.buildMinified());

    return merge(stream);
  }
}
