namespace KempDec.Xmutarn.Core.Builders;

/// <summary>
/// Responsável pela construção do arquivo CSS.
/// </summary>
public static class Builder
{
    /// <summary>
    /// Escreve o CSS para o caminho do arquivo especificado.
    /// </summary>
    /// <param name="css">O CSS a ser escrito no arquivo.</param>
    /// <param name="filePath">O caminho do arquivo a ser escrito.</param>
    public static void WriteCSSTo(ICSS css, string filePath)
    {
        using var writer = new StreamWriter(filePath);

        writer.WriteLine(css);
    }
}
