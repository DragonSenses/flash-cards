const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const current = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// The key to use to store the data of the app in localStorage
const key = 'cards';

// Keep track of current card's index
let currentActiveCard = 0;

// Store DOM Elements that represent cards
const cards = [];

// Store actual card data
const cardsData = getCardsData();

/* Hardcoded seed data
[
  {
    question: 'Interpolate',
    answer: `1. Insert (something of a different nature) into something else.
             2. (Mathematics) insert (an intermediate value or term) into a 
             series by estimating or calculating it from surrounding known values.`
  },
  {
    question: `Example`,
    answer: `An Example Answer`
  },
  {
    question: 'Chocolate or Vanilla?',
    answer: '❤️'
  }
];

*/

/**
 * Reaches into local storage and get cards data to load into the DOM. 
 */
function getCardsData(){
  // localStorage only stores strings so must be parsed to extact data
  const cards = JSON.parse(localStorage.getItem(key));
  return (cards === null) ? [] : cards;
}

/**
 * Adds the card to local 
 */

/**
 * Adds the card to localStorage. Since only one <key, value> pair stores the 
 * cards data, we update the entire value (entire cards array) with the new 
 * card.
 * @param {*} cards the array of cards
 */
function setCardData(cards){
  // An array will be stringified before storing it in localStorage
  localStorage.setItem(key, JSON.stringify(cards));

  // Now need to reflect the new data in the DOM
  // Hack | Reload the page so new data reflects in the DOM
  window.location.reload();
}
  
/**
 * Shows the current number of cards
 */
function updateCurrentText(){
  // Update the current card element's innerText with number of cards
  current.innerText = `${currentActiveCard + 1}/${cards.length}`;
}

/**
 * Create a DOM card.
 * @param {string} data 
 * @param {number} index 
 */
function createCard(data, index) {
  const card = document.createElement('div');
  // Give each card the class of 'card'
  card.classList.add('card');

  // Take the first card and also give it an active class
  if (index === 0) {
    card.classList.add('active');
  }

  // Create the card template string
  card.innerHTML = `
  <div class="inner-card">
    <div class="inner-card-front">
      <p>${data.question}</p>
    </div>
    <div class="inner-card-back">
      <p>${data.answer}</p>
    </div>
  </div>
  `;

  // Add event listener that flips the card
  card.addEventListener('click', () => card.classList.toggle('show-answer'));

  // Add to DOM cards array
  cards.push(card);

  // Add the card to the actual DOM in cardsContainer
  cardsContainer.appendChild(card);

  updateCurrentText();
}

/**
 * Loops through the data and creates a DOM card for each one.
 */
function createCards() {
  cardsData.forEach((data, index) => createCard(data, index));
}

createCards();

/* Event Listeners */

// Next Button
nextBtn.addEventListener('click', () => {
  if(cards.length == 0) {
    return;
  }

  // Hide the card to the left (in CSS: 'card left' class)
  // className sets (overrides) the class, classList just appends the class
  cards[currentActiveCard].className = 'card left';

  // Increment the active index, use array circularly
  currentActiveCard = (currentActiveCard + 1) % cards.length;

  // Make it the new active card
  cards[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Previous Button
prevBtn.addEventListener('click', () => {
  if(cards.length == 0) {
    return;
  }

  cards[currentActiveCard].className = 'card right';

  currentActiveCard = (currentActiveCard - 1 + cards.length) % cards.length;

  cards[currentActiveCard].className = 'card active';

  updateCurrentText();
});

// Show Add Container
showBtn.addEventListener('click',
  () => addContainer.classList.add('show'));

// Close (Hide) Add Container
hideBtn.addEventListener('click', 
  () => addContainer.classList.remove('show'));

// Add New Card
addCardBtn.addEventListener('click', () => {
  const question = questionInput.value;
  const answer = answerInput.value;

  if(question.trim() && answer.trim()){
    // Create a new card object with question and answer inputs
    const newCard = { question, answer };

    createCard(newCard);

    // Clear inputs
    questionInput.value = '';
    answerInput.value = '';

    // Hide the add container overlay after successful card creation
    addContainer.classList.remove('show');

    // Store data in localStorage
    cardsData.push(newCard);
    setCardData(cardsData);
  }
});

// Clear Cards 
clearBtn.addEventListener('click', () => {
  // Remove the set of cards data in localStorage
  localStorage.removeItem(key);

  // Clear the cards in the DOM 
  cardsContainer.innerHTML = '';

  // Reload the page
  window.location.reload();
});
