var game = new Game();
var player1 = new Player(1);
var player2 = new Player(2)

// var currentPlayer = game.player1Turn === true ? player1 : player2


window.addEventListener(`load`, distributeCards)



function distributeCards() {
  console.log(`this is working`)
  game.shuffleDeck(game.deck);
  game.dealDeck()
}

function playerDeal() {
  currentPlayer.deal()
  currentPlayer.player1turn = !currentPlayer.player1Turn
}

