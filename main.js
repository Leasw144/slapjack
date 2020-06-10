var game = new Game();
var player1 = game.player1
var player2 = game.player2
var pile = document.querySelector('.pile')
var announcement = document.querySelector('.announcement')



window.addEventListener(`load`, distributeCards)
document.addEventListener('keydown', keyPressHandler)


function distributeCards() {
  game.shuffleDeck(game.deck);
  game.dealDeck()
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

function checkingSlap() {
  var slapConditions = game.checkSlap()
  if(slapConditions !== `MISSED`) {
    winSetReset(slapConditions)
  } else {
    game.forfeitCard()
    announcement.innerText = `${slapConditions}`
  }
}

function currentPlayerDeals() {
  var hasCards = game.currentPlayer.deal()
  pile.src = hasCards === true ? game.pile[0] : './assets/back.png'
  removeClass()
  game.currentPlayer === player1 ? pile.classList.add('glow-p1') : pile.classList.add('glow-p2')
}

// function announceWin(winType) {
//   var p1WinCounter = document.querySelector('.p1-win-counter')
//   var p2WinCounter = document.querySelector('.p2-win-counter')
//   announcement.innerText = winType
//   if(player1) {
//     alert(`${player1.wins} wins`)
//   } else if(game.currentPlayer === player2) {
//     p2WinCounter.innerText === `${player2.wins} wins`
//   }
// }



function resetBoard() {
  alert(`start new game`)
  player1.playerHand = []
  player2.playerHand = []
  game.pile = []
  pile.src = './assets/back.png'
  game.shuffleDeck(game.deck)
  game.dealDeck(game.deck)
  announcement.innerText = `Good Luck!`

}

function removeClass() {
  pile.className = ''
}

function winSetReset(slapConditions) {
  debugger
  if (slapConditions === `Player ${game.currentPlayer.id} Wins the Match!`) {
    console.log(`slapjack achieved`)
    var winCounter = document.querySelector(`.p${game.currentPlayer.id}-win-counter`)
    winCounter.innerHTML = `${game.currentPlayer.wins} wins`
    resetBoard()
  }
  game.winSet()
  pile.src = './assets/back.png'
  announcement.innerText = `PLAYER ${ game.currentPlayer.id } WINS BY ${ slapConditions }`
}