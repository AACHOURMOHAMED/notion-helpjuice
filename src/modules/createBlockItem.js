import { removeMenuBlock } from "./blocksMenu.js";

const createBlockItem = (input, tagType) => {
  input.className = "input";
  input.classList.add(tagType);
  input.setAttribute("contenteditable", true);
  input.setAttribute("spellcheck", true);

  const textContent = input.textContent.slice(2).trim();
  input.textContent = textContent;

  if (tagType === "p") {
    input.setAttribute("placeholder", "Paragraph");
  } else if (tagType === "ul") {
    input.setAttribute("placeholder", "List Item");
    input.innerHTML = "&#8226; ";
  } else if (tagType === "img") {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          input.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
      }
    });

    input.appendChild(fileInput);
  } else if (tagType === "blockquote") {
    input.setAttribute("placeholder", "Quoted text");
  } else {
    input.setAttribute("placeholder", `Heading ${tagType}`);
  }

  input.parentNode.insertBefore(input, input.nextSibling);
  input.focus();
  removeMenuBlock();
};

export default createBlockItem;
