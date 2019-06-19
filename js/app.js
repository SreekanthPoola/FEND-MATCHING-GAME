"use strict"
var decks=document.getElementById("deck");
/*
 * Create a list that holds all of your cards
 */
var childs=document.getElementsByClassName("card");

var packs=[...childs];

//Timer initialization
let timeStatus=0;
var timeArea=document.getElementById('time');

//Moves initial
var moves=0;
var match=0;
var moveSection=document.getElementById('moves')
var cardStore=[];

//Rating of Gamer
var starCount=3;
var starSection=[...document.getElementsByClassName("fa-star")];

//Timer initialization
var time;

var hrs=0;
var min=0;
var sec=0;

/*
 *Display the cards on the page
 *    -shiffle the list of cards using the provided "shuffle" method
 *    -Loop through each card and create its HTML
 *    - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
    temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

window.onload=inceptGame();

//Displaying Matched Cards
function inceptGame() {
    var finalizedCards=shuffle(packs);
    for(var i=0; i<finalizedCards.length;i++){
        console.log(finalizedCards[i]);
        decks.append(finalizedCards[i]);
    }

    var matchedCards = document.getElementsByClassName("matched");

    for(var i=0;i<childs.length;i++) {
        childs[i].addEventListener("click",showCard);
    }
}
//Dispalying of Success rate like time,moves,stars.
function showCard() {
    if(timeStatus==0) {
        startTimer();
        timeStatus=timeStatus+1;
    }
    this.classList.add("card");
    this.classList.add("open");
    this.classList.add("show");
    this.classList.add("disable")

    cardStore.push(this);
    if(cardStore.length==2) {
        moves=moves+1;
        moveSection.innerHTML=moves;
        starRating();
        if(cardStore[0].children[0].classList.item(1)==cardStore[1].children[0].classList.item(1)) {
            console.log("matched");
            cardStore[0].classList.add("match","disable");
            cardStore[1].classList.add("match","disable");
            console.log(matchedCards.length);
            match = match+1;
            if(match==8) {
                  clearInterval(time);
                  Swal.fire( {
                  title: "Congratulations",
                  text: "Game Over in hours:"+hrs+"Minute:"+min+"Sec:"+sec,
                  icon: "Success",
                  html:'You have earned<strong style="color:#ff9f33"; text shadow:3px 3x,3px #000">'+starCount+' <i class="fa fa-star"></i> <strong> game with the time of <br>'+hrs+'hours: '+min+'minutes: '+sec+'seconds',
                  confirmButtonText: '<i class ="fa fa-thumbs-up"></i>Restart',

                  }).then(()=> {
                  document.location.reload()
                  });
            }
            cardStore=[];
        }
        else {
            console.log("unmatched");
            cardStore[0].classList.add("unmatch");
            cardStore[1].classList.add("unmatch");
            cardStore.map((card)=> {
                setTimeout(()=> {
                    card.classList.remove("unmatch","open","show","disable");
                },200);
            })
            cardStore=[];
        }
    }
}
var matchedCards=document.getElementsByClassName("match");

//Timer functionalities
function startTimer() {
    time=setInterval(()=> {
    sec=sec+1;
    if(sec==59) {
        min=min+1;
        sec=0;
    }
    if(min==60) {
       hrs=hrs+1;
       min=0;
    }
    timeArea.innerHTML=hrs+" : "+min+" : "+sec;
    },1000)

    if(matchedCards.length==16) {
       clearInterval(time);
    }
}
/*
 * set up the event Listener for a card. If a card is clicked:
 * - display the card's symbol (put this functionality in another function that ypu call from this one)
 * - add the card to a *List* of "open" cards (put this functionality in another function that ypu call from this one)
 * - if the list has already has another card, check to see if the two cards match
 *    +if the card do match, Lock the cards in the open position (put this functionality in another function that ypu call from this one)
      +if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that ypu call from this one)
      +increment the move counter and display it on the page (put this functionality in another function that ypu call from this one)
      +if all cards have matched, display a message with the final score(put this functionality in another function that ypu call from this one)

*/

//Rating of Game by using stars
function starRating() {
    if(moves>12 && moves<=18) {
        starCount=2;
        starSection[2].style.display="none";
    }
    if(moves>18) {
        starCount=1;
        starSection[1].style.display="none";
    }
}
