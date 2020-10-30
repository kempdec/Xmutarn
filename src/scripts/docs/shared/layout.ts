/// <reference path="../../../ts/index.d.ts" />

const mainTheme = new X.MainThemeController();
const currentMainTheme = Cookies.get(mainTheme.attrName);

mainTheme.update(currentMainTheme);

const changeMainThemeBtn = document.getElementById("i-change-main-theme");

changeMainThemeBtn.addEventListener("click", () => {

  const newMainTheme = mainTheme.current == X.MainTheme.light ? X.MainTheme.dark : X.MainTheme.light;

  mainTheme.update(newMainTheme);

  Cookies.set(mainTheme.attrName, mainTheme.current, { expires: 60 });
});
