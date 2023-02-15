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

// Keep track of current card
let currentActiveCard = 0;

// Store DOM Elements that represent cards
const cardsDOM = [];

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
    answer: 'Chocolate'
  }
];

/**
 * Shows the current number of cards
 */
function updateCurrentText(){
  // Update the current card element's innerText with number of cards
  current.innerText = `${currentActiveCard + 1}/${cardsDOM.length}`;
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
  cardsDOM.push(card);

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

/* <div class="card active show-answer">
      <div class="inner-card">
        <div class="inner-card-front">
          <p>Interpolate</p>
        </div>
        <div class="inner-card-back">
          <p> 1. Insert (something of a different nature) into something else.
            <br>
            2. (Mathematics) insert (an intermediate value or term) into a 
            series by estimating or calculating it from surrounding known values.
          </p>
        </div>
      </div>
    </div> 
*/