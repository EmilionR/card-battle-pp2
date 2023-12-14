//Menu screen that is open
let openMenu;

/**
 * Open "how to play" modal
 */
function openHelp() {
    //Make "how to play" visible
    openMenu = document.getElementById("info-screen");
    openMenu.style.display = "block";
}

function openSettings() {
    //Make settings visible
    openMenu = document.getElementById("settings-screen")
    openMenu.style.display = "block";
}

function saveChanges() {
    //Save and apply settings
}

function closeMenu() {
    //Hide "how to play" window
    openMenu.style.display = "none";
}