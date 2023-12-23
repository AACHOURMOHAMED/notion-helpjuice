import createBlockItem from './createBlockItem.js';

const selectBlock = (input) => {
  const options = document.querySelectorAll('.popup__item');
  options.forEach((option) => {
    option.addEventListener('click', () => {
      const tagType = option.getAttribute('data-type');
      createBlockItem(input, tagType);
    });
  });
};

export default selectBlock;
