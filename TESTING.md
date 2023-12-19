# ELION GYM - TESTING

![Image of the site on devices](documentation/pp2-responsive.png)

Visit live deployed site: [Elion Gym](https://emilionr.github.io/card-battle-pp2/game.html)

* [Automated Testing](#automated-testing)
  * [Validator Testing](#validator-testing)
  * [Lighthouse](#lighthouse)
* [Manual Testing](#manual-testing)
  * [Testing User Stories](#testing-user-stories)
  * [Full Testing](#full-testing)

## Automated Testing

### Validator Testing

This project has been validating using W3C validators for HTML, CSS, and JS.

* CSS
  * https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femilionr.github.io%2Fcard-battle-pp2%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning
  * https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femilionr.github.io%2Fcard-battle-pp2%2Fgame.html&profile=css3svg&usermedium=all&warning=1&vextwarning

### Lighthouse

![Lighthouse Score]()

## Manual Testing

### Testing User Stories

__Client goals__

| Goals | How are they achieved? |
| :--- | :--- |


__First Time Visitors__

| Goals | How are they achieved? |
| :--- | :--- |

__Returning Visitors__

|  Goals | How are they achieved? |
| :--- | :--- |


### Full Testing

The site was tested on these devices:
* Computer:
  * 
* Mobile
  * 
The site was also tested in a number of browsers, including:

* 

__Menu Page__

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| "PLAY" button | Button should take the user to the game page and initiate a round of the game | Click the button | Game loads as intended | Pass |
| "Help" button | The help modal should open | Click the button | Help modal opens | Pass |
| "X" button | Button should close the open modal | Click the button | The modal closes | Pass |
| "Settings" button | The settings modal should open | Click the button | Settings modal opens | Pass |
| Cardback selection | Cardbacks should glow when hovered over and selected | Try selecting each cardback | Cards glow as intended |  |
| "Save changes" button | Clicking it should save the selected options to local storage and close the modal | Click the button with every combination of settings | Settings are saved and the modal closes | Pass |

__Game Page__

| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| Player settings | The settings chosen in the menu should be applied | Try every combination of settings and start the game with each | The chosen cardback, deck size, and card orientation are applied | Pass |
| Player's cards | Clicking a card should play it to the table | Click the cards | Cards play to the table | Pass |
| Card clickability toggling | ards are only clickable when it's the player's turn | Click cards during every stage | Cards only react to clicking when intended. | Pass |
| Card hover effect | Playable cards should light up and lift up when in hover state | Hover on all cards to check the effect | Cards light up and lift up as intended | Pass |
| Opponent's cards | Opponents cards should not be clickable | Click opponent's cards | Cards are not clickable | Pass |
| "Next turn" button | Button should end the current turn and initiate the next turn | Click the button throughout several games | Turns cycle as intended | Pass |
| Card comparison | Card value should be calculated and awarded to the right player after each turn | Play several rounds of the game | Cards compare correclty, the correct sum is added to the correct player | Pass |
| Decks | Card decks should vanish when all cards have been drawn | Draw all cards | Decks vanish | Pass |
| Score counters | Score counters update scores correctly when cards are played | Play a number of games | Score counters always update correctly | Pass |
| Cardbacks | Cards should have the selected image on the back side | Start the game with each cardback selected, refresh page during game | Cardbacks display as intended | Pass |
| Game Over modal | The heading should display whether you win, lose, or tie | Play the game with different outcomes | Heading displays the right message | Pass |
| Win/lose counter | The message should display the correct number of wins and losses after each round | Play several rounds | Message shows correct number of wins and losses | Pass |
| "Yes" button | Button should start a new round of the game | Click the button after several games | Game restarts correctly | Pass |
| "No" button | Button should take user back to the main menu | Click the button after several games | Exits to the main menu | Pass |