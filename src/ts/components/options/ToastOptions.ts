import { ToastColor } from "../models";

/** Fornece abstração para as opções de um toast. */
export default interface ToastOptions {

  /** Um sinalizador indicando se o toast deve ser aberto automaticamente. */
  autoOpen?: boolean;

  /** A cor do toast. */
  color?: string|ToastColor;

  /** O delay em milissegundos para abertura do toast. */
  delay?: number;

  /** As classes de ícone do toast. */
  iconClasses?: string;

  /** Um sinalizador indicando se o toast deve ser removido ao fechar. */
  removeWhenClose?: boolean;

  /**
   * O timeout em milissegundos para fechamento do toast. Caso o valor fornecido seja "0", o toast não será fechado.
   * Se 'removeWhenClose' for especificado como 'true', o toast será removido após seu fechamento.
   */
  timeout?: number;

  /** O título do toast. */
  title?: string;
}
