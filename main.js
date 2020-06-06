var game = new Game();
var player1 = new Player(1);
var player2 = new Player(2)


window.addEventListener(`onload`, dealCards)



function dealCards() {
  game.shuffleDeck();
  game.deal()
}