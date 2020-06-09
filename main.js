var game = new Game();
var player1 = game.player1
var player2 = game.player2
var pile = document.querySelector('.pile')
var announcement = document.querySelector('.announcement')
// var currentPlayer = game.currentPlayer
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
  
  if (event.keyCode == 81 && game.currentPlayer !== player1) {
    game.becomeCurrentPlayer()
    currentPlayerDeals()
    console.log(`you pressed Q`)
  } else if (event.keyCode == 70) {  
    game.currentPlayer = player1
    checkingSlap()
    
    var match = game.checkMatch()
    // When a player slaps, this will happen
    // // the game will check for a set win
    // // the game will check for a match win
    // // if both set and match return false, player forfeits their card
    // // show alert that you done messed up
    // // swap player
    console.log(`you pressed F`)
  } else if (event.keyCode == 80 && game.currentPlayer !== player2) {
      game.becomeCurrentPlayer()
      currentPlayerDeals()
      console.log(`you pressed P`)
  } else if (event.keyCode == 74) {
    game.currentPlayer = player2
    checkingSlap()
    // When a player slaps, this will happen
    // // the game will check for a set win
    // // the game will check for a match win
    // // if both set and match return false, player forfeits their card
    // // show alert that you done messed up
    // // swap player
    console.log(`you pressed J`)
  }
}

function checkingSlap() {
  var slapConditions = game.checkSlap()
  if(!slapConditions === `MISSED`) {
    resetPile()
    alert(`PLAYER 1 WIN'S SET`)
    game.winSet()
    announcement.innerText = `${slapConditions}`
  } else {
    game.forfeitCard()
    alert(`${slapConditions}`)
  }
}

function currentPlayerDeals() {
  var hasCards = game.currentPlayer.deal()
  pile.src = hasCards === true ? game.pile[0] : './assets/back.png'
  removeClass()
  game.currentPlayer === player1 ? pile.classList.add('glow-p1') : pile.classList.add('glow-p2')
}

function announceWin(winType) {
  var p1WinCounter = document.querySelector('.p1-win-counter')
  var p2WinCounter = document.querySelector('.p2-win-counter')
  announcement.innerText = winType
  if(player1) {
    alert(`${player1.wins} wins`)
  } else if(game.currentPlayer === player2) {
    p2WinCounter.innerText === `${player2.wins} wins`
  }
}

function resetPile() {
  game.pile = []
  pile.src = './assets/back.png'
}

function resetBoard() {
  player1.playerHand = []
  player2.playerHand = []
  game.pile = []
  pile.src = ''
  game.shuffleDeck(game.deck)
  dealDeck()
  announcement.innerText = `Good Luck!`
}

function removeClass() {
  pile.className = ''
}