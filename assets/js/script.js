
let handSize = 4;
let playerScore = 0;
let enemyScore = 0;
let baseCards = []
let enemyDeck, playerDeck;

createCards();
initGameState();

/**
 * Initialize game state,
 * create base classes & reset relevant variables
 */
function initGameState() {
    console.log("Initializing game state")
    initializeDecks();
}

/**
 * Create base cards 1-9, from which all decks are made
 */
function createCards() {
    for(let i = 1; i <= 9; i++){
        let baseCard = {
            points: i,
        }
        console.log("Creating card, value: " + baseCard.points)
        baseCards.push(baseCard)
    }
    console.log(`Base cards created.
    Number of cards: ${baseCards.length}`)
}

/**
 * Create starting decks from base cards
 */
function initializeDecks() {
    enemyDeck = [...baseCards];
    playerDeck = [...baseCards];
    console.log("Attempt to shuffle player");
    shuffleDeck(playerDeck);
    console.log("Attempt to shuffle enemy");
    shuffleDeck(enemyDeck);
    console.log("Enemy deck:");
    for(let i = 0; i < enemyDeck.length; i++){
        console.log(enemyDeck[i]);
    }
    console.log("Player deck:")
    for(let i = 0; i < playerDeck.length; i++){
        console.log(playerDeck[i]);
    }
}

/**
 * Shuffle deck to place array indexes in random order
 */
function shuffleDeck(deck) {
    console.log("shuffling...");
    let tempArr = [...deck];
    for(let i = 0; i < tempArr.length; i++){
        let randomCard = Math.floor(Math.random() * tempArr.length);
        deck[i] = tempArr[randomCard];
        tempArr.splice(i, 1)
        console.log(tempArr)
    }
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