
let handSize = 4;
let playerScore = 0;
let enemyScore = 0;

/**
 * Initialize game state,
 * create base classes & reset relevant variables
 */
function initGameState() {

}

/**
 * Draw card into the selected hand
 */
function drawCard() {
    hand = document.getElementById("player-hand");
    card = `<div class="card"><p>1</p></div>`;
    hand.insertAdjacentHTML("beforeend", card);
}
