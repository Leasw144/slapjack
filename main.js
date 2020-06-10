
var game = new Game();
var player1 = game.player1
var player2 = game.player2
var pile = document.querySelector('.pile')
var announcement = document.querySelector('.announcement')

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~~~~~~
window.addEventListener(`load`, distributeCards)
document.addEventListener('keydown', keyPressHandler)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Helper Functions~~~~~~~~~~~~~~~~~~~~~~~~~~~
function distributeCards(player1Wins, player2Wins) {
  game.shuffleDeck(game.deck);
  game.dealDeck()
  updateWins()
}

function keyPressHandler() {
  if (event.keyCode == 81 && game.currentPlayer !== player1) {
      game.becomeCurrentPlayer()
      announcement.innerText = `Player 1 deals!`
      currentPlayerDeals()
  } else if (event.keyCode == 70) {  
      game.currentPlayer = player1
      checkingSlap()
  } else if (event.keyCode == 80 && game.currentPlayer !== player2) {
      game.becomeCurrentPlayer()
      announcement.innerText = `Player 2 deals!`
      currentPlayerDeals()
  } else if (event.keyCode == 74) {
      game.currentPlayer = player2
      checkingSlap()
  }
}

function currentPlayerDeals() {
  var hasCards = game.currentPlayer.deal()
  pile.src = hasCards === true ? game.pile[0] : './assets/back.png'
  removeClass()
  game.currentPlayer === player1 ? pile.classList.add('glow-p1') : pile.classList.add('glow-p2')
}

function checkingSlap() {
  var slapConditions = game.checkSlap()
  if(slapConditions !== `MISSED`) {
    winSetReset(slapConditions)
  } else {
    game.forfeitCard()
    announcement.innerText = `MISSED SLAP!!!`
  }
}

function winSetReset(slapConditions) {
  if (slapConditions === `Player ${game.currentPlayer.id} Wins the Match!`) {
    var winCounter = document.querySelector(`.p${game.currentPlayer.id}-win-counter`)
    winCounter.innerHTML = `${game.currentPlayer.wins} wins`
    resetBoard()
  }
  game.winSet()
  pile.src = './assets/back.png'
  announcement.innerText = `${slapConditions}`
}



function resetBoard() {
  alert(`start new game`)
  game.player1.saveWinsToStorage();
  game.player2.saveWinsToStorage();
  player1.playerHand = []
  player2.playerHand = []
  game.pile = []
  pile.src = './assets/back.png'
  distributeCards()
  announcement.innerText = `Good Luck!`

}

function removeClass() {
  pile.className = ''
}

function updateWins() {
  var player1Wins = document.querySelector('.p1-win-counter')
  var player2Wins = document.querySelector('.p2-win-counter')
  player1Wins.innerText = `${player1.wins} Wins`
  player2Wins.innerText = `${player2.wins} Wins`
}
