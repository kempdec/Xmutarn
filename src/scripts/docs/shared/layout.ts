/// <reference path="../../../ts/index.d.ts" />

namespace Xmutarn.Docs.Shared.Layout {

  const mainTheme = new X.MainThemeController();
  const currentMainTheme = Cookies.get(mainTheme.attrName);
  const changeMainThemeBtn = document.getElementById("i-change-main-theme");

  mainTheme.update(currentMainTheme);

  changeMainThemeBtn.addEventListener("click", () => {

    const newMainTheme = mainTheme.current == X.MainTheme.light ? X.MainTheme.dark : X.MainTheme.light;

    mainTheme.update(newMainTheme);

    Cookies.set(mainTheme.attrName, mainTheme.current, { expires: 60 });
  });
}
