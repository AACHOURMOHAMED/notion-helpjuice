import { createMenuBlock, removeMenuBlock } from "./blocksMenu.js";
import addInput from "./addInput.js";
import selectBlock from "./selectBlock.js";
import filterBlocksMenu from "./filterBlocksMenu.js";
import createBlockItem from "./createBlockItem.js";

// Function to handle input events
const handleInput = (input) => {
  // If the input starts with '/', perform block-related actions
  if (input.textContent[0] === "/") {
    createMenuBlock(input);
    selectBlock(input);
    filterBlocksMenu(input.textContent);
  } else {
    removeMenuBlock();
  }
};

// Function to handle keydown events
const handleKeyDown = (e, input) => {
  const text = input.textContent;

  // If the user presses 'Enter':
  if (e.key === "Enter") {
    e.preventDefault();

    // If the input starts with '/1' or '/2', create block items
    if (text[0] === "/" && text[1] === "1") createBlockItem(input, "h1");
    if (text[0] === "/" && text[1] === "2") createBlockItem(input, "h2");

    // If the input is empty, remove the placeholder
    if (text === "") input.removeAttribute("placeholder");

    // Add a new input and attach event listeners to it
    const newInput = addInput(input, input.id);
    blockContainer(newInput);
  }

  // If the user presses 'Backspace' and the input is empty, remove it
  if (
    e.key === "Backspace" &&
    input.textContent.length === 0 &&
    input.id !== "1"
  ) {
    const previousInput = input.previousElementSibling;
    input.remove();
    previousInput.setAttribute("placeholder", "Type '/' for blocks");

    // Add space to the previous input to ensure the cursor is at the end
    previousInput.textContent += " ";
    previousInput.focus();
    const range = document.createRange();
    const sel = window.getSelection();
    range.setStart(
      previousInput.childNodes[0] || previousInput,
      previousInput.textContent.length
    );
    sel.removeAllRanges();
    sel.addRange(range);
  }
};

// Main function for block container
const blockContainer = (input = document.getElementById("1")) => {
  // Event listener for input changes
  input.addEventListener("input", () => handleInput(input));

  // Event listener for keydown events
  input.addEventListener("keydown", (e) => handleKeyDown(e, input));
};

export default blockContainer;
