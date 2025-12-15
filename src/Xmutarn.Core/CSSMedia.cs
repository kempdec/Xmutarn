using System.Text;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Representa uma regra CSS <c>@media</c>.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSMedia"/>.</remarks>
/// <param name="query">A media query.</param>
/// <param name="isMinified">Indica se o CSS deve ser minificado.</param>
public class CSSMedia(string query, bool isMinified = false) : CSS(isMinified)
{
    /// <summary>
    /// Obtém a media query associada a esta regra <c>@media</c>.
    /// </summary>
    public string Query { get; } = query;

    /// <inheritdoc/>
    public override string ToCSS()
    {
        string innerCss = base.ToCSS();

        if (string.IsNullOrWhiteSpace(innerCss))
        {
            return string.Empty;
        }

        var builder = new StringBuilder();

        builder.Append($"@media {Query}");

        if (IsMinified)
        {
            builder.Append($"{{{innerCss}}}");
        }
        else
        {
            builder.AppendLine(" {");
            builder.AppendLine(Indent(innerCss));
        }

        builder.Append('}');

        return builder.ToString();
    }

    /// <summary>
    /// Indenta o CSS interno para uso dentro de <c>@media</c>.
    /// </summary>
    private static string Indent(string css)
    {
        var lines = css.Split(Environment.NewLine);
        var builder = new StringBuilder();

        foreach (string line in lines)
        {
            builder.Append("    ");
            builder.AppendLine(line);
        }

        return builder.ToString().TrimEnd();
    }
}
