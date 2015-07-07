// function testconnection() {
// console.log("hello");
// }
//
// console.log(testconnection());


// var randomRating = (Math.random())*10;
//
// function function_name(argument) {
//   // body...
// }
//
// function twoRandomScores(){
//     var score1 = (Math.random())*10;
//     var score2 = (Math.random())*10;
//     return score1 + score2;
//     }
//
// function twoRandomScores()
// Math.floor(Math.random()*((52-1)+1));
//

function randomScorer() {
  console.log("I got the score " + Math.floor(Math.random()*((52-1)+1)));
}


console.log("can i do this" + randomScorer() );

var randomDeal = Math.floor(Math.random()*((52-1)+1));

var deal = Math.floor(Math.random()*((52-1)+1));
var final = deal % 13;
console.log (final);
