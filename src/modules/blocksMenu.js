import menuItems from "./menuItems.js";
import createBlocks from "./createBlocks.js";

let isOpen = false;
let activeIndex = -1;

const createPopupElement = () => {
  const popup = document.createElement('div');
  popup.classList.add('popup');

  const header = document.createElement('div');
  header.classList.add('popup__header');
  header.innerHTML = `
    <h4>Add blocks</h4>
    <p class="subtitle">Keep typing to filter, or escape to exit</p>
  `;

  const list = document.createElement('div');
  list.classList.add('popup__list');
  list.setAttribute('role', 'listitem');

  menuItems.forEach(option => {
    const block = createBlocks(option);
    list.appendChild(block); 
  });

  popup.appendChild(header);
  popup.appendChild(list);

  return popup;
};

const attachPopupToInput = (currentInput, popup) => {
  currentInput.parentNode.appendChild(popup); // Append the popup to the parent of the input
  isOpen = true;
};

const createMenuBlock = (currentInput) => {
  if (isOpen) return;

  const popupElement = createPopupElement();
  attachPopupToInput(currentInput, popupElement);
};

const removeMenuBlock = () => {
  const popup = document.querySelector(".popup");
  if (popup) {
    popup.remove();
    isOpen = false;
  }
};

const handleKeyEvents = (e) => {
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
};

const handleDocumentClick = (e) => {
  if (e.target.closest(".popup")) return;
  removeMenuBlock();
};

document.addEventListener("keydown", handleKeyEvents);
document.addEventListener("click", handleDocumentClick);

export { createMenuBlock, removeMenuBlock };
