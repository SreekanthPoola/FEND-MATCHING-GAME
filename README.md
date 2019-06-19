# Memory Game Project

## Table of Contents

* [Instructions](#instructions)
* [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
## I followed the following steps to complete the project

###Cloning the Project
- After following the instructions, I got a GitHub link about the skeleton project which was provided by **udacity** in rubric structure.
- After extracting the download project from GitHub, I observed the entire file structure(1.`css/app.css`,2.`img/`,3.`js/app.js`,4.`index.html`,5.`README.md`)
### Some changes in the Code ###
1.To Reload the game I added `document.location.reload();`
2.For shuffling of cards everytime, I created a deck of cards to Reload the game.
3.To display the starRating, moves and time taken by the player to complete the game I used Counter.
4.`timeStatus`, `starRating` and `refresh` are the some of the methods I used to complete the game.
5.At initial state `starCount=3` then depending on completion of game by the player the starCount will be displayed.
6.At initial state `moves=0`and `time=0` then depending on completion of game by the player the moves and time will be displayed.
7.If the players clicked two matched cards, I applied styles of match otherwise unmatch.
8.If the player clicked two unmatched cards, the cards not displayed until he click the matched cards.
9.If the player matched all the cards in below 12 moves then the player gets 3 stars or below 18 moves then player will get 2 stars or otherwise player will get only  star.
10.After all cards get matched time, moves and starCount will be displayed.
