import ts from "gulp-typescript";
import { parallel, series, task, watch } from "gulp";

import pkg from "./package.json";
import {
  CssFileBuilder, Dependency, DocsLibsFileBuilder, JsFileBuilder
} from "./scripts/gulp";
import { PugFileController } from "./scripts/gulp/controllers";

/** O cabeçalho dos arquivos do projeto. */
const fileHeader = [

  `/*! ${pkg.name} v${pkg.version} (${pkg.repository.url})`,

  `Copyright ${new Date().getFullYear()} ${pkg.author.name}`,

  `Licensed under ${pkg.license} */\n`

].join(" | ");

const docs = new PugFileController("src/docs/**/*.pug", "docs", "docs/**/*.html");
const delDocs = () => docs.deleteDestFiles();
const buildDocs = () => docs.build();

task("docs", series(delDocs, buildDocs));
task("watchDocs", () => watch("src/docs/**/*", series("docs")));

const docsDependencies = [

  new Dependency("xmutarn", "dist/**/*")
];
const docsLibs = new DocsLibsFileBuilder(docsDependencies, "docs/assets/lib");
const delDocsLibs = () => docsLibs.deleteDestPath();
const buildDocsLibs = () => docsLibs.build();

task("docsLibs", series(delDocsLibs, buildDocsLibs));

const css = new CssFileBuilder("src/scss/xmutarn*.scss", "dist/css", fileHeader);
const delCss = () => css.deleteDestPath();
const buildCss = () => css.build();

task("css", series(delCss, buildCss));
task("cssDocs", series("css", "docsLibs"));
task("watchCss", () => watch("src/scss/**/*", series("cssDocs")));

const tsProject = ts.createProject("tsconfig.json");
const js = new JsFileBuilder(tsProject.config.files, "dist/js", pkg.name, "X", fileHeader);
const delJs = () => js.deleteDestPath();
const buildJs = () => js.build();

task("js", series(delJs, buildJs));
task("jsDocs", series("js", "docsLibs"));

const scriptDocs = new JsFileBuilder(["scripts/docs/index.ts"], "docs/assets/js", "index");
const delScriptDocs = () => scriptDocs.deleteDestPath();
const buildScriptDocs = () => scriptDocs.buildMinified();

task("scriptDocs", series(delScriptDocs, buildScriptDocs));
task("watchScriptDocs", () => watch("scripts/docs/**/*", series("scriptDocs")));

task("default", series(parallel("css", "js", "docs"), "docsLibs"));
