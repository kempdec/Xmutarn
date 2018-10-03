const toggleThemeButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll<HTMLButtonElement>("[x-action]");

toggleThemeButtons.forEach((button: HTMLButtonElement): void => {
  button.addEventListener("click", (): void => {
    // troca o nome do tema principal pelo que está no atributo "x-action-arg" do botão.
    document.querySelector("html").setAttribute("x-main-theme", button.getAttribute("x-action-arg"));
  });
});
