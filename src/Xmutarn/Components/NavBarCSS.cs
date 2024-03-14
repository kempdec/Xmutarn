namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de barra de navegação do Xmutarn.
/// </summary>
/// <inheritdoc/>
public class NavBarCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <inheritdoc/>
    protected override void ImportOldCSS() => throw new NotImplementedException();

    /// <inheritdoc/>
    protected override void ImportOldMinCSS() => throw new NotImplementedException();
}
