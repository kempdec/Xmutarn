import del from "del";
import { dest, src } from "gulp";
import pug from "gulp-pug";
import { Dependency } from "../Dependency";

const paths = {

    /** O caminho da documentação do projeto. */
    docs: "docs",

    /** O caminho das bibliotecas da documentação do projeto. */
    docsLib: "docs/assets/lib",

    /** O caminho dos arquivos de documentação do projeto. */
    docsFiles: "docs/**/*.html",

    /** O caminho dos arquivos fonte de documentação do projeto. */
    docsSrcFiles: "src/docs/**/*.pug"
};

/** Deleta os arquivos de documentação do projeto. */
export function delDocs(): Promise<string[]> {

    return del(paths.docsFiles);
}

/** Deleta as bibliotecas da documentação do projeto. */
export function delDocsLibs(): Promise<string[]> {

    return del(paths.docsLib);
}

/** Copia a dependência da documentação do projeto. */
export function copyDocsDependency(): NodeJS.ReadWriteStream {

    const dependency = new Dependency("xmutarn", "dist/**/*");

    return dependency.copyTo(paths.docsLib);
}

/** Constrói os arquivos de documentação do projeto. */
export function buildDocs(): NodeJS.ReadWriteStream {

    return src(paths.docsSrcFiles)
        .pipe(pug())
        .pipe(dest(paths.docs));
}