import { removeMenuBlock } from './blocksMenu.js';

const createBlockItem = (input, tagType) => {
  input.className = 'input';
  input.classList.add(tagType);
  input.textContent = input.textContent.slice(2).trim();
  tagType === 'p'
    ? input.setAttribute('placeholder', 'Paragraph')
    : input.setAttribute('placeholder', `Heading ${tagType}`);
  input.focus();
  removeMenuBlock();
};

export default createBlockItem;
