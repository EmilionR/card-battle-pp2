
let handSize = 4;
let playerScore = 0;
let enemyScore = 0;

/**
 * Initialize game state,
 * create base classes & reset relevant variables
 */
function initGameState() {

}

function createCards() {

}

function initializeDecks() {

}

function shuffleDeck(deck) {

}

function initializeHands() {
    
}

function startRound() {

}

function enableClick() {

}

function disableClick() {
    
}

/**
 * Draw card into the selected hand
 */
function drawCard() {
    hand = document.getElementById("player-hand");
    card = `<div class="card" onclick="playCard(this)"><p>1</p></div>`;
    hand.insertAdjacentHTML("beforeend", card);
}

/**
 * Play the selected card to the board
 */
function playCard(card) {
    let randomSpin = Math.floor(Math.random()* 50)
    card.style.position = "absolute";
    card.style.transform = `translate(-40px, -175px) rotate(${randomSpin}deg)`
}