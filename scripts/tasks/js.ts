import del from "del";

const paths = {

    /** O caminho de distribuição dos scripts JS do projeto. */
    distJs: "dist/js"
};

/** Deleta o caminho de distribuição dos scripts JS do projeto. */
export function delJs(): Promise<string[]> {

    return del(paths.distJs);
}