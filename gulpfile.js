"use strict";

const {
  src,
  dest,
  series,
  parallel
} = require("gulp");

const header = require("gulp-header");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

/** Propriedades do pacote. */
const pkg = JSON.parse(require("fs").readFileSync("package.json"));

const banner = `/*! Xmutarn v${pkg.version} (${pkg.repository.url}) | Copyright ${new Date().getFullYear()} ${pkg.author.name} | Licensed under MIT (${pkg.repository.url.replace(".git", "")}/blob/master/LICENSE) */\n`;

const paths = {

  /** Caminho de distribuição dos arquivos CSS. */
  cssDistPath: "dist/style",

  /** Caminho de distribuição dos arquivos JS. */
  jsDist: "dist/js"

};

const sassTask = () => {
  const autoprefixer = require("gulp-autoprefixer");
  const sass = require("gulp-sass");

  const mainSassFile = `src/scss/${pkg.name}*.scss`;
  const autoprefixerOptions = "defaults";

  src(mainSassFile)
    .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.cssDistPath));

  return src(mainSassFile)
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.cssDistPath));
};

const copyToDocs = () =>
  src("dist/**/*")
    .pipe(dest("docs/assets"));

exports.sass = series(sassTask, copyToDocs);

const uglify = require("gulp-uglify");

const ts = () => {

  const browserify = require("browserify");
  const buffer = require("vinyl-buffer");
  const source = require("vinyl-source-stream");
  const tsify = require("tsify");

  return browserify("src/ts/index.ts", {
    basedir: ".",
    debug: true
  })
    .plugin(tsify)
    .bundle().on("error", e => console.error(e))
    .pipe(source("xmutarn-md.js"))
    .pipe(header(banner))
    .pipe(dest(paths.jsDist))
    .pipe(buffer())
    .pipe(uglify().on("error", e => console.error(e)))
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(header(banner))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.jsDist));
}

exports.ts = series(ts, copyToDocs);

const ignore = require("gulp-ignore");
const typescript = require("gulp-typescript");

const tsProject = typescript.createProject("tsconfig.json");

/** Transpila e minifica os arquivos TypeScript para JavaScript. */
const tss = () =>
  tsProject.src()
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

exports.tss = series(tss, copyToDocs);

exports.default = series(parallel(ts, sassTask, tss), copyToDocs);