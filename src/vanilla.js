const getRandomTarotCards = async () => {
  try {
    const fetchedTarotCards = await fetch("https://tarotapi.dev/api/v1/cards/random?n=10");
    return fetchedTarotCards.json();
  } catch (e) {
    console.error('api falsch');
  } finally {
    console.log('finally');
  }
}

const getAllElements = () => {
  const myButton = document.querySelector('[data-js-selector="cardToggle"]');
  const cardImg = document.querySelector('[data-js-selector="cardImg"]');
  return {myButton, cardImg};
}

const cards = ["/pages_demo/Temperance.jpg", "/pages_demo/TheLovers.jpg", "/pages_demo/TheEmpress.jpg"];
const generateRandomCardIndex = () => Math.floor(Math.random() * 3);
const generateRandomCard = () => cards[generateRandomCardIndex()];

const createImgElement = () => {
  const myImgElement = document.createElement('img');
  myImgElement.dataset.jsSelector = 'cardImg';
  document.body.appendChild(myImgElement);
}

const buttonClickHandler = (/* event */) => {
  const {cardImg} = getAllElements();
  if (!cardImg) createImgElement();
  getAllElements().cardImg.setAttribute('src', generateRandomCard());
};

const init = async () => {
  const {myButton, cardImg} = getAllElements();
  myButton.addEventListener('click', () => buttonClickHandler(cardImg));
  console.log(await getRandomTarotCards());
}

init();