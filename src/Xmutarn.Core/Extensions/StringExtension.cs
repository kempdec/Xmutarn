using System.Text;

namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Classe com métodos extensivos para <see cref="string"/>.
/// </summary>
public static class StringExtension
{
    /// <summary>
    /// Retorna a cadeia de caracteres especificada com o padrão de nomenclatura Camel Case ou Pascal Case em uma
    /// cadeia de caracteres com o padrão de nomenclatura Kebab Case equivalente.
    /// </summary>
    /// <param name="str">A cadeia de caracteres.</param>
    /// <returns>A cadeia de caracteres especificada com o padrão de nomenclatura Camel Case ou Pascal Case em uma
    /// cadeia de caracteres com o padrão de nomenclatura Kebab Case equivalente.</returns>
    public static string ToKebabCase(this string str)
    {
        var builder = new StringBuilder();

        foreach (char letter in str)
        {
            if (builder.Length > 0 && char.IsUpper(letter))
            {
                builder.Append('-');
            }

            builder.Append(char.ToLower(letter));
        }

        return builder.ToString();
    }
}
