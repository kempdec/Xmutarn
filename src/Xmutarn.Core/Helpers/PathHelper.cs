namespace KempDec.Xmutarn.Core.Helpers;

/// <summary>
/// Classe com métodos auxiliares para manipulação de caminhos.
/// </summary>
internal static class PathHelper
{
    /// <summary>
    /// Obtém o caminho absoluto da raiz da solução.
    /// </summary>
    /// <returns>O caminho absoluto da raiz da solução.</returns>
    /// <exception cref="InvalidOperationException"></exception>
    public static string GetSolutionRootPath()
    {
        var dir = new DirectoryInfo(AppContext.BaseDirectory);

        while (dir is not null && dir.GetFiles("*.sln").Length is 0)
        {
            dir = dir.Parent!;
        }

        return dir?.FullName ?? throw new InvalidOperationException("Não foi possível localizar a raiz da solução.");
    }
}
