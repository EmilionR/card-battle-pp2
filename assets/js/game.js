
let handSize = 4;
let playerScore = 0;
let enemyScore = 0;
let baseCards = []
let enemyDeck, playerDeck;
let cardsOnTable = [];
let deckSize = localStorage.getItem("deckSize");
let enemyCards = localStorage.getItem("enemyCards");
let cardBack = localStorage.getItem('cardBack');
let wins = 0;
let losses = 0;
console.log(deckSize);

createCards();
initGameState();

/**
 * Initialize game state,
 * create base classes & reset relevant variables
 */
function initGameState() {
    playerScore = 0;
    enemyScore = 0;
    hideModal();
    document.getElementById("player-deck").style.visibility = "visible";
    document.getElementById("enemy-deck").style.visibility = "visible";
    console.log("Initializing game state");
    initializeDecks();
    newTurn();
}

/**
 * Create base cards 1-9, from which all decks are made
 */
function createCards() {
    //Create cards with values from 1 to 9
    for (let i = 1; i <= 9; i++) {
        let baseCard = {
            points: i
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
    //Check if double deck size is selected
    if (deckSize == "double") {
        //Duplicate all cards in deck
        enemyDeck = enemyDeck.concat(enemyDeck);
        playerDeck = playerDeck.concat(playerDeck);
    }
    //Shuffle each deck
    shuffleDeck(playerDeck);
    shuffleDeck(enemyDeck);
    console.log("Enemy deck:");
    for (let i = 0; i < enemyDeck.length; i++) {
        console.log(enemyDeck[i]);
    }
    console.log("Player deck:")
    for (let i = 0; i < playerDeck.length; i++) {
        console.log(playerDeck[i]);
    }
    applyCardback();
}

/* Apply selected cardback to cards facing away */
function applyCardback() {
    document.getElementById("enemy-deck").classList.add(cardBack);
    document.getElementById("player-deck").classList.add(cardBack);
    console.log(document.getElementById("enemy-deck").classList);
}

/**
 * Shuffle deck to place array indexes in random order
 */
function shuffleDeck(deck) {
    console.log("shuffling...");
    let randomCard;
    let tempArr = [...deck];
    //Loop through the selected deck
    for (let i = 0; i < deck.length; i++) {
        //Select random card from temporary array
        randomCard = Math.floor(Math.random() * tempArr.length)
        //Assign the random card to the current index of the deck
        deck[i] = tempArr[randomCard];
        //Remove the randomized index from the temporary array before next loop cycle
        tempArr.splice(randomCard, 1);
    }
}

/**
 * Start new turn, players draw cards if possible
 */
function newTurn() {
    //Remove all used cards from table and start new turn
    clearTable();
    //Disable "next turn" button
    document.getElementById("next-button").style.display = "none";
    //Make sure deck cannot be clicked
    document.getElementById("player-deck").classList.remove("draw-deck");
    //Check if player has a full hand
    while (document.getElementById("player-hand").children.length < handSize) {
        //Check if player has cards in deck
        if (playerDeck.length > 0) {
            drawCard("player")
        }
        else { break; }
    }
    //Check if enemy has a full hand
    while (document.getElementById("enemy-hand").children.length < handSize) {
        //Check if enemy has cards in deck
        if (enemyDeck.length > 0) {
            drawCard("enemy")
        }
        else { break; }
    }
    enableClick();


}

/**
 * Make player cards clickable
 */
function enableClick() {
    let hand = document.getElementById("player-hand");

    for (let i = 0; i < hand.children.length; i++) {
        console.log(hand.children[i]);
        hand.children[i].setAttribute("onclick", "playCard(this)");
        hand.children[i].classList.add("clickable");
    }

}

/**
 * Prevent player from playing cards
 */
function disableClick() {
    let hand = document.getElementById("player-hand");
    for (let i = 0; i < hand.children.length; i++) {
        hand.children[i].setAttribute("onclick", "");
        hand.children[i].classList.remove("clickable");
    }
}

/**
 * Draw card into the selected hand
 */
function drawCard(whose) {
    let hand, deck, card;
    //Check who's drawing the card
    if (whose == 'player') {
        hand = document.getElementById("player-hand");
        deck = playerDeck;
    } else {
        hand = document.getElementById("enemy-hand");
        deck = enemyDeck;
    }
    //Check if deck still has cards
    if (deck.length > 0) {
        //Make facedown card if hidden cards is chosen
        if (whose == "enemy" && enemyCards == "hidden") {
            card = `<div class="card facedown ${cardBack}" points="${deck[0].points}"></div>`;
        }
        //Otherwise, make normal card face
        else {
            card = `<div class="card" points="${deck[0].points}"><p>${deck[0].points}</p></div>`;
        }
        //Add new card element in hand div
        hand.insertAdjacentHTML("beforeend", card);
        deck.shift();
        console.log(deck.length + " cards left in deck;")
    }
    else {
        console.log("Deck is empty")
    }
    //Hide deck if empty
    if (deck.length == 0) {
        if (whose == 'player') {
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
    let randomSpin = Math.floor(Math.random() * 100 - 50)
    card.style.zIndex = 40;
    card.style.position = "absolute";
    card.style.transform = `translate(-50%, -120%) rotate(${randomSpin}deg)`
    cardsOnTable.push(card)
    disableClick()
    enemyPlay()
}

/**Enemy chooses a card and plays it to the board */
function enemyPlay() {
    let hand = document.getElementById("enemy-hand");
    let randomSpin = Math.floor(Math.random() * 100 - 50);
    //Choose a random card from hand
    console.log("enemy choosing card");
    let randomCard = Math.floor(Math.random() * hand.children.length);
    let chosenCard = hand.children[randomCard];
    console.log(chosenCard)
    //If card is facing away, show number face
    if (chosenCard.classList.contains("facedown")) {
        chosenCard.classList.remove("facedown", cardBack);
        chosenCard.innerHTML = `<p>${chosenCard.getAttribute("points")}</p>`;
    }
    //Play card to board
    chosenCard.style.position = "absolute";
    chosenCard.style.zIndex = 40;
    chosenCard.style.transform = `translate(50%, 120%) rotate(${randomSpin}deg)`;
    cardsOnTable.push(chosenCard);

    //Proceed to compare played cards
    compareCards();
}

/**
 * Compare player card to enemy card to determine winner of turn
 */
function compareCards() {
    console.log("Comparing cards...")
    //Compare value of cards on table
    let playerCardValue = parseInt(cardsOnTable[0].getAttribute("points"));
    console.log(playerCardValue);
    let enemyCardValue = parseInt(cardsOnTable[1].getAttribute("points"));
    console.log(enemyCardValue);
    //Sum values together to create score for winner
    let sum = playerCardValue + enemyCardValue;
    if (playerCardValue < enemyCardValue) {
        console.log("You lose the round. Opp gets " + sum)
        enemyScore += sum;
    } else if (enemyCardValue < playerCardValue) {
        console.log("You win the round and get " + sum)
        playerScore += sum;
    } else {
        console.log("It's a draw!")
    }
    updateScore();
}

/**
 * 
 */
function updateScore() {
    console.log("Player: " + playerScore + ", Enemy: " + enemyScore);
    //Update score counters
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("enemy-score").textContent = enemyScore;
    //Check if game is over
    console.log("Cards in hand: " + document.getElementById("player-hand").childNodes.length)
    if (document.getElementById("player-hand").childNodes.length > 1) {
        document.getElementById("next-button").style.display = "block";
    } else {
        gameOver();
    }
}

/**
 * Remove all cards from board
 */
function clearTable() {
    for (card in cardsOnTable) {
        cardsOnTable[card].remove();
    }
    cardsOnTable = [];
}

/** End game and display win/lose message */
function gameOver() {
    console.log("Game over")
    if (playerScore > enemyScore) {
        wins += 1;
        document.getElementById("end-message").textContent = "You win!";
        document.getElementById("wins").textContent = wins;
    } else if (enemyScore > playerScore) {
        losses += 1;
        document.getElementById("end-message").textContent = "You lose!";
        document.getElementById("losses").textContent = losses;
    } else {
        document.getElementById("end-message").textContent = "It's a draw!";
    }
    showModal();
}

/**
 * Reveal the game over modal
 */
function showModal() {
    document.getElementById("game-modal").style.display = "flex";
}

/**
 * Hide the game over modal
 */
function hideModal() {
    document.getElementById("game-modal").style.display = "none";
}