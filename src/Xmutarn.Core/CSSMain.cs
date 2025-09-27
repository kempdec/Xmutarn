namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um CSS principal.
/// </summary>
/// <remarks>A única diferente entre <see cref="CSSMain"/> e <see cref="CSS"/> é que ele contém o método
/// <see cref="OnInitialized"/> que pode ser chamado ao final do construtor para executar uma lógica
/// personalizada após a inicialização do CSS.</remarks>
public class CSSMain : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSMain"/>.
    /// </summary>
    /// <inheritdoc/>
    public CSSMain(bool isMinified = false) : base(isMinified)
    {
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSMain"/>.
    /// </summary>
    /// <inheritdoc/>
    public CSSMain(IEnumerable<CSSSelector> selectors, bool isMinified = false) : base(selectors, isMinified)
    {
    }

    /// <summary>
    /// Obtém o nome do arquivo CSS.
    /// </summary>
    public virtual string FileName
    {
        get
        {
            string name = GetType().Name.ToLower();

            if (name.EndsWith("css"))
            {
                name = name[..^3];
            }

            return IsMinified ? $"{name}.min.css" : $"{name}.css";
        }
    }

    /// <summary>
    /// Executa uma lógica personalizada após a inicialização do CSS.
    /// </summary>
    public virtual void OnInitialized()
    {
    }

    /// <summary>
    /// Escreve o valor CSS equivalente da instância em um arquivo.
    /// </summary>
    /// <param name="path">O caminho onde o arquivo será criado.</param>
    public virtual void WriteToFile(string path)
    {
        string filePath = Path.Combine(path, FileName);

        using var writer = new StreamWriter(Path.GetFullPath(filePath));

        writer.WriteLine(this);
    }
}
