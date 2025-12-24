namespace KempDec.Xmutarn.Core.PropertyTypes;

/// <summary>
/// Representa os valores disponíveis para a propriedade CSS <c>font-weight</c>.
/// </summary>
public enum FontWeightType
{
    /// <summary>
    /// Peso normal da fonte (equivalente a 400).
    /// </summary>
    Normal,

    /// <summary>
    /// Peso negrito (equivalente a 700).
    /// </summary>
    Bold,

    /// <summary>
    /// Peso mais forte que o elemento pai.
    /// </summary>
    Bolder,

    /// <summary>
    /// Peso mais leve que o elemento pai.
    /// </summary>
    Lighter
}
