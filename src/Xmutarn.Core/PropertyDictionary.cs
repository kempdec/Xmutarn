namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma coleção de propriedades CSS.
/// </summary>
public sealed class PropertyDictionary : Dictionary<string, string>
{
    /// <inheritdoc/>
    public override string ToString()
    {
        IEnumerable<string> properties = this.Select(e => $"{e.Key}: {e.Value};");

        return string.Join($"{Environment.NewLine}  ", properties);
    }
}
