using KempDec.Xmutarn.Core.Extensions;
using KempDec.Xmutarn.Core.PropertyValues;
using System.Diagnostics.CodeAnalysis;
using System.Reflection;

namespace KempDec.Xmutarn.Core;

/// <summary>
/// Define propriedades CSS pré-construídas.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="CSSProperties"/>.</remarks>
/// <param name="IsMinified">Um sinalizador indicando se o valor equivalente em CSS deve ser minificado.</param>
public record CSSProperties(bool IsMinified = false) : ICSSConvertible
{
    /// <summary>
    /// Obtém ou define um sinalizador indicando se o valor equivalente em CSS deve ser minificado.
    /// </summary>
    public bool IsMinified { get; set; } = IsMinified;

    /// <summary>
    /// Obtém ou define outras propriedades CSS que não estão pré-construídas.
    /// </summary>
    public CSSPropertyDictionary Others { get; set; } = [];

    /// <inheritdoc/>
    [DynamicallyAccessedMembers(DynamicallyAccessedMemberTypes.PublicProperties)]
    public virtual string ToCSS()
    {
        PropertyInfo[] excludeProperties = typeof(ICSSConvertible).GetProperties();
        PropertyInfo[] properties = typeof(CSSProperties).GetProperties();

        var cssProperties = new CSSPropertyDictionary(IsMinified);

        foreach (PropertyInfo property in properties)
        {
            if (excludeProperties.Any(e => e.Name == property.Name))
            {
                continue;
            }

            if (property.Name == nameof(Others))
            {
                continue;
            }

            object? value = property.GetValue(obj: this);

            if (value is null)
            {
                continue;
            }

            cssProperties.Add(property.Name.ToKebabCase(), value);
        }

        foreach (KeyValuePair<string, object> otherPropery in Others)
        {
            if (!cssProperties.ContainsKey(otherPropery.Key))
            {
                cssProperties.Add(otherPropery.Key, otherPropery.Value);
            }
        }

        return cssProperties.ToCSS();
    }

    /// <summary>
    /// Retorna o valor CSS equivalente da instância.
    /// </summary>
    /// <returns>O valor CSS equivalente da instância.</returns>
    public override string ToString() => ToCSS();

    #region Propriedades CSS.
#pragma warning disable IDE1006 // Estilos de Nomenclatura
#pragma warning disable CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente

    public string? alignContent { get; set; }
    public string? alignItems { get; set; }
    public string? alignSelf { get; set; }
    public string? animation { get; set; }
    public string? animationDelay { get; set; }
    public string? animationDirection { get; set; }
    public string? animationDuration { get; set; }
    public string? animationFillMode { get; set; }
    public string? animationIterationCount { get; set; }
    public string? animationName { get; set; }
    public string? animationPlayState { get; set; }
    public string? animationTimingFunction { get; set; }
    public string? backfaceVisibility { get; set; }
    public string? background { get; set; }
    public string? backgroundAttachment { get; set; }
    public string? backgroundBlendMode { get; set; }
    public string? backgroundClip { get; set; }
#pragma warning restore CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente

    /// <summary>
    /// Obtém ou define a cor de fundo de um elemento.
    /// </summary>
    public CSSColor? backgroundColor { get; set; }

#pragma warning disable CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente
    public string? backgroundImage { get; set; }
    public string? backgroundOrigin { get; set; }
    public string? backgroundPosition { get; set; }
    public string? backgroundRepeat { get; set; }
    public string? backgroundSize { get; set; }
    public string? border { get; set; }
    public string? borderBottom { get; set; }
    public string? borderBottomColor { get; set; }
    public string? borderBottomLeftRadius { get; set; }
    public string? borderBottomRightRadius { get; set; }
    public string? borderBottomStyle { get; set; }
    public string? borderBottomWidth { get; set; }
    public string? borderCollapse { get; set; }
    public string? borderColor { get; set; }
    public string? borderImage { get; set; }
    public string? borderImageOutset { get; set; }
    public string? borderImageRepeat { get; set; }
    public string? borderImageSlice { get; set; }
    public string? borderImageSource { get; set; }
    public string? borderImageWidth { get; set; }
    public string? borderLeft { get; set; }
    public string? borderLeftColor { get; set; }
    public string? borderLeftStyle { get; set; }
    public string? borderLeftWidth { get; set; }
    public string? borderRadius { get; set; }
    public string? borderRight { get; set; }
    public string? borderRightColor { get; set; }
    public string? borderRightStyle { get; set; }
    public string? borderRightWidth { get; set; }
    public string? borderSpacing { get; set; }
    public string? borderStyle { get; set; }
    public string? borderTop { get; set; }
    public string? borderTopColor { get; set; }
    public string? borderTopLeftRadius { get; set; }
    public string? borderTopRightRadius { get; set; }
    public string? borderTopStyle { get; set; }
    public string? borderTopWidth { get; set; }
    public string? borderWidth { get; set; }
    public string? bottom { get; set; }
    public string? boxShadow { get; set; }
    public string? boxSizing { get; set; }
    public string? captionSide { get; set; }
    public string? clear { get; set; }
    public string? clip { get; set; }
#pragma warning restore CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente

    /// <summary>
    /// Obtém ou define a cor do texto de um elemento.
    /// </summary>
    public CSSColor? color { get; set; }

#pragma warning disable CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente
    public string? columnCount { get; set; }
    public string? columnFill { get; set; }
    public string? columnGap { get; set; }
    public string? columnRule { get; set; }
    public string? columnRuleColor { get; set; }
    public string? columnRuleStyle { get; set; }
    public string? columnRuleWidth { get; set; }
    public string? columnSpan { get; set; }
    public string? columnWidth { get; set; }
    public string? columns { get; set; }
    public string? content { get; set; }
    public string? counterIncrement { get; set; }
    public string? counterReset { get; set; }
    public string? cursor { get; set; }
    public string? direction { get; set; }
    public string? display { get; set; }
    public string? emptyCells { get; set; }
    public string? filter { get; set; }
    public string? flex { get; set; }
    public string? flexBasis { get; set; }
    public string? flexDirection { get; set; }
    public string? flexFlow { get; set; }
    public string? flexGrow { get; set; }
    public string? flexShrink { get; set; }
    public string? flexWrap { get; set; }
    public string? @float { get; set; }
    public string? font { get; set; }
    public string? fontFamily { get; set; }
    public string? fontSize { get; set; }
    public string? fontStyle { get; set; }
    public string? fontVariant { get; set; }
    public string? fontWeight { get; set; }
    public string? height { get; set; }
    public string? justifyContent { get; set; }
    public string? keyframes { get; set; }
    public string? left { get; set; }
    public string? letterSpacing { get; set; }
    public string? lineHeight { get; set; }
    public string? listStyle { get; set; }
    public string? listStyleImage { get; set; }
    public string? listStylePosition { get; set; }
    public string? listStyleType { get; set; }
    public string? margin { get; set; }
    public string? marginBottom { get; set; }
    public string? marginLeft { get; set; }
    public string? marginRight { get; set; }
    public string? marginTop { get; set; }
    public string? maxHeight { get; set; }
    public string? maxWidth { get; set; }
    public string? minHeight { get; set; }
    public string? minWidth { get; set; }
    public string? opacity { get; set; }
    public string? order { get; set; }
    public string? outline { get; set; }
    public string? outlineColor { get; set; }
    public string? outlineOffset { get; set; }
    public string? outlineStyle { get; set; }
    public string? outlineWidth { get; set; }
    public string? overflow { get; set; }
    public string? overflowX { get; set; }
    public string? overflowY { get; set; }
    public string? padding { get; set; }
    public string? paddingBottom { get; set; }
    public string? paddingLeft { get; set; }
    public string? paddingRight { get; set; }
    public string? paddingTop { get; set; }
    public string? pageBreakAfter { get; set; }
    public string? pageBreakBefore { get; set; }
    public string? pageBreakInside { get; set; }
    public string? perspective { get; set; }
    public string? perspectiveOrigin { get; set; }
    public string? position { get; set; }
    public string? quotes { get; set; }
    public string? resize { get; set; }
    public string? right { get; set; }
    public string? tabSize { get; set; }
    public string? tableLayout { get; set; }
    public string? textAlign { get; set; }
    public string? textAlignLast { get; set; }
    public string? textCombineUpright { get; set; }
    public string? textDecoration { get; set; }
    public string? textDecorationColor { get; set; }
    public string? textDecorationLine { get; set; }
    public string? textDecorationStyle { get; set; }
    public string? textIndent { get; set; }
    public string? textJustify { get; set; }
    public string? textOverflow { get; set; }
    public string? textShadow { get; set; }
    public string? textTransform { get; set; }
    public string? top { get; set; }
    public string? transform { get; set; }
    public string? transformOrigin { get; set; }
    public string? transformStyle { get; set; }
    public string? transition { get; set; }
    public string? transitionDelay { get; set; }
    public string? transitionDuration { get; set; }
    public string? transitionProperty { get; set; }
    public string? transitionTimingFunction { get; set; }
    public string? unicodeBidi { get; set; }
    public string? userSelect { get; set; }
    public string? verticalAlign { get; set; }
    public string? visibility { get; set; }
    public string? whiteSpace { get; set; }
    public string? width { get; set; }
    public string? wordBreak { get; set; }
    public string? wordSpacing { get; set; }
    public string? wordWrap { get; set; }
    public string? zIndex { get; set; }

#pragma warning restore CS1591 // O comentário XML ausente não foi encontrado para o tipo ou membro visível publicamente
#pragma warning restore IDE1006 // Estilos de Nomenclatura
    #endregion
}
