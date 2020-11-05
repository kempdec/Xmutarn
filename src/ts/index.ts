import { Dialog, InputComponent, NavigationDrawer, Toolbar } from "./components";

export * from "./components";
export * from "./controllers";
export * from "./models";

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
  InputComponent.initFromHtml("x-input", "x-input-label");
  NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
  Toolbar.initFromHtmlAttribute("x-toolbar");
});
