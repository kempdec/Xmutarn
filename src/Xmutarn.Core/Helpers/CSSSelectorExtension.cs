using KempDec.Xmutarn.Core;

/// <summary>
/// Classe com métodos extensivos para <see cref="CSSSelector"/>.
/// </summary>
public static class CSSSelectorExtension
{
#pragma warning disable IDE1006 // Estilos de Nomenclatura

    public static void add(this CSSSelector cssSelector) => XmutarnCore.css.Add(cssSelector);

#pragma warning restore IDE1006 // Estilos de Nomenclatura
}
