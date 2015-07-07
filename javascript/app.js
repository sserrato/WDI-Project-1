// BETTING MECHANISM
var chips = 1000;
var bet = 100;

document.getElementById("betup").addEventListener("click", function(){
  console.log(" betup event listener register");
  if(bet < chips) {
    bet += 100;
    updateCashBet();
  }

});

function updateCashBet() {
console.log("updateCashbet register");
document.getElementById("bet").innerText = "Bet = " + "$ " + bet;
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
