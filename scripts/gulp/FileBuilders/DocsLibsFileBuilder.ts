import { Dependency } from "../Dependencies";
import { SimpleFileBuilder } from "./SimpleFileBuilder";

const merge = require("merge-stream");

/** Responsável pela cópia das bibliotecas e dependências da documentação do projeto. */
export class DocsLibsFileBuilder extends SimpleFileBuilder<Dependency[]> {

  /** Copia as bibliotecas e dependências da documentação do projeto. */
  public build(): NodeJS.ReadWriteStream {

    const streams = this.src.map(dependency => dependency.copyTo(this.destPath));

    return merge(streams);
  }
}
