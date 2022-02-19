import { parallel, series, task, watch } from "gulp";
import { SassFileBuilder, TsFileBuilder } from "./gulp/builders";
import { LibFileController } from "./gulp/controllers";
import { TsFile, Library, NodeLibrary } from "./gulp/models";
import { fileHeader } from "./gulp/header";

// Cópia das bibliotecas usadas na documentação do projeto.
const docsLibraries = [

  new Library("xmutarn", "dist/**/*"),
  new NodeLibrary("js-cookie", "src/js.cookie.js")
];
const docsLibs = new LibFileController(docsLibraries, "src/dotnet/Xmutarn.Web/wwwroot/lib");
const delDocsLibs = () => docsLibs.deleteDestFiles();
const buildDocsLibs = () => docsLibs.copyAllToDestPath();

task("docsLibs", series(delDocsLibs, buildDocsLibs));

// Construção dos arquivos JS da documentação.
const docsScriptsFiles = [

  new TsFile("src/scripts/docs/shared/layout.ts", "shared/layout.js"),
  new TsFile("src/scripts/docs/docs/theme.ts", "docs/theme.js")
];
const docsScripts = new TsFileBuilder(docsScriptsFiles, "docs/assets/js");
const delDocsScripts = () => docsScripts.deleteDestFiles();
const buildDocsScripts = () => docsScripts.buildMinified();

task("docsScripts", series(delDocsScripts, buildDocsScripts));
task("watchDocsScripts", () => watch("src/scripts/docs/**/*", series("docsScripts")));

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

task("default", parallel("docsScripts", series(parallel("css", "js"), "docsLibs")));
