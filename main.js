var game = new Game();
var player1 = game.player1
var player2 = game.player2
// var currentPlayer;
// var currentPlayer = game.player1Turn === true ? player1 : player2


window.addEventListener(`load`, distributeCards)
document.addEventListener('keydown', playerDeal)


function distributeCards() {
  console.log(`this is working`)
  game.shuffleDeck(game.deck);
  game.dealDeck()
  game.swapPlayerTurn
}

function playerDeal() {
  if (event.keyCode == 81 && game.currentPlayer === player1) {
    console.log(`you pressed Q`)
  } else if (event.keyCode == 70 && game.currentPlayer === player1) {
    console.log(`you pressed F`)
  } else if (event.keyCode == 80 && game.currentPlayer === player2 ) {
    console.log(`you pressed P`)
  } else if (event.keyCode == 74 && game.currentPlayer === player2) {
    console.log(`you pressed J`)
  }
}

