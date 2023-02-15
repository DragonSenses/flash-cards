const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const current = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const question = document.getElementById('question');
const answer = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card's index
let currentActiveCard = 0;

// Store DOM Elements that represent cards
const cards = [];

// Store actual card data
const cardsData = [
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

nextBtn.addEventListener('click', () => {
  // Hide the card to the left (in CSS: 'card left' class)
  // className sets (overrides) the class, classList just appends the class
  cards[currentActiveCard].className = 'card left';

  console.log(`current: ${currentActiveCard}`);

  // Increment the active index, use array circularly
  currentActiveCard = (currentActiveCard + 1) % cards.length;

  console.log(`current now: ${currentActiveCard}`);


  // Make it the new active card
  cards[currentActiveCard].className = 'card active';

  // Also update currentText
  updateCurrentText();
});

prevBtn.addEventListener('click', () => {
  // className sets (overrides) the class, classList just appends the class
  cards[currentActiveCard].className = 'card right';

  console.log(`current: ${currentActiveCard}`);

  // Decrement the currentActive card, use array circularly
  currentActiveCard = (currentActiveCard - 1 + cards.length) % cards.length;

  console.log(`current now: ${currentActiveCard}`);

  // Make it the new active card
  cards[currentActiveCard].className = 'card active';

  // Also update currentText
  updateCurrentText();
});