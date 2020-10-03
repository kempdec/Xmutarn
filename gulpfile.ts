import { dest, parallel, series, src, task } from "gulp";

import { fileHeader } from "./scripts/gulp/header";
import { buildDocs, buildJs, copyDocsDependency, delCss, delDocs, delDocsLibs, delJs, watchDocs } from "./scripts/gulp";

/** Os caminhos do projeto. */
const paths = {

  /** Caminho dos arquivos de distribuição de folhas de estilo CSS do projeto. */
  css: "dist/css"
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

task("js", series(delJs, buildJs));

task("docs", series(delDocs, buildDocs));
task("docsDependency", series(delDocsLibs, copyDocsDependency));
task("jsDocs", series("js", "docsDependency"));
task("watchDocs", watchDocs);

task("default", series(parallel("css", "js", "docs"), "docsDependency"));
