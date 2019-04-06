import Dialog from "./Dialog";
import Overlay from "./Overlay";
import Toolbar from "./Toolbar";

export {
  Dialog,
  Overlay,
  Toolbar
};

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
  Toolbar.initFromHtmlAttribute("x-toolbar");
});
