/** Fornece abstração para as opções de um input. */
export default interface InputOptions {

  /** Rótulo do input. */
  label?: string;

  /** Sinalizador indicando se a cor adicionada ao elemento do input deve ser removida ao acionar o evento "focus". */
  removeColorOnFocus?: boolean;
}
