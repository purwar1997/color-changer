const button = document.getElementsByTagName('button')[0];

const getRandomValue = () => Math.floor(Math.random() * 256);
const changeBGColor = () => `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;

button.addEventListener('click', () => {
  document.body.style.backgroundColor = changeBGColor();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    document.body.style.backgroundColor = changeBGColor();
  }
});
