import autoprefixer from "gulp-autoprefixer";
import del from "del";
import header from "gulp-header";
import rename from "gulp-rename";
import sass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
import { dest, src } from "gulp";

import { fileHeader } from "./header";

const paths = {

    /** O caminho de distribuição das folhas CSS do projeto. */
    distCss: "dist/css",

    /** O caminho dos arquivos SCSS do projeto. */
    scssFiles: "src/scss/xmutarn*.scss"
};

/** Deleta o caminho de distribuição das folhas CSS do projeto. */
export function delCss(): Promise<string[]> {

    return del(paths.distCss);
}

/** Constrói os arquivos de folhas CSS do projeto. */
export function buildCss(): NodeJS.ReadWriteStream {

    const scss = src(paths.scssFiles);

    scss.pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(autoprefixer())
        .pipe(header(fileHeader))
        .pipe(sourcemaps.write("."))
        .pipe(dest(paths.distCss));

    const minCss = src(paths.scssFiles)
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(rename(path => path.basename += ".min"))
        .pipe(autoprefixer())
        .pipe(header(fileHeader))
        .pipe(sourcemaps.write("."))
        .pipe(dest(paths.distCss));

    return minCss;
}
