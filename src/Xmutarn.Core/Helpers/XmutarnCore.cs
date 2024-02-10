using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Core.Builders;

/// <summary>
/// Classe com métodos e propriedades para auxiliar na criação de CSS.
/// </summary>
public static class XmutarnCore
{
    /// <summary>
    /// Escreve o CSS em <see cref="css"/> para o caminho do arquivo especificado.
    /// </summary>
    /// <param name="filePath">O caminho do arquivo a ser escrito.</param>
    public static void BuildTo(string filePath) => Builder.WriteCSSTo(css, filePath);

#pragma warning disable IDE1006 // Estilos de Nomenclatura

    /// <summary>
    /// Obtém ou define o CSS.
    /// </summary>
    public static CSS css { get; set; } = [];

#pragma warning restore IDE1006 // Estilos de Nomenclatura
}
