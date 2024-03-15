using System.Diagnostics.CodeAnalysis;

namespace KempDec.Xmutarn.Core.Functions;

/// <summary>
/// Representa a função "var" do CSS.
/// </summary>
public record class CSSVar : CSSFunction
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSVar"/>.
    /// </summary>
    /// <param name="name">O nome da variável CSS.</param>
    /// <param name="defaultValue">O valor padrão, em caso da variável CSS não ser encontrada.</param>
    [SetsRequiredMembers]
    public CSSVar(string name, object? defaultValue = null) : base(name: "var")
    {
        string value = $"--{name}";

        if (defaultValue is not null)
        {
            value += ",";

            if (!IsMinified)
            {
                value += " ";
            }

            value += defaultValue?.ToString();
        }

        Value = value;
    }

    /// <summary>
    /// Retorna o valor CSS equivalente.
    /// </summary>
    /// <returns>O valor CSS equivalente.</returns>
    public override string ToString() => ToCSS();
}
