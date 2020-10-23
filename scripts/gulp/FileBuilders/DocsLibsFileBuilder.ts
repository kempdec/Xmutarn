import { Dependency } from "../Dependencies";
import { SimpleFileBuilder } from "./SimpleFileBuilder";

/** Responsável pela cópia das bibliotecas e dependências da documentação do projeto. */
export class DocsLibsFileBuilder extends SimpleFileBuilder<Dependency[]> {

  /** Copia as bibliotecas e dependências da documentação do projeto. */
  public build(): NodeJS.ReadWriteStream {

    this.src.forEach(dependency => dependency.copyTo(this.destPath));

    return Dependency.getCopyStreams();
  }
}
