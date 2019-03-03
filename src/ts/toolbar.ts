/**
 * Responsável por gerenciar uma barra de ferramentas.
 */
class Toolbar {
  /** Classe CSS de omissão da barra de ferramentas. */
  private static readonly _toolbarHideClass: string = "toolbar_hide";

  /**
   * Inicializa uma nova instância de Toolbar.
   *
   * @param {HTMLElement} element O elemento da barra de ferramentas.
   */
  constructor(element: HTMLElement) {
    if (!element) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    let lastScrollTop: number = 0;

    window.addEventListener("scroll", () => {
      const scrollTop: number = document.documentElement.scrollTop;

      if (scrollTop > element.clientHeight && scrollTop > lastScrollTop) {
        element.classList.add(Toolbar._toolbarHideClass);
      } else {
        element.classList.remove(Toolbar._toolbarHideClass);
      }

      lastScrollTop = scrollTop;
    });
  }
}

// inicializa uma nova instância de Toolbar, a partir do atributo HTML "x-role".
document.querySelectorAll("[x-role='toolbar']").forEach((element: HTMLElement): void => {
  new Toolbar(element);
});
