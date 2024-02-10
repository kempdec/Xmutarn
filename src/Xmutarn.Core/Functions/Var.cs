//namespace KempDec.Xmutarn.Core.Functions;

///// <summary>
///// Representa a função "var" do CSS.
///// </summary>
///// <remarks>Inicializa uma nova instância de <see cref="Var"/>.</remarks>
///// <param name="name">O nome da variável CSS.</param>
///// <param name="defaultValue">O valor padrão da variável CSS.</param>
//public readonly struct Var(string name, IPropertyValue defaultValue)
//{
//    /// <summary>
//    /// Inicializa uma nova instância de <see cref="string"/>.
//    /// </summary>
//    /// <param name="var">A função "var" do CSS.</param>
//    public static implicit operator string(Var var) => var.ToString();

//    /// <summary>
//    /// Obtém o nome da variável CSS.
//    /// </summary>
//    public string Name { get; } = name;

//    /// <summary>
//    /// Obtém o valor padrão da variável CSS.
//    /// </summary>
//    public IPropertyValue DefaultValue { get; } = defaultValue;

//    /// <inheritdoc/>
//    public override string ToString() => $"var({Name}, {DefaultValue})";
//}

// TODO:
