import pkg from "../../package.json";

const headerBuilder = [

    `/*! ${pkg.name} v${pkg.version} (${pkg.repository.url})`,

    `Copyright ${new Date().getFullYear()} ${pkg.author.name}`,

    `Licensed under ${pkg.license} */\n`
];

/** O cabeçalho dos arquivos de distribuição do projeto. */
export const fileHeader = headerBuilder.join(" | ");