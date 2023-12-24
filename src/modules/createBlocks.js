import textIcon from '../images/text.svg';

const createBlocks = (option) => {
  const { title, description } = option;

  const button = document.createElement('button');
  button.classList.add('popup__item');
  button.dataset.type = option.type;

  const img = document.createElement('img');
  img.src = textIcon;
  img.alt = 'heading icon';
  img.width = '30';

  const contentDiv = document.createElement('div');
  
  const heading = document.createElement('h4');
  heading.textContent = title;

  const para = document.createElement('p');
  para.textContent = description;

  contentDiv.appendChild(heading);
  contentDiv.appendChild(para);

  button.appendChild(img);
  button.appendChild(contentDiv);

  return button;
};

export default createBlocks;

