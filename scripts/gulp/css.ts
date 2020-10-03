import del from "del";

const paths = {

    /** O caminho de distribuição das folhas CSS do projeto. */
    distCss: "dist/css"
};

/** Deleta o caminho de distribuição das folhas CSS do projeto. */
export function delCss(): Promise<string[]> {

    return del(paths.distCss);
}