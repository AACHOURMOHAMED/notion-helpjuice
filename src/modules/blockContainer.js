import { createMenuBlock, removeMenuBlock } from "./blocksMenu.js";
import addInput from "./addInput.js";
import selectBlock from "./selectBlock.js";
import filterBlocksMenu from "./filterBlocksMenu.js";
import createBlockItem from "./createBlockItem.js";

const blockContainer = (input = document.getElementById("1")) => {
  // If the first character is /, show the popup, else remove it
  input.addEventListener("input", () => {
    if (input.textContent[0] === "/") {
      createMenuBlock(input);
      selectBlock(input);
      // filter options
      filterBlocksMenu(input.textContent);
    } else {
      removeMenuBlock();
    }
  });

  input.addEventListener("keydown", (e) => {
    /* If the user presses 'Enter':
        - Prevent the default behavior of the Enter key
        - Get the input text content
        - If the first character is / and the second character is 1, create a <h1> tag
        - If the first character is / and the second character is 2, create a <h2> tag
        - If the input is empty, remove the placeholder
        - Create a new input and handle it
    */
    if (e.key === "Enter") {
      e.preventDefault();
      const text = input.textContent;

      if (text[0] === "/" && text[1] === "1") createBlockItem(input, "h1");
      if (text[0] === "/" && text[1] === "2") createBlockItem(input, "h2");
      if (text === "") input.removeAttribute("placeholder");

      const newInput = addInput(input, input.id);
      blockContainer(newInput);
    }

    /* If the user presses 'Backspace':
        - If the input is empty and the id of the input is not 1, remove it and focus on the previous input
        - Add space to the previous input to make sure the cursor is at the end of the content
    */
    if (
      e.key === "Backspace" &&
      input.textContent.length === 0 &&
      input.id !== "1"
    ) {
      const previousInput = input.previousElementSibling;
      input.remove();
      previousInput.setAttribute("placeholder", "Type '/' for blocks");

      // Add space to the previous input to make sure the cursor is at the end of the content
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
  });
};

export default blockContainer;
