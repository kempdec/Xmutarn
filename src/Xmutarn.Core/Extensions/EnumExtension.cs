namespace KempDec.Xmutarn.Core.Extensions;

/// <summary>
/// Classe com métodos extensivos para tipos do tipo <see cref="Enum"/>.
/// </summary>
public static class EnumExtension
{
    /// <summary>
    /// Retorna o valor textual do enum especificado com o padrão de nomenclatura Camel Case ou Pascal Case
    /// em uma cadeia de caracteres com o padrão de nomenclatura Kebab Case equivalente.
    /// </summary>
    /// <param name="value">O valor do enum.</param>
    /// <returns>O valor textual do enum especificado convertido de Camel Case ou Pascal Case para o padrão
    /// equivalente em Kebab Case.</returns>
    public static string ToKebabCase(this Enum value)
    {
        string text = value.ToString();

        return text.ToKebabCase();
    }
}
