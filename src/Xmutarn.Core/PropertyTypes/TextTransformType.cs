namespace KempDec.Xmutarn.Core.PropertyTypes;

/// <summary>
/// Representa os valores possíveis para a propriedade CSS <c>text-transform</c>.
/// Define como o texto deve ser transformado em termos de capitalização ou forma.
/// </summary>
public enum TextTransformType
{
    /// <summary>
    /// Não aplica qualquer transformação ao texto.
    /// </summary>
    None,

    /// <summary>
    /// Converte a primeira letra de cada palavra para maiúscula.
    /// </summary>
    Capitalize,

    /// <summary>
    /// Converte todo o texto para letras maiúsculas.
    /// </summary>
    Uppercase,

    /// <summary>
    /// Converte todo o texto para letras minúsculas.
    /// </summary>
    Lowercase,

    /// <summary>
    /// Converte caracteres para sua versão de largura total (full-width),
    /// utilizada principalmente em sistemas de escrita CJK.
    /// </summary>
    FullWidth,

    /// <summary>
    /// Converte caracteres Kana para sua forma de largura total.
    /// </summary>
    FullSizeKana
}
