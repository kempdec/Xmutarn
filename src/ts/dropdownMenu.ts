/// <reference path="dropdownMenuOrigin.ts" />

/**
 * Responsável por gerenciar um menu suspenso.
 */
class DropdownMenu {
  /** A classe CSS do dropdown. */
  private static readonly _dropdownClass: string = "dropdown";

  /** A classe CSS de ativação do dropdown. */
  private static readonly _dropdownActiveClass: string = "dropdown_active";

  /** A classe CSS de abertura do menu. */
  private static readonly _menuOpenClass: string = "menu_open";

  /** Obtém ou define o menu suspenso. */
  public menu: HTMLElement;

  /**
   * Inicializa uma nova instância de DropdownMenu.
   *
   * @param {HTMLElement} element O elemento responsável por abrir o menu suspenso.
   * @param {DropdownMenuOrigin} origin A origem da transformação do menu suspenso. O padrão é
   * "DropdownMenuOrigin.TopRight".
   */
  constructor(public element: HTMLElement, origin: DropdownMenuOrigin = DropdownMenuOrigin.TopRight) {
    if (!element) {
      throw new Error("O primeiro argumento deve ser fornecido.");
    }

    this.menu =
      element.nextElementSibling.classList.contains("menu") ? <HTMLElement>element.nextElementSibling : undefined;

    if (!this.menu) {
      throw new Error("Nenhum elemento imediatamente próximo, com a classe 'menu', foi encontrado.");
    }

    // adiciona a classe que irá definir a origem da abetura do menu suspenso, se o parâmetro "origin" não for nulo.
    if (origin != null) {
      this.menu.classList.add(`menu_origin-${origin.toLowerCase().replace("-partial", "")}`);
    }

    this.menu.addEventListener("click", e => e.stopPropagation());

    // sinalizador indicando se a origem foi definida.
    let definedOrigin: boolean = false;

    element.addEventListener("click", e => {
      this.toggle();

      if (definedOrigin === false && origin != null) {
        this.setOrigin(origin);

        definedOrigin = true;
      }

      e.stopPropagation();
      e.preventDefault();
    });

    document.addEventListener("click", () => this.close());
  }

  /**
   * Define a origem da transformação do menu suspenso.
   *
   * @param {DropdownMenuOrigin} origin A origem da transformação do menu suspenso. O padrão é
   * "DropdownMenuOrigin.Topright".
   *
   * @return {HTMLElement} O elemento responsável por abrir o menu suspenso.
   */
  public setOrigin(origin: DropdownMenuOrigin = DropdownMenuOrigin.TopRight): HTMLElement {
    let top: number,
      left: number;

    // top.
    if (origin === DropdownMenuOrigin.TopRight ||
      origin === DropdownMenuOrigin.TopLeft ||
      origin === DropdownMenuOrigin.TopStart ||
      origin === DropdownMenuOrigin.TopEnd) {
      top = this.element.offsetTop + this.element.offsetHeight;
    }

    // top partial.
    if (origin === DropdownMenuOrigin.TopRightPartial ||
      origin === DropdownMenuOrigin.TopLeftPartial ||
      origin === DropdownMenuOrigin.TopStartPartial ||
      origin === DropdownMenuOrigin.TopEndPartial) {
      top = this.element.offsetTop;
    }

    // bottom.
    if (origin === DropdownMenuOrigin.BottomRight ||
      origin === DropdownMenuOrigin.BottomLeft ||
      origin === DropdownMenuOrigin.BottomStart ||
      origin === DropdownMenuOrigin.BottomEnd) {
      top = this.element.offsetTop - this.menu.offsetHeight;
    }

    // bottom partial.
    if (origin === DropdownMenuOrigin.BottomRightPartial ||
      origin === DropdownMenuOrigin.BottomLeftPartial ||
      origin === DropdownMenuOrigin.BottomStartPartial ||
      origin === DropdownMenuOrigin.BottomEndPartial) {
      top = this.element.offsetTop - this.menu.offsetHeight + this.element.offsetHeight;
    }

    // right, right partial.
    if (origin === DropdownMenuOrigin.TopRight ||
      origin === DropdownMenuOrigin.TopRightPartial ||
      origin === DropdownMenuOrigin.BottomRight ||
      origin === DropdownMenuOrigin.BottomRightPartial) {
      left = this.element.offsetLeft + (this.element.offsetWidth - this.menu.offsetWidth);
    }

    // left, left partial.
    if (origin === DropdownMenuOrigin.TopLeft ||
      origin === DropdownMenuOrigin.TopLeftPartial ||
      origin === DropdownMenuOrigin.BottomLeft ||
      origin === DropdownMenuOrigin.BottomLeftPartial) {
      left = this.element.offsetLeft;
    }

    // start, start partial.
    if (origin === DropdownMenuOrigin.TopStart ||
      origin === DropdownMenuOrigin.TopStartPartial ||
      origin === DropdownMenuOrigin.BottomStart ||
      origin === DropdownMenuOrigin.BottomStartPartial) {
      left = this.element.offsetLeft - this.menu.offsetWidth;
    }

    // end, end partial.
    if (origin === DropdownMenuOrigin.TopEnd ||
      origin === DropdownMenuOrigin.TopEndPartial ||
      origin === DropdownMenuOrigin.BottomEnd ||
      origin === DropdownMenuOrigin.BottomEndPartial) {
      left = this.element.offsetLeft + this.element.offsetHeight;
    }

    // define o topo e a esquerda do menu suspenso.
    this.menu.style.top = top + "px";
    this.menu.style.left = left + "px";

    return this.element;
  }

  /**
   * Abre o menu suspenso.
   *
   * @param {DropdownMenuOrigin} origin A origem da transformação do menu suspenso. O padrão é
   * "DropdownMenuOrigin.TopRight".
   *
   * @return {HTMLElement} O elemento responsável por abrir o menu dropdown.
   */
  public open(origin?: DropdownMenuOrigin): HTMLElement {
    if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
      this.element.classList.add(DropdownMenu._dropdownActiveClass);
    }

    if (origin != null) {
      this.setOrigin(origin);
    }

    this.menu.classList.add(DropdownMenu._menuOpenClass);

    return this.element;
  }

  /**
   * Fecha o menu suspenso.
   *
   * @return {HTMLElement} O elemento responsável por abrir o menu suspenso.
   */
  public close(): HTMLElement {
    if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
      this.element.classList.remove(DropdownMenu._dropdownActiveClass);
    }

    this.menu.classList.remove(DropdownMenu._menuOpenClass);

    return this.element;
  }

  /**
   * Alterna entre abrir e fechar o menu suspenso.
   *
   * @param {DropdownMenuOrigin} origin A origem da transformação do menu suspenso. O padrão é
   * "DropdownMenuOrigin.TopRight".
   */
  public toggle(origin?: DropdownMenuOrigin): HTMLElement {
    if (this.element.classList.contains(DropdownMenu._dropdownClass)) {
      this.element.classList.toggle(DropdownMenu._dropdownActiveClass);
    }

    if (origin != null) {
      this.setOrigin(origin);
    }

    this.menu.classList.toggle(DropdownMenu._menuOpenClass);

    return this.element;
  }
}

// inicializa uma nova instância de DropdownMenu, a partir do atributo HTML "x-dropdown-menu".
document.querySelectorAll("[x-role='dropdown-menu']").forEach((element: HTMLElement): void => {
  // a origem da transformação do menu suspenso.
  let origin: DropdownMenuOrigin = <DropdownMenuOrigin>element.getAttribute("x-origin");

  if (origin) {
    new DropdownMenu(element, origin);
  } else {
    new DropdownMenu(element);
  }
});
