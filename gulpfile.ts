import { parallel, series, task, watch } from "gulp";
import {
  fileHeader, Library, LibFileController, PugFileBuilder, SassFileBuilder, TsFileBuilder
} from "./scripts/gulp";

// Construção da documentação do projeto.
const docs = new PugFileBuilder("src/docs/**/*.pug", "docs", "docs/**/*.html");
const delDocs = () => docs.deleteDestFiles();
const buildDocs = () => docs.build();

task("docs", series(delDocs, buildDocs));
task("watchDocs", () => watch("src/docs/**/*", series("docs")));

// Cópia das bibliotecas usadas na documentação do projeto.
const docsLibraries = [

  new Library("xmutarn", "dist/**/*")
];
const docsLibs = new LibFileController(docsLibraries, "docs/assets/lib");
const delDocsLibs = () => docsLibs.deleteDestFiles();
const buildDocsLibs = () => docsLibs.copyToDestPath();

task("docsLibs", series(delDocsLibs, buildDocsLibs));

// Construção dos arquivos CSS de distribuição.
const css = new SassFileBuilder("src/scss/xmutarn*.scss", "dist/css", fileHeader);
const delCss = () => css.deleteDestFiles();
const buildCss = () => css.build();

task("css", series(delCss, buildCss));
task("cssDocs", series("css", "docsLibs"));
task("watchCss", () => watch("src/scss/**/*", series("cssDocs")));

// Construção dos arquivos JS de distribuição.
const js = new TsFileBuilder("src/ts/index.ts", "dist/js", "xmutarn", "X", fileHeader);
const delJs = () => js.deleteDestFiles();
const buildJs = () => js.build();

task("js", series(delJs, buildJs));
task("jsDocs", series("js", "docsLibs"));

// Construção dos arquivos JS da documentação.
const scriptDocs = new TsFileBuilder(["scripts/docs/index.ts"], "docs/assets/js", "index");
const delScriptDocs = () => scriptDocs.deleteDestFiles();
const buildScriptDocs = () => scriptDocs.buildMinified();

task("scriptDocs", series(delScriptDocs, buildScriptDocs));
task("watchScriptDocs", () => watch("scripts/docs/**/*", series("scriptDocs")));

task("default", series(parallel("css", "js", "docs"), "docsLibs"));
