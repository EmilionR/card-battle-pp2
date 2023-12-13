
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
    //Create cards with values from 1 to 9
    for(let i = 1; i <= 9; i++){
        let baseCard = {
            points: i,
        }
        //Put card into base card array
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
    //Create two clones of the base card deck
    enemyDeck = [...baseCards];
    playerDeck = [...baseCards];
    //Shuffle each deck
    shuffleDeck(playerDeck);
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
    let randomCard;
    let tempArr = [...deck];
    //Loop through the selected deck
    for(let i = 0; i < deck.length; i++){
        //Select random card from temporary array
        randomCard = Math.floor(Math.random() * tempArr.length)
        //Assign the random card to the current index of the deck
        deck[i] = tempArr[randomCard];
        //Remove the randomized index from the temporary array before next loop cycle
        tempArr.splice(randomCard, 1);
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
    
    if(playerDeck.length > 0){
        card = `<div class="card" onclick="playCard(this)"><p>${playerDeck[0].points}</p></div>`;
        hand.insertAdjacentHTML("beforeend", card);
        playerDeck.shift();
        console.log(playerDeck.length + " cards left in deck;")
    }
    else{
        console.log("Deck is empty")
    }
    
}

/**
 * Play the selected card to the board
 */
function playCard(card) {
    let randomSpin = Math.floor(Math.random()* 50)
    card.style.position = "absolute";
    card.style.transform = `translate(-40px, -175px) rotate(${randomSpin}deg)`
}