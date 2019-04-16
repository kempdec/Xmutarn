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

/** Propriedades do pacote de dependências. */
const pkg = JSON.parse(require("fs").readFileSync("package.json"));

/** Cabeçalho dos arquivos de distribuição. */
const banner = `/*! Xmutarn v${pkg.version} (${pkg.repository.url}) | Copyright ${new Date().getFullYear()} ${pkg.author.name} | Licensed under MIT (${pkg.repository.url.replace(".git", "")}/blob/master/LICENSE) */\n`;

/** Caminhos. */
const paths = {
  /** Caminho de distribuição dos arquivos CSS. */
  cssDist: "dist/css",
  /** Caminho de distribuição dos arquivos JS. */
  jsDist: "dist/js"
};

function sass() {
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
    .pipe(dest(paths.cssDist));

  return src(mainSassFile)
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.cssDist));
}

/** Copia os arquivos de distribuição para os ativos da documentação do projeto. */
function copyToDocs() {
  return src("dist/**/*")
    .pipe(dest("docs/assets"));
}

exports.sass = series(sass, copyToDocs);

function ts() {

  const browserify = require("browserify");
  const buffer = require("vinyl-buffer");
  const source = require("vinyl-source-stream");
  const tsify = require("tsify");
  const uglify = require("gulp-uglify");

  return browserify({
    standalone: "X",
    basedir: ".",
    debug: true,
    entries: ["src/ts/index.ts"]
  })
    .plugin(tsify)
    .bundle().on("error", e => console.error(e))
    .pipe(source(`${pkg.name}-md.js`))
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

exports.default = series(parallel(ts, sass), copyToDocs);
