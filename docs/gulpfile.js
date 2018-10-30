"use strict";

const gulp = require("gulp"),
  sourcemaps = require("gulp-sourcemaps"),
  ts = require("gulp-typescript");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("ts", () => tsProject.src()
  .pipe(sourcemaps.init())
  .pipe(tsProject())
  .pipe(sourcemaps.write("."))
  .pipe(gulp.dest(tsProject.options.outDir)));

gulp.task("default", ["ts"]);
