// BETTING MECHANISM

// var chips is the money to played. var bet is the min buy in and unit to increment the bet up.
var chips = 1000;
var bet = 100;


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

// CARD DECK CREATION LOGIC

function randomScorer() {
  console.log("I got the score " + Math.floor(Math.random()*((52-1)+1)));
}


console.log("can i do this" + randomScorer() );

var randomDeal = Math.floor(Math.random()*((52-1)+1));

var deal = Math.floor(Math.random()*((52-1)+1));
var final = deal % 13;
console.log (final);
