import menuItems from "./menuItems.js";
import createBlocks from "./createBlocks.js";

let isOpen = false;
let activeIndex = -1;

/**
 * Creates a menu block based on the provided input.
 * @param {HTMLElement} currentInput - The input element to attach the menu to.
 */
const createMenuBlock = (currentInput) => {
  if (isOpen) return;

  const popupHtml = `
    <div class="popup">
      <div class="popup__header">
        <h4>Add blocks</h4>
        <p class="subtitle">Keep typing to filter, or escape to exit</p>
      </div>
      <div class="popup__list" role="listitem">
        ${menuItems.map((option) => createBlocks(option)).join("")}
      </div>
    </div>`;

  currentInput.insertAdjacentHTML("afterend", popupHtml);
  isOpen = true;
};

/**
 * Removes the menu block from the DOM.
 */
const removeMenuBlock = () => {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
    isOpen = false;
  }
};

document.addEventListener("keydown", (e) => {
  const popOptions = [...document.querySelectorAll(".popup__item")];
  if (!isOpen) return;

  if (e.key === "ArrowDown" && activeIndex < popOptions.length - 1) {
    activeIndex += 1;
    popOptions[activeIndex].focus();
  }

  if (e.key === "ArrowUp" && activeIndex > 0) {
    activeIndex -= 1;
    popOptions[activeIndex].focus();
  }

  if (e.key === "Escape" || (e.key === " " && e.repeat)) removeMenuBlock();
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".popup")) return;
  removeMenuBlock();
});

export { createMenuBlock, removeMenuBlock };