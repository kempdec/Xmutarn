import {
  parallel,
  series,
  task,
  watch
} from "gulp";

import {
    buildDocs,
    buildJs,
    copyDocsDependency,
    CssFileBuilder,
    delDocs,
    delDocsLibs,
    delJs,
    watchDocs
} from "./scripts/gulp";
import { fileHeader } from "./scripts/gulp/header";

const paths = {

  /** O caminho de distribuição das folhas CSS do projeto. */
  distCss: "dist/css",

  /** O caminho dos arquivos SCSS do projeto. */
  scssFiles: "src/scss/xmutarn*.scss"
};

const css = new CssFileBuilder(paths.scssFiles, paths.distCss, fileHeader);

const delCss = () => css.deleteDestPath();
const buildCss = () => css.build();

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
