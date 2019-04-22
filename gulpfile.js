"use strict";

const del = require("del");

/** Caminhos do projeto. */
const paths = {

  /** Caminho dos arquivos de distribuição de folhas de estilo CSS do projeto. */
  css: "dist/css",

  /** Caminho dos arquivos de distribuição de scripts JavaScript do projeto. */
  js: "dist/js",

  /** Caminho dos arquivos de distribuição do projeto. */
  dist: "dist",

  /** Caminho dos arquivos de documentações do projeto. */
  docs: "docs",

  /** Caminho dos arquivos das bibliotecas da documentação do projeto. */
  docsLib: "docs/assets/lib",

  /** Caminho dos arquivos do Xmutarn da documentação do projeto. */
  docsXmutarn: "docs/assets/lib/xmutarn"
};

/** Limpa o caminho dos arquivos de distribuição de folhas de estilo CSS do projeto. */
function cleanCssPath() {

  return del(paths.css);
}

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
    .pipe(header(banner))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.css));

  return src(mainSassFile)
    .pipe(rename(path => {
      path.basename += ".min";
    }))
    .pipe(sass({
      outputStyle: "compressed"
    })).on("error", sass.logError)
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(header(banner))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.css));
}

exports.css = series(cleanCssPath, buildCss);

/** Limpa o caminho dos arquivos de distribuição de scripts JavaScript do projeto. */
function cleanJsPath() {

  return del(paths.js);
}

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
    .bundle().on("error", e => console.error(e))
    .pipe(source(`xmutarn.js`))
    .pipe(buffer())
    .pipe(babel({
      presets: ["@babel/env"]
    }))
    .pipe(header(banner))
    .pipe(dest(paths.js))
    .pipe(uglify().on("error", e => console.error(e)))
    .pipe(rename(path => {
      path.basename += ".min";
    }))
    .pipe(header(banner))
    .pipe(sourcemaps.init({
      loadMaps: true
    }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(paths.js));
}

exports.js = series(cleanJsPath, buildJs);

/** Limpa os arquivos do Xmutarn da documentação do projeto. */
function cleanDocsXmutarnPath() {

  return del(paths.docsXmutarn);
}

/** Copia os arquivos de distribuição para os ativos da documentação do projeto. */
function copyDistToDocs() {

  return src(`${paths.dist}/**/*`)
    .pipe(dest(paths.docsXmutarn));
}

exports.copyToDocs = series(cleanDocsXmutarnPath, copyDistToDocs);

/** Limpa o caminho dos arquivos de documentações do projeto. */
function cleanDocsPath() {

  return del(`${paths.docs}/**/*.html`);
}

/** Constrói os arquivos de documentações do projeto. */
function buildDocs() {

  const pug = require("gulp-pug");

  return src("src/docs/**/*.pug")
    .pipe(pug())
    .pipe(dest(paths.docs));
}

exports.docs = series(cleanDocsPath, buildDocs);

const watch = require("gulp-watch");

exports.docsWatch = () => watch("src/docs/**/*", series(cleanDocsPath, buildDocs));

exports.default =
  series(
    parallel(
      series(cleanCssPath, buildCss),
      series(cleanJsPath, buildJs),
      series(cleanDocsPath, buildDocs)
    ),
    series(cleanDocsXmutarnPath, copyDistToDocs)
  );
