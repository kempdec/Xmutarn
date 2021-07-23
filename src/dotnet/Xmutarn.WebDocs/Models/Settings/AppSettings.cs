namespace Xmutarn.WebDocs.Models.Settings
{
    /// <summary>
    /// Associação recursiva das configurações do aplicativo.
    /// </summary>
    public class AppSettings
    {
        /// <summary>
        /// Obtém ou inicializa o endereço do repositório no GitHub do aplicativo.
        /// </summary>
        public string GithubAddress { get; set; }
    }
}
