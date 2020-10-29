/// <reference path="../../src/ts/index.d.ts" />

const theme = new X.MainThemeController();
const currentTheme = Cookies.get(theme.attrName);

theme.update(currentTheme);

const changeMainThemeBtn = document.getElementById("i-change-main-theme");

changeMainThemeBtn.addEventListener("click", () => {

  theme.update(theme.current == X.MainTheme.light ? X.MainTheme.dark : X.MainTheme.light);

  Cookies.set(theme.attrName, theme.current, { expires: 60 });
});
