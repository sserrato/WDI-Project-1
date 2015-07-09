// BETTING MECHANISM

// var chips is the money to played. var bet is the min buy in and unit to increment the bet up.
var chips = 1000;
var bet = 100;

// deck of cards is based on the combination of cardfaces with suits. the below variables create the arrays to make cards.

var cardfaces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// create a card

function card(name, cardface, suit, value) {
  this.name = name;
  this.cardface = cardface;
  this.suit = suit;
  this.value = value;
}

// the deck of cards is stored in this variable as an array
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

  deck = [];//array to hold the deck

for (var i = 0; i < cardfaces.length; i++) {
  for (var s =0; s < suits.length; s++) {
    var carditem;
      if (i > 9) {
        carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], 10);
      } else {
        carditem = new card(cardfaces[i] + 'of ' + suits[s], cardfaces[i], suits[s], i+1);
      }
      deck.push(carditem); //this is where the carditem is then moved into the deck array
}
}
}

deckShuffle(); //invoke the card creation and shuffling

// handCards function creates a hand for the players and deale

function handCards(){
  this.player = 'not-assigned';
  this.cardsInHand = [];
  this.value = 0;
  console.log("function handCards is playing");
}

function dealGame() {
  playerHand = new hand();
  computerHand = new hand();
  playerHand.player = "player";
  dealerHand.player = "dealer";
  startingHand(); // starting hand creates the initial hand
  showValue();
  if (playerHand.value == 21) {
    winHand(); //win function is invoked because player has score of 21
    if(deck.length < 10) {
      shuffleDeck();
    }
  }
}

// starting hand function will deal out cards.

function startingHand() {
  for (var i = 0; i<2; i++){ //deals out 2 cards
  hit(playerHand);
  }
  dealerHit()
}

function dealerHit(){
  hit(computerHand);
  showCompValue();
}

function showValue() {
    document.getElementById("playerHandValuesUi").innerText = "Player hand is" + playerHand.value.toString();
  // show playerHand.value.toString()
  console.log(playerHand.value);
  if (playerHand.value > 21) {
    console.log("Player wins!");
    showCompValue();
    computerTurn();
    // hide player buttons
  }
}

function showCompValue() {
  // show computerHand.value on dealer sdie
  if(dealerHand.value > 21){
    // dealer busts message
  }
}

function addCards(addHand) {
  var total = 0;
  var list = []
  for (var i = 0; i < addHand.cards.length; i++){
    if(addHand.cards[i] != 'A') {
      list.unshift(addHand.cards[i]);
    }
    else {
      list.push(addHand.cards[i]);
    }
  }

  for( var i = 0; i < list.length; i++) {
    if (list += list[i].value;
  }

}

// winHand function declared the winner
function winHand(){
  document.getElementById("viewWinner").style.display = "block"; //set a winner statemement
  chips+= bet;// add bet value to chips
  updateCashBet();
}

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
