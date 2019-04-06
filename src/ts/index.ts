import {
  Dialog,
  NavigationDrawer,
  Overlay,
  Toolbar
} from "./components";

export {
  Dialog,
  NavigationDrawer,
  Overlay,
  Toolbar
};

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
  NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
  Toolbar.initFromHtmlAttribute("x-toolbar");
});
