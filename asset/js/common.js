void (function (D) {
  "use strict";

  const controlMenuBtn = D.querySelector("input#header_menu_btn");
  const isPCWidth = matchMedia("(min-width: 1280px)");

  if (controlMenuBtn instanceof HTMLInputElement) {
    controlMenuBtn.addEventListener("change", function () {
      D.body.style.overflow = this.checked ? "hidden" : "";
    });

    isPCWidth.addEventListener("change", function () {
      this.matches && controlMenuBtn.checked && controlMenuBtn.click();
    });
  }
})(document);
