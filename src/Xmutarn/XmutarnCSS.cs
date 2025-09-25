using KempDec.Xmutarn.Core;
using KempDec.Xmutarn.Helpers;
using KempDec.Xmutarn.Themes;

namespace KempDec.Xmutarn;

/// <summary>
/// Representa o CSS do Xmutarn.
/// </summary>
public class XmutarnCSS : CSSMain
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="XmutarnCSS"/>.
    /// </summary>
    /// <param name="isMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
    public XmutarnCSS(bool isMinified = false) : base(isMinified)
    {
        // Cores e temas.
        Colors = [];
        Themes = [];

        Import(Colors);
        Import(Themes);

        // Normalização e globalização.
        Import(new NormalizeCSS(IsMinified));
        Import(new GlobalCSS(IsMinified));

        // Componentes e utilitários.
        Import(new ComponentsCSS(IsMinified));
        Import(new UtilsCSS(IsMinified));

        OnInitialized();
    }

    #region Cores e temas.

    /// <summary>
    /// Obtém o CSS das cores.
    /// </summary>
    public ColorsCSS Colors { get; }

    /// <summary>
    /// Obtém o CSS dos temas.
    /// </summary>
    public ThemeCSS Themes { get; }

    #endregion

    /// <inheritdoc/>
    protected override void OnPrepare() => AddHeader();

    #region Antigo CSS.

    /// <summary>
    /// Adiciona o cabeçalho do CSS antigo do Xmutarn.
    /// </summary>
    private void AddHeader()
    {
        Import(new CSS() + $"""
            /*! Xmutarn v0.32.0-beta.1 (https://xmutarn.kempdec.com) | Copyright 2016-{DateTime.Now.Year} KempDec Brasil Ltda. | Licensed under MIT */
            """);

        if (IsMinified)
        {
            Import(new CSS() + Environment.NewLine);
        }
    }

    #endregion
}
