/// <reference path="../../../ts/index.d.ts" />

namespace Xmutarn.Docs.Theme {

  const mainTheme = new X.MainThemeController();
  const switchMainThemeBtn = document.getElementById("i-switch-main-theme");

  switchMainThemeBtn.addEventListener("click", () => {

    const newMainTheme = mainTheme.current == X.MainTheme.light ? X.MainTheme.dark : X.MainTheme.light;

    mainTheme.update(newMainTheme);
  });
}
