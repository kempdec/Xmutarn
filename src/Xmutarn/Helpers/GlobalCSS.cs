using KempDec.Xmutarn.Core;

namespace KempDec.Xmutarn.Helpers;

/// <summary>
/// Representa o CSS global.
/// </summary>
public class GlobalCSS : CSS
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="GlobalCSS"/>.
    /// </summary>
    /// <inheritdoc/>
    public GlobalCSS(bool isMinified) : base(isMinified)
    {
        if (IsMinified)
        {
            ImportMinCSS();
        }
        else
        {
            ImportCSS();
        }
    }

    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    private void ImportMinCSS() => Import("""html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}::-moz-selection{color:#fff;background-color:var(--theme-A400, #F50057)}::selection{color:#fff;background-color:var(--theme-A400, #F50057)}a{color:var(--theme-500, #9C27B0);text-decoration:none}a:hover,a:active{color:var(--theme-300, #BA68C8)}figure{margin:0}input::-ms-clear,input[type=password]::-ms-reveal{display:none}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    private void ImportCSS() => Import("""
        html {
          box-sizing: border-box;
        }
        
        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }
        
        ::-moz-selection {
          color: white;
          background-color: var(--theme-A400, #F50057);
        }
        
        ::selection {
          color: white;
          background-color: var(--theme-A400, #F50057);
        }
        
        a {
          color: var(--theme-500, #9C27B0);
          text-decoration: none;
        }
        a:hover, a:active {
          color: var(--theme-300, #BA68C8);
        }
        
        figure {
          margin: 0;
        }
        
        input::-ms-clear,
        input[type=password]::-ms-reveal {
          display: none;
        }
        """);
}
