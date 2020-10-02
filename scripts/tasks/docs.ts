import del from "del";
import { dest, src } from "gulp";
import * as pug from "gulp-pug";

/** O caminho dos arquivos de documentação do projeto. */
const docsFilePath = "docs/**/*.html";

/** Deleta os arquivos de documentação do projeto. */
export function delDocs(): Promise<string[]> {

    return del(docsFilePath);
}

/** O caminho dos arquivos fonte de documentação do projeto. */
const docsSourceFilePath = "src/docs/**/*.pug";
/** O caminho da documentação do projeto. */
const docsPath = "docs";

/** Constrói os arquivos de documentação do projeto. */
export function buildDocs(): NodeJS.ReadWriteStream {

    return src(docsSourceFilePath)
        .pipe(pug())
        .pipe(dest(docsPath));
}