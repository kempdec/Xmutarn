import browserify from "browserify";
import buffer from "vinyl-buffer";
import del from "del";
import header from "gulp-header";
import rename from "gulp-rename";
import source from "vinyl-source-stream";
import sourcemaps from "gulp-sourcemaps";
import terser from "gulp-terser";
import ts from "gulp-typescript";
import tsify from "tsify";
import { dest } from "gulp";

import pkg from "../../package.json";
import { fileHeader } from "./header";

const paths = {

    /** O caminho de distribuição dos scripts JS do projeto. */
    distJs: "dist/js"
};

/** Deleta o caminho de distribuição dos scripts JS do projeto. */
export function delJs(): Promise<string[]> {

    return del(paths.distJs);
}

/** Constrói os arquivos de scripts JS do projeto. */
export function buildJs(): NodeJS.ReadWriteStream {

    const project = ts.createProject("tsconfig.json");

    const browserifyObj = browserify({
        entries: project.config.files,
        basedir: ".",
        standalone: "X"
    });
    const bundle = browserifyObj.plugin(tsify).bundle();

    const js = bundle.pipe(source(`${pkg.name}.js`))
        .pipe(buffer())
        .pipe(header(fileHeader))
        .pipe(dest(paths.distJs));

    const minJs = js.pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(rename(path => path.basename += ".min"))
        .pipe(sourcemaps.write("."))
        .pipe(dest(paths.distJs));

    return minJs;
}