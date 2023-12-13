
let handSize = 4;
let playerScore = 0;
let enemyScore = 0;
let baseCards = []
let enemyDeck, playerDeck;
let cardsOnTable = [];

createCards();
initGameState();

/**
 * Initialize game state,
 * create base classes & reset relevant variables
 */
function initGameState() {
    console.log("Initializing game state")
    initializeDecks();
    initializeHands();
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

/**
 * Each player draws a starting hand
 */
function initializeHands() {
    console.log("Initializing hands")
    for(let i = 0; i < handSize; i++){
        drawCard("player");
        drawCard("enemy");
    }
    enableClick();
}

function newTurn() {
    drawCard("player")
    drawCard("enemy")
    enableClick();
}


function enableClick() {
    let hand = document.getElementById("player-hand");

    for(let i = 0; i < hand.children.length; i++){
        console.log(hand.children[i]);
        hand.children[i].setAttribute("onclick", "playCard(this)");
    }
}

function disableClick() {
    let hand = document.getElementById("player-hand");
    for(let i = 0; i < hand.children.length; i++){
        hand.children[i].setAttribute("onclick", "")
    }
}

/**
 * Draw card into the selected hand
 */
function drawCard(whose) {
    let hand, deck, card;
    //Check who's drawing the card
    if(whose == 'player'){
        hand = document.getElementById("player-hand");
        deck = playerDeck;
    } else {
        hand = document.getElementById("enemy-hand");
        deck = enemyDeck;
    }
    //Check if deck still has cards
    if(deck.length > 0){
        //Create new card element in hand div
        card = `<div class="card" points="${deck[0].points}"><p>${deck[0].points}</p></div>`;
        hand.insertAdjacentHTML("beforeend", card);
        deck.shift();
        console.log(deck.length + " cards left in deck;")
    }
    else{
        console.log("Deck is empty")
    }
    //Hide deck if empty
    if(deck.length == 0){
        if(whose == 'player'){
            document.getElementById("player-deck").style.visibility = "hidden";
        } else {
            document.getElementById("enemy-deck").style.visibility = "hidden";
        }
    }
}

/**
 * Play the selected card to the board
 */
function playCard(card) {
    let randomSpin = Math.floor(Math.random()* 50)
    card.style.position = "absolute";
    card.style.transform = `translate(-40px, -175px) rotate(${randomSpin}deg)`
    cardsOnTable.push(card)
    disableClick()
    enemyPlay()
}

function enemyPlay() {
    let hand =  document.getElementById("enemy-hand")
    //Choose a random card from hand
    console.log("enemy choosing card")
    let randomCard = Math.floor(Math.random() * hand.children.length)
    let chosenCard = hand.children[randomCard];
    console.log(chosenCard)
    //Play card to board
    chosenCard.style.position = "absolute";
    chosenCard.style.transform = `translate(40px, 175px)`
    cardsOnTable.push(chosenCard)
    document.getElementById("test-button").classList.add("flashing");
    document.getElementById("test-button").setAttribute("onclick", "compareCards()");
}

/**
 * Compare player card to enemy card to determine winner of turn
 */
function compareCards () {
    console.log("Comparing cards...")
    //Compare value of cards on table
    let playerCardValue = parseInt(cardsOnTable[0].getAttribute("points"));
    console.log(playerCardValue);
    let enemyCardValue = parseInt(cardsOnTable[1].getAttribute("points"));
    console.log(enemyCardValue);
    //Sum values together to create score for winner
    let sum = playerCardValue + enemyCardValue;
    if(playerCardValue < enemyCardValue){
        console.log("You lose the round. Opp gets " + sum)
        enemyScore += sum;
    } else if (enemyCardValue < playerCardValue) {
        console.log("You win the round and get " + sum)
        playerScore += sum;
    } else {
        console.log("It's a draw!")
    }
    document.getElementById("test-button").classList.remove("flashing");
    document.getElementById("test-button").setAttribute("onclick", "endOfRound()");
}

function endOfRound() {
    console.log("Player: " + playerScore + ", Enemy: " + enemyScore);
    //Update score counters
    document.getElementById("player-score").firstChild.textContent = playerScore;
    document.getElementById("enemy-score").firstChild.textContent = enemyScore;
    clearTable();
    console.log("Cards in hand: " + document.getElementById("player-hand").childNodes.length)
    if(document.getElementById("player-hand").childNodes.length > 0){
        newTurn();
    } else {
        gameOver();
    }
}

function clearTable() {
    for(card in cardsOnTable){
        cardsOnTable[card].remove();
    }
    cardsOnTable = [];
}

function gameOver() {
    console.log("Game over")
    if(playerScore > enemyScore){
        alert("You win! Congratulations!")
    } else if(enemyScore > playerScore) {
        alert("You lose. Better luck next time...")
    }
}