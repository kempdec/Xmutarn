import Dialog from "./Dialog";
import Overlay from "./Overlay";

export {
  Dialog,
  Overlay
};

document.addEventListener("DOMContentLoaded", () => {

  Dialog.initFromHtmlAttribute("x-dialog");
});
