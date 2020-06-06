var game = new Game();
var player1 = new Player(1);
var player2 = new Player(2)


window.addEventListener(`load`, distributeCards)



function distributeCards() {
  console.log(`this is working`)
  game.shuffleDeck();
  game.dealDeck()
}