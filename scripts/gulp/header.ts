import pkg from "../../package.json";

/** O cabeçalho dos arquivos de distribuição. */
export const fileHeader = [

  `/*! ${pkg.name} v${pkg.version} (${pkg.repository.url})`,

  `Copyright ${new Date().getFullYear()} ${pkg.author.name}`,

  `Licensed under ${pkg.license} */\n`

].join(" | ");
