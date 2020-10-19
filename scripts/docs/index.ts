import { Theme } from "./models";

const theme = new Theme("main");
theme.update(theme.current);

const changeMainThemeBtn = document.getElementById("i-change-main-theme");
changeMainThemeBtn.addEventListener("click", () => {

  theme.update(theme.current == "light" ? "dark" : "light");
});
