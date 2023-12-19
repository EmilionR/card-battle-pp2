//Backup selection if no cardback is selected
localStorage.setItem('cardBack', 'cardback-2');

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
    openMenu = document.getElementById("settings-screen");
    openMenu.style.display = "flex";
}

/**
 * Save settings in object
 */
function saveChanges() {
    localStorage.setItem('deckSize', document.getElementById("deck-size").value);
    localStorage.setItem('enemyCards', document.getElementById("open-cards").value);
    closeMenu(openMenu);
}

/**
 * Hide help/settings window
 */
function closeMenu() {
    openMenu.style.display = "none";
}

/**
 * Select the clicked cardback style
 */
function chooseCardback(choice) {
    localStorage.setItem('cardBack', choice.getAttribute("class"));
    //Remove "selected" effect from previous choice
    let choices = document.getElementById("cardback-choice").children;
    for(let i = 0; i < choices.length; i++){
        choices[i].classList.remove("selected");
    }
    //Set "selected" effect on selected cardback
    choice.classList.add("selected");
}