namespace KempDec.Xmutarn.Core.PropertyTypes;

/// <summary>
/// Representa os tipos de unidades CSS suportados.
/// </summary>
public enum UnitValueType
{
    /// <summary>
    /// Unidade de comprimento em pixels (<c>px</c>).
    /// </summary>
    Px,

    /// <summary>
    /// Unidade de comprimento relativa ao tamanho da fonte raiz (<c>rem</c>).
    /// </summary>
    Rem,

    /// <summary>
    /// Unidade de comprimento relativa ao tamanho da fonte do elemento (<c>em</c>).
    /// </summary>
    Em,

    /// <summary>
    /// Unidade percentual (<c>%</c>), geralmente relativa a outro valor de referência.
    /// </summary>
    Percent,

    /// <summary>
    /// Unidade relativa à altura da área visível da janela (<c>vh</c>).
    /// </summary>
    Vh,

    /// <summary>
    /// Unidade relativa à largura da área visível da janela (<c>vw</c>).
    /// </summary>
    Vw,

    /// <summary>
    /// Unidade relativa ao menor valor entre a largura e a altura da área visível da janela (<c>vmin</c>).
    /// </summary>
    VMin,

    /// <summary>
    /// Unidade relativa ao maior valor entre a largura e a altura da área visível da janela (<c>vmax</c>).
    /// </summary>
    VMax,

    /// <summary>
    /// Unidade fracional utilizada em layouts de grade (<c>fr</c>).
    /// </summary>
    Fr
}
