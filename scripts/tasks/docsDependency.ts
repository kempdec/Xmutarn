import del from "del";
import { Dependency } from "../Dependency";

/** O caminho das bibliotecas da documentação do projeto. */
const docsLibPath = "docs/assets/lib";

/** Deleta as bibliotecas da documentação do projeto. */
export function delDocsLibs(): Promise<string[]> {

    return del(docsLibPath);
}

/** Copia a dependência da documentação do projeto. */
export function copyDocsDependency(): NodeJS.ReadWriteStream {

    const dependency = new Dependency("xmutarn", "dist/**/*");

    return dependency.copyTo(docsLibPath);
}