var game = new Game();
var player1 = game.player1
var player2 = game.player2
var pile = document.querySelector('.pile')
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
      player1.deal()
      pile.src = game.pile[0]
      removeClass()
      pile.classList.add('glow-p1')
      game.becomeCurrentPlayer()
      //when a player deals, this will happen 
      // // element leaves player hand and goes to pile.
      // // pile displays this card
      // // //this will happen by changing the src
      // // //this function will disable??
    console.log(`you pressed Q`)
  } else if (event.keyCode == 70) {
    var set = game.checkSlap()
    var match = game.checkMatch()
      if(set === `missed`) {
        forefeitCard()
        alert(`MISSED`)
      } else {
        announceWin(set)

      }
    // When a player slaps, this will happen
    // // the game will check for a set win
    // // the game will check for a match win
    // // if both set and match return false, player forfeits their card
    // // show alert that you done messed up
    // // swap player
    console.log(`you pressed F`)
  } else if (event.keyCode == 80 && game.currentPlayer !== player2) {
      player2.deal()
      pile.src = game.pile[0]
      removeClass()
      pile.classList.toggle('glow-p2')
      game.becomeCurrentPlayer()
      //when a player deals, this will happen 
      // // element leaves player hand and goes to pile.
      // // pile displays this card
      // // //this will happen by changing the src
      // // //this function will disable
      console.log(`you pressed P`)
  } else if (event.keyCode == 74) {
    // When a player slaps, this will happen
    // // the game will check for a set win
    // // the game will check for a match win
    // // if both set and match return false, player forfeits their card
    // // show alert that you done messed up
    // // swap player
    console.log(`you pressed J`)
  }
}

function announceWin(winType) {
  var announcement = document.querySelector('.announcement')
  var p1WinCounter = document.querySelector('.p1-win-counter')
  var p2WinCounter = document.querySelector('.p2-win-counter')
  announcement.innerText = winType
  if(player1) {
    alert(`${player1.wins} wins`)
  } else if(game.currentPlayer === player2) {
    p2WinCounter.innerText === `${player2.wins} wins`
  }
}

function reset() {
  player1.playerHand = []
  player2.playerHand = []
  game.pile = []
  shuffleDeck(game.deck)
  dealDeck()
}

function removeClass() {
  pile.className = ''
}