import {
  Dialog,
  Overlay,
  Toolbar
} from "./components";

export {
  Dialog,
  Overlay,
  Toolbar
};

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
  Toolbar.initFromHtmlAttribute("x-toolbar");
});
