"use strict";

const { src, dest, series, parallel } = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  header = require("gulp-header"),
  ignore = require("gulp-ignore"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  typescript = require("gulp-typescript"),
  uglify = require("gulp-uglify");

const tsProject = typescript.createProject("./tsconfig.json");

/** Propriedades do pacote. */
const pkg = JSON.parse(require("fs").readFileSync("./package.json"));

const banner = `/*! Xmutarn v${pkg.version} (${pkg.repository.url}) | Copyright ${new Date().getFullYear()} ${pkg.author.name} | Licensed under MIT (${pkg.repository.url.replace(".git", "")}/blob/master/LICENSE) */\n`;

/**
 * Transpila e minifica os arquivos TypeScript para JavaScript.
 */
function ts() {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(header(banner))
    .pipe(sourcemaps.write("."))
    .pipe(dest(tsProject.options.outDir))
    .pipe(ignore.exclude("*.map"))
    .pipe(sourcemaps.init())
    .pipe(uglify().on("error", e => console.log(e)))
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(header(banner))
    .pipe(sourcemaps.write("."))
    .pipe(dest(tsProject.options.outDir));
}

/** Caminho do arquivo SASS principal. */
const mainSassFile = `./src/scss/${pkg.name}.scss`;

/** Caminho de distribuição dos arquivos CSS. */
const cssDistPath = "./dist/style";

const autoprefixerOptions = "defaults";

/**
 * Transpila e minifica os arquivos SASS para folhas de estilo.
 */
function sassTask() {
  src(mainSassFile)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.write("."))
    .pipe(dest(cssDistPath));

  return src(mainSassFile)
    .pipe(sourcemaps.init())
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.write("."))
    .pipe(dest(cssDistPath));
}

/**
 * Copia os arquivos de distribuição para os ativos da documentação.
 */
function copyToDocs() {
  return src("./dist/**/*")
    .pipe(dest("./docs/assets"));
}

exports.ts = series(ts, copyToDocs);
exports.sass = series(sassTask, copyToDocs);
exports.default = series(parallel(ts, sassTask), copyToDocs);
