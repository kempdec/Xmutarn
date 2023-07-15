import { parallel, series, task, watch } from "gulp";
import { SassFileBuilder, TsFileBuilder } from "./gulp/builders";
import { LibFileController } from "./gulp/controllers";
import { TsFile, Library } from "./gulp/models";
import { fileHeader } from "./gulp/header";

// Cópia das bibliotecas usadas na documentação do projeto.
const docsLibraries = [

  new Library("xmutarn", "dist/**/*")
];
const docsLibs = new LibFileController(docsLibraries, "src/Xmutarn.Web/wwwroot/lib");
const delDocsLibs = () => docsLibs.deleteDestFiles();
const buildDocsLibs = () => docsLibs.copyAllToDestPath();

task("docsLibs", series(delDocsLibs, buildDocsLibs));

// Construção dos arquivos CSS de distribuição.
const css = new SassFileBuilder("src/scss/xmutarn*.scss", "dist/css", fileHeader);
const delCss = () => css.deleteDestFiles();
const buildCss = () => css.build();

task("css", series(delCss, buildCss));
task("cssDocs", series("css", "docsLibs"));
task("watchCss", () => watch("src/scss/**/*", series("cssDocs")));

// Construção dos arquivos JS de distribuição.
const jsFiles = [

  new TsFile("src/ts/index.ts", "xmutarn", "X", fileHeader)
];
const js = new TsFileBuilder(jsFiles, "dist/js");
const delJs = () => js.deleteDestFiles();
const buildJs = () => js.build();

task("js", series(delJs, buildJs));
task("jsDocs", series("js", "docsLibs"));

task("default", series(parallel("css", "js"), "docsLibs"));
