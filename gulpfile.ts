import pkg from "./package.json";
import { parallel, series, task, watch } from "gulp";
import {
  buildDocs,
  copyDocsDependency,
  CssFileBuilder,
  delDocs,
  delDocsLibs,
  fileHeader,
  JsFileBuilder,
  watchDocs
} from "./scripts/gulp";

const css = new CssFileBuilder("src/scss/xmutarn*.scss", "dist/css", fileHeader);
const delCss = () => css.deleteDestPath();
const buildCss = () => css.build();

task("css", series(delCss, buildCss));

const js = new JsFileBuilder("src/ts/index.ts", "dist/js", pkg.name, "X", fileHeader);
const delJs = () => js.deleteDestPath();
const buildJs = () => js.build();

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
