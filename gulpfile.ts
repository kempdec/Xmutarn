import { dest, parallel, series, src, task } from "gulp";

import pkg from "./package.json";
import { delCss } from "./scripts/tasks/css";
import { delJs } from "./scripts/tasks/js";
import { buildDocs, copyDocsDependency, delDocs, delDocsLibs, watchDocs } from "./scripts/tasks/docs";

/** O cabeçalho dos arquivos de distribuição do projeto. */
const fileHeader = [

  `/*! ${pkg.name} v${pkg.version} (${pkg.repository.url})`,

  `Copyright ${new Date().getFullYear()} ${pkg.author.name}`,

  `Licensed under ${pkg.license} */\n`
  
].join(" | ");

/** Os caminhos do projeto. */
const paths = {

  /** Caminho dos arquivos de distribuição de folhas de estilo CSS do projeto. */
  css: "dist/css",

  /** Caminho dos arquivos de distribuição de scripts JavaScript do projeto. */
  js: "dist/js"
};

const header = require("gulp-header");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

/** Constrói os arquivos de distribuição de folhas de estilo CSS do projeto. */
function buildCss() {

  const autoprefixer = require("gulp-autoprefixer");
  const sass = require("gulp-sass");

  /** Arquivo principal do SASS. */
  const mainSassFile = `src/scss/xmutarn*.scss`;

  const autoprefixerOptions = "defaults";

  src(mainSassFile)
    .pipe(sass({
      outputStyle: "expanded"
    })).on("error", sass.logError)
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(fileHeader))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.css));

  return src(mainSassFile)
    .pipe(rename((path: any) => {
      path.basename += ".min";
    }))
    .pipe(sass({
      outputStyle: "compressed"
    })).on("error", sass.logError)
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(fileHeader))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.css));
}

task("css", series(delCss, buildCss));

/** Constrói os arquivos de distribuição de scripts JavaScript do projeto. */
function buildJs() {

  const babel = require("gulp-babel");
  const browserify = require("browserify");
  const buffer = require("vinyl-buffer");
  const source = require("vinyl-source-stream");
  const ts = require("gulp-typescript");
  const tsify = require("tsify");
  const uglify = require("gulp-uglify");

  const tsProject = ts.createProject("tsconfig.json");

  return browserify(tsProject.config.files, {
    basedir: "."
  })
    .plugin(tsify)
    .bundle().on("error", (e: Error) => console.error(e))
    .pipe(source(`xmutarn.js`))
    .pipe(buffer())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(header(fileHeader))
    .pipe(dest(paths.js))
    .pipe(uglify().on("error", (e: Error) => console.error(e)))
    .pipe(rename((path: any) => {
      path.basename += ".min";
    }))
    .pipe(header(fileHeader))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.js));
}

task("js", series(delJs, buildJs));

task("docs", series(delDocs, buildDocs));
task("docsDependency", series(delDocsLibs, copyDocsDependency));
task("jsDocs", series("js", "docsDependency"));
task("watchDocs", watchDocs);

task("default", series(parallel("css", "js", "docs"), "docsDependency"));
