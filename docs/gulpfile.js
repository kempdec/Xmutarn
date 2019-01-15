"use strict";

const { src, dest } = require("gulp"),
  merge = require("merge-stream"),
  rimraf = require("rimraf"),
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

/** Diretório destino das bibliotecas. */
const libPath = "./assets/lib";

/** Dependências e seus diretórios (fonte e destino). */
const dependencies = {
  "vue": {
    "dist/*": "dist/"
  }
};

/**
 * Copia os pacotes de dependências para os ativos da documentação.
 */
function copyPackagesToDocs(cb) {
  // apaga todos os arquivos existentes no diretório destino das bibliotecas.
  rimraf(libPath, cb);

  const streams = [];

  for (let dependency in dependencies) {
    console.log("Movendo dependência: " + dependency);

    for (let path in dependencies[dependency]) {
      // diretório da dependência.
      const dependencyPath = `../node_modules/${dependency}/${path}`;

      // diretório destino da dependência.
      const dependencyDestPath = `${libPath}/${dependency}/${dependencies[dependency][path]}`;

      streams.push(
        src(dependencyPath)
          .pipe(dest(dependencyDestPath)));
    }
  }

  return merge(streams);
}

exports.ts = ts;
exports.copyPackagesToDocs = copyPackagesToDocs;
exports.default = ts;
