namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa um ponto de interrupção CSS baseado em largura mínima.
/// </summary>
public record class CSSBreakpoint(string Name, CSSUnitValue MinWidth)
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSBreakpoint"/>.
    /// </summary>
    /// <param name="breakpoint">O ponto de interrupção CSS.</param>
    public static implicit operator string(CSSBreakpoint breakpoint) => breakpoint.ToString();

    /// <summary>
    /// Retorna a representação CSS do ponto interrupção CSS baseado em largura mínima.
    /// </summary>
    /// <returns>A representação CSS do ponto de interrupção.</returns>
    public override string ToString() => $"(min-width: {MinWidth})";
}
