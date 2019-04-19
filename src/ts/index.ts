import {
  Dialog,
  Input,
  NavigationDrawer,
  Overlay,
  Toast,
  Toolbar
} from "./components";

export {
  Dialog,
  Input,
  NavigationDrawer,
  Overlay,
  Toast,
  Toolbar
};

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
  Input.initFromHtmlAttribute("x-input", "x-input-label");
  NavigationDrawer.initFromHtmlAttribute("x-nav-drawer");
  Toolbar.initFromHtmlAttribute("x-toolbar");
});
