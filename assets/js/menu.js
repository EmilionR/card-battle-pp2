//Menu screen that is open
let openMenu;

//Standard settings
let gameSettings = {
    deckSize: 9,
    enemyCards: "open"
};

/**
 * Open "how to play" modal
 */
function openHelp() {
    //Make "how to play" visible
    openMenu = document.getElementById("info-screen");
    openMenu.style.display = "flex";
}

/**
 * Make settings visible
 */
function openSettings() {
    openMenu = document.getElementById("settings-screen")
    openMenu.style.display = "flex";
}

/**
 * Save settings in object
 */
function saveChanges() {
    gameSettings.deckSize = document.getElementById("deck-size").value;
    gameSettings.enemyCards = document.getElementById("open-cards").value;
    console.log(gameSettings.deckSize, gameSettings.enemyCards)
}

/**
 * Hide help/settings window
 */
function closeMenu() {
    openMenu.style.display = "none";
}