// BETTING MECHANISM

// var chips is the money to played. var bet is the min buy in and unit to increment the bet up.
var chips = 1000;
var bet = 100;

var cardfaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// create a card

function card(name, cardface, suit, value) {
  this.name = name;
  this.cardface = cardface;
  this.suit = suit;
  this.value = value;
}

// the deck of cards
var deck = [];

// function for creating cards, added to the array deck

function deckShuffle() {

  deck = [];

for (var i = 0; i < cardfaces.length; i++) {
  for (var s =0; s < suits.length; s++) {
    var carditem;
    if (i > 9) {
      carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], 10);
    } else {
      carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], i+1);
    }
    deck.push(carditem);
}
}
}

function deckShuffle() {

  deck = [];

for (var i = 0; i < cardfaces.length; i++) {
  for (var s =0; s < suits.length; s++) {
    var carditem;
      if (i > 9) {
        carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], 10);
      } else {
        carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], i+1);
      }
      deck.push(carditem);
}
}
}

deckShuffle(); //invoke the card creation and shuffling

// event listener to decrease the bet by $100

document.getElementById("betdown").addEventListener("click", function(){
  console.log("bet down event listener holla");
  if(bet > 100) {
    bet = bet - 100;
    updateCashBet();
  }

});

// event listener to increase the bet by $100

document.getElementById("betup").addEventListener("click", function(){
  console.log("betup event listener register");
  if(bet < chips) {
    bet += 100;
    updateCashBet();
  }

});

// this function updates the bet value on the screen. it will also update the chips value.

function updateCashBet() {
  console.log("updateCashbet register");
  document.getElementById("bet").innerText = "Bet = " + "$ " + bet;
  document.getElementById("chips").innerText = "Chips = " + "$ " + chips;
}

// this function ends the bet phase and will start the blackjack hand
document.getElementById("dealhand").addEventListener("click", function(){
  console.log("dealhand holla")
  // change the display of the betting buttons to off, effectively creating a new mode to play Blackjack
  document.getElementById("betdown").style.display = "none";
  document.getElementById("betup").style.display = "none";
  document.getElementById("playscreen").style.display = "block";
  document.getElementById("cardTable").style.display = "block";
  startGame();
});

// start the game

function startGame() {
console.log("the game is starting");
}


// CARD DECK CREATION LOGIC

function randomScorer() {
  console.log("I got the score " + Math.floor(Math.random()*((52-1)+1)));
}


console.log("can i do this" + randomScorer() );

var randomDeal = Math.floor(Math.random()*((52-1)+1));

var deal = Math.floor(Math.random()*((52-1)+1));
var final = deal % 13;
console.log (final);
