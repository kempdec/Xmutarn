import { src, dest } from "gulp";

/** Representa uma dependência do projeto. */
export class Dependency {

    /** O caminho dos arquivos da dependência. */
    public readonly filePath: string;

    /**
     * Inicializa uma nova instância.
     * 
     * @param name O nome da dependência.
     * @param filePath O caminho dos arquivos dentro da dependência.
     */
    constructor(readonly name: string, filePath: string) {

        this.filePath = `node_modules/${name}/${filePath}`;
    }

    /** Os fluxos das cópias das dependências. */
    private static readonly _copyStreams: NodeJS.ReadWriteStream[] = [];

    /** Os fluxos das cópias das dependências. */
    public static get copyStreams(): NodeJS.ReadWriteStream[] {

        return [].concat(this._copyStreams);
    }

    /**
     * Copia a dependência para o caminho de destino especificado.
     * 
     * @param destPath O caminho de destino da dependência.
     */
    public copyTo(destPath: string): NodeJS.ReadWriteStream {

        const stream = src(this.filePath);

        stream.pipe(dest(`${destPath}/${this.name}`));

        Dependency._copyStreams.push(stream);

        return stream;
    }
}