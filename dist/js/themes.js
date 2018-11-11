const toggleThemeButtons = document.querySelectorAll("[x-action]");
toggleThemeButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // troca o nome do tema principal pelo que está no atributo "x-action-arg" do botão.
        document.querySelector("html").setAttribute("x-main-theme", button.getAttribute("x-action-arg"));
    });
});

//# sourceMappingURL=themes.js.map
