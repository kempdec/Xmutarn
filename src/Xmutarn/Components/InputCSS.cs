namespace KempDec.Xmutarn.Components;

/// <summary>
/// Representa o CSS do componente de entrada do Xmutarn.
/// </summary>
/// <remarks>Inicializa uma nova instância de <see cref="InputCSS"/>.</remarks>
/// <inheritdoc/>
public class InputCSS(bool isMinified) : TempCSS(isMinified)
{
    /// <summary>
    /// Importa o CSS minificado.
    /// </summary>
    protected override void ImportMinCSS() => Import(""".input{position:relative;font-weight:500;color:var(--theme-secondary, rgba(0, 0, 0, 0.54));border-color:var(--theme-secondary, rgba(0, 0, 0, 0.54))}.input_color-alert{color:#F44336;border-color:#F44336}.input_color-success{color:#4CAF50;border-color:#4CAF50}.input_color-warning{color:#FF9800;border-color:#FF9800}.input--field{padding:1em 0.3125em 0.75em 0;width:100%;font-size:inherit;font-weight:inherit;line-height:1;color:inherit;background-color:transparent}.input--field:focus{color:var(--theme-primary, rgba(0, 0, 0, 0.87));border-color:var(--theme-500, #9C27B0);outline:0}.input--field:focus:not(.input--field_outlined){border-color:var(--theme-500, #9C27B0)}.input--field:focus~.input--label{color:var(--theme-500, #9C27B0)}.input--field:not(.input--field_outlined){padding-left:0.3125em;border:none;border-bottom:0.0625rem solid}.input--field:not(.input--field_outlined)~.input--label{left:0.3125em}.input--field_outlined{padding-left:0.625em;border:1px solid;border-color:inherit;border-radius:0.3125em}.input--field_outlined~.input--label{left:0.625em}.input--label{position:absolute;top:1em;transition:all .3s linear;pointer-events:none}.input--label_active,.input--field:focus~.input--label{transform:translate(-15%, -1.125em) scale(0.7)}.input--description{margin:0;margin-top:0.3125rem;font-size:0.75rem;color:inherit}""");

    /// <summary>
    /// Importa o CSS.
    /// </summary>
    protected override void ImportCSS() => Import("""
        .input {
          position: relative;
          font-weight: 500;
          color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
          border-color: var(--theme-secondary, rgba(0, 0, 0, 0.54));
        }
        .input_color-alert {
          color: #F44336;
          border-color: #F44336;
        }
        .input_color-success {
          color: #4CAF50;
          border-color: #4CAF50;
        }
        .input_color-warning {
          color: #FF9800;
          border-color: #FF9800;
        }
        .input--field {
          padding: 1em 0.3125em 0.75em 0;
          width: 100%;
          font-size: inherit;
          font-weight: inherit;
          line-height: 1;
          color: inherit;
          background-color: transparent;
        }
        .input--field:focus {
          color: var(--theme-primary, rgba(0, 0, 0, 0.87));
          border-color: var(--theme-500, #9C27B0);
          outline: 0;
        }
        .input--field:focus:not(.input--field_outlined) {
          border-color: var(--theme-500, #9C27B0);
        }
        .input--field:focus ~ .input--label {
          color: var(--theme-500, #9C27B0);
        }
        .input--field:not(.input--field_outlined) {
          padding-left: 0.3125em;
          border: none;
          border-bottom: 0.0625rem solid;
        }
        .input--field:not(.input--field_outlined) ~ .input--label {
          left: 0.3125em;
        }
        .input--field_outlined {
          padding-left: 0.625em;
          border: 1px solid;
          border-color: inherit;
          border-radius: 0.3125em;
        }
        .input--field_outlined ~ .input--label {
          left: 0.625em;
        }
        .input--label {
          position: absolute;
          top: 1em;
          transition: all 0.3s linear;
          pointer-events: none;
        }
        .input--label_active, .input--field:focus ~ .input--label {
          transform: translate(-15%, -1.125em) scale(0.7);
        }
        .input--description {
          margin: 0;
          margin-top: 0.3125rem;
          font-size: 0.75rem;
          color: inherit;
        }
        """);
}
