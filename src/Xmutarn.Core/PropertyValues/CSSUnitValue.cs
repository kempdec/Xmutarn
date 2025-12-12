using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using KempDec.Xmutarn.Core.PropertyTypes;

namespace KempDec.Xmutarn.Core.PropertyValues;

/// <summary>
/// Representa um valor CSS que pode possuir uma unidade (por exemplo, <c>16px</c>, <c>1.5rem</c>)
/// ou ser um valor sem unidade (por exemplo, <c>inherit</c>, <c>initial</c>, <c>medium</c>).
/// </summary>
public abstract record class CSSUnitValue : CSSPropertyValue
{
    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSUnitValue"/> representando um valor sem unidade,
    /// como <c>inherit</c>, <c>initial</c>, <c>unset</c> ou valores nomeados como <c>medium</c>.
    /// </summary>
    /// <param name="value">O valor textual CSS.</param>
    [SetsRequiredMembers]
    protected CSSUnitValue(string value) : base(value)
    {
        AllowedUnits = new HashSet<UnitValueType>(Enum.GetValues<UnitValueType>());
        HasUnit = false;
    }

    /// <summary>
    /// Inicializa uma nova instância de <see cref="CSSUnitValue"/> representando um valor com unidade,
    /// como <c>16px</c>, <c>1.25rem</c> ou <c>0.8em</c>.
    /// </summary>
    /// <param name="numericValue">O valor numérico.</param>
    /// <param name="unit">A unidade CSS associada ao valor.</param>
    /// <param name="allowedUnits">A coleção de unidades permitidas para o tipo derivado. Se não especificada, todas as unidades serão consideradas válidas.</param>
    /// <exception cref="ArgumentException">Lançada quando a unidade especificada não é permitida.</exception>
    [SetsRequiredMembers]
    protected CSSUnitValue(double numericValue, UnitValueType unit, IEnumerable<UnitValueType>? allowedUnits = null)
        : base()
    {
        AllowedUnits = new HashSet<UnitValueType>(allowedUnits ?? Enum.GetValues<UnitValueType>());

        if (!AllowedUnits.Contains(unit))
        {
            throw new ArgumentException($"Unidade '{unit}' não é permitida para este tipo CSS.", nameof(unit));
        }

        NumericValue = numericValue;
        Unit = unit;
        HasUnit = true;

        Value = BuildValue();
    }

    /// <summary>
    /// Obtém o conjunto de unidades permitidas para o tipo derivado.
    /// </summary>
    protected IReadOnlySet<UnitValueType> AllowedUnits { get; }

    /// <summary>
    /// Obtém um valor que indica se este valor CSS utiliza uma unidade.
    /// </summary>
    public bool HasUnit { get; protected set; }

    /// <summary>
    /// Obtém o valor numérico associado a este valor CSS, caso uma unidade seja utilizada.
    /// </summary>
    public double NumericValue { get; protected set; }

    /// <summary>
    /// Obtém a unidade CSS associada a este valor, caso exista.
    /// </summary>
    public UnitValueType? Unit { get; protected set; }

    /// <summary>
    /// Constrói a representação textual do valor CSS quando uma unidade é utilizada.
    /// </summary>
    /// <returns>Uma cadeia de caracteres que representa o valor numérico com sua unidade correspondente.</returns>
    protected virtual string BuildValue() =>
        $"{NumericValue.ToString("0.###", CultureInfo.GetCultureInfo("en-US"))}{UnitToString(Unit!.Value)}";

    /// <summary>
    /// Converte o valor de <see cref="UnitValueType"/> na representação textual da unidade CSS equivalente.
    /// </summary>
    /// <param name="type">O tipo de unidade CSS.</param>
    /// <returns>A representação textual da unidade CSS.</returns>
    /// <exception cref="NotImplementedException">Lançada quando a unidade especificada não possui mapeamento definido.</exception>
    protected static string UnitToString(UnitValueType type) => type switch
    {
        UnitValueType.Px => "px",
        UnitValueType.Rem => "rem",
        UnitValueType.Em => "em",
        UnitValueType.Percent => "%",
        UnitValueType.Vh => "vh",
        UnitValueType.Vw => "vw",
        UnitValueType.VMin => "vmin",
        UnitValueType.VMax => "vmax",
        UnitValueType.Fr => "fr",
        _ => throw new NotImplementedException()
    };

    /// <inheritdoc/>
    public override string ToCSS()
    {
        FinalValue = HasUnit ? BuildValue() : Value;

        return base.ToCSS();
    }

    /// <inheritdoc/>
    public override string ToString() => ToCSS();
}
