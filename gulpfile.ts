import { parallel, series, task, watch } from "gulp";

import {
    buildCss, buildDocs, buildJs, copyDocsDependency, delCss, delDocs, delDocsLibs, delJs, watchDocs
} from "./scripts/gulp";

task("css", series(delCss, buildCss));
task("js", series(delJs, buildJs));

task("docs", series(delDocs, buildDocs));
task("docsDependency", series(delDocsLibs, copyDocsDependency));

task("cssDocs", series("css", "docsDependency"));
task("jsDocs", series("js", "docsDependency"));

/** O caminho dos arquivos fonte SCSS do projeto. */
const scssSrcFilesPath = "src/scss/**/*";

task("watchCss", () => watch(scssSrcFilesPath, series("cssDocs")));
task("watchDocs", watchDocs);

task("default", series(parallel("css", "js", "docs"), "docsDependency"));
