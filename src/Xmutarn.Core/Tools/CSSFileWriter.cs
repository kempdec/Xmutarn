using KempDec.Xmutarn.Core.Helpers;

namespace KempDec.Xmutarn.Core.Tools;

/// <summary>
/// Classe com métodos estáticos para escrever CSS em arquivos.
/// </summary>
public static class CSSFileWriter
{
    /// <summary>
    /// Escreve o valor CSS equivalente de <typeparamref name="T"/> em um arquivo.
    /// </summary>
    /// <remarks><typeparamref name="T"/> deve ter um construtor com o parâmetro <c>isMinified</c>.</remarks>
    /// <typeparam name="T">O tipo do CSS principal a ser escrito no arquivo.</typeparam>
    /// <param name="path">O caminho onde o arquivo será criado.</param>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    /// <param name="solutionAsRootPath">Um sinalizador indicando se o caminho raiz é a pasta da solução.</param>
    /// <exception cref="InvalidOperationException"></exception>
    public static void WriteToFile<T>(string path, bool isMinified = false, bool solutionAsRootPath = false)
        where T : CSSMain
    {
        T css = Activator.CreateInstance(typeof(T), args: [isMinified]) as T
            ?? throw new MissingMethodException($"Não foi possível criar uma instância de {nameof(T)}.");

        WriteToFile(css, path, solutionAsRootPath);
    }

    /// <summary>
    /// Escreve o valor CSS equivalente em um arquivo.
    /// </summary>
    /// <param name="css">O CSS principal a ser escrito no arquivo.</param>
    /// <param name="path">O caminho onde o arquivo será criado.</param>
    /// <param name="solutionAsRootPath">Um sinalizador indicando se o caminho raiz é a pasta da solução.</param>
    public static void WriteToFile(CSSMain css, string path, bool solutionAsRootPath = false)
    {
        if (solutionAsRootPath)
        {
            string solutionPath = PathHelper.GetSolutionRootPath();

            path = Path.Combine(solutionPath, path);
        }

        css.WriteToFile(path);
    }

    /// <summary>
    /// Escreve o valor CSS equivalente de <typeparamref name="T"/> em dois arquivos: um minificado e outro não
    /// minificado.
    /// </summary>
    /// <remarks><typeparamref name="T"/> deve ter um construtor com o parâmetro <c>isMinified</c>.</remarks>
    /// <typeparam name="T">O tipo do CSS principal a ser escrito nos arquivos.</typeparam>
    /// <param name="path">O caminho onde os arquivos serão criados.</param>
    /// <param name="solutionAsRootPath">Um sinalizador indicando se o caminho raiz é a pasta da solução.</param>
    /// <exception cref="InvalidOperationException"></exception>
    public static void WriteToFiles<T>(string path, bool solutionAsRootPath = false) where T : CSSMain
    {
        WriteToFile<T>(path, isMinified: false, solutionAsRootPath);
        WriteToFile<T>(path, isMinified: true, solutionAsRootPath);
    }
}
