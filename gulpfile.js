"use strict";

const gulp = require("gulp"),
  autoprefixer = require("gulp-autoprefixer"),
  header = require("gulp-header"),
  ignore = require("gulp-ignore"),
  rename = require("gulp-rename"),
  sass = require("gulp-sass"),
  sourcemaps = require("gulp-sourcemaps"),
  ts = require("gulp-typescript"),
  uglify = require("gulp-uglify");

const tsProject = ts.createProject("./tsconfig.json");

// propriedades do pacote.
const pkg = JSON.parse(require("fs").readFileSync("./package.json"));
const banner = `/*! Xmutarn v${pkg.version} (${pkg.repository.url}) | Copyright ${new Date().getFullYear()} ${pkg.author.name} | Licensed under MIT (${pkg.repository.url.replace(".git", "")}/blob/master/LICENSE) */\n`;

gulp.task("ts", () => tsProject.src()
  .pipe(sourcemaps.init())
  .pipe(tsProject())
  .pipe(header(banner))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(tsProject.options.outDir))
  .pipe(ignore.exclude("*.map"))
  .pipe(sourcemaps.init())
  .pipe(uglify().on("error", e => console.log(e)))
  .pipe(rename((path) => { path.basename += ".min"; }))
  .pipe(header(banner))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(tsProject.options.outDir)));

// caminho do arquivo SASS principal.
const mainSassFile = `./src/scss/${pkg.name}.scss`,
  // caminho de distribuição dos arquivos CSS.
  cssDistPath = "./dist/style",

  autoprefixerOptions = "defaults";

gulp.task("sass:expanded", () => gulp.src(mainSassFile)
  .pipe(sourcemaps.init())
  .pipe(sass({ outputStyle: "expanded" }).on("error", sass.logError))
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(header(banner))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(cssDistPath)));

gulp.task("sass:min", () => gulp.src(mainSassFile)
  .pipe(sourcemaps.init())
  .pipe(rename((path) => { path.basename += ".min"; }))
  .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
  .pipe(autoprefixer(autoprefixerOptions))
  .pipe(header(banner))
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(cssDistPath)));

gulp.task("sass", ["sass:expanded", "sass:min"]);

gulp.task("default", ["ts", "sass"], () => gulp.src("./dist/**/*")
  .pipe(gulp.dest("./docs/assets")));
