"use strict";

const { dest } = require("gulp"),
  sourcemaps = require("gulp-sourcemaps"),
  typescript = require("gulp-typescript");

const tsProject = typescript.createProject("./tsconfig.json");

/**
 * Transpila os arquivos TypeScript para JavaScript.
 */
function ts() {
  return tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("."))
    .pipe(dest(tsProject.options.outDir));
}

exports.ts = ts;
exports.default = ts;
