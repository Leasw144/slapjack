class Game {
  constructor() {
    this.player1 = new Player(1)
    this.player2 = new Player(2)
    this.player1Turn = true
    this.currentPlayer = this.player1Turn ? this.player1 : this.player2
    this.pile = []
    this.deck = [
      './assets/blue-01.png',
      './assets/blue-02.png',
      './assets/blue-03.png',
      './assets/blue-04.png',
      './assets/blue-05.png',
      './assets/blue-06.png',
      './assets/blue-07.png',
      './assets/blue-08.png',
      './assets/blue-09.png',
      './assets/blue-10.png',
      './assets/blue-jack.png',
      './assets/blue-queen.png',
      './assets/blue-king.png',
      './assets/gold-01.png',
      './assets/gold-02.png',
      './assets/gold-03.png',
      './assets/gold-04.png',
      './assets/gold-05.png',
      './assets/gold-06.png',
      './assets/gold-07.png',
      './assets/gold-08.png',
      './assets/gold-09.png',
      './assets/gold-10.png',
      './assets/gold-jack.png',
      './assets/gold-queen.png',
      './assets/gold-king.png',
      './assets/green-01.png',
      './assets/green-02.png',
      './assets/green-03.png',
      './assets/green-04.png',
      './assets/green-05.png',
      './assets/green-06.png',
      './assets/green-07.png',
      './assets/green-08.png',
      './assets/green-09.png',
      './assets/green-10.png',
      './assets/green-jack.png',
      './assets/green-queen.png',
      './assets/green-king.png',
      './assets/red-01.png',
      './assets/red-02.png',
      './assets/red-03.png',
      './assets/red-04.png',
      './assets/red-05.png',
      './assets/red-06.png',
      './assets/red-07.png',
      './assets/red-08.png',
      './assets/red-09.png',
      './assets/red-10.png',
      './assets/red-jack.png',
      './assets/red-queen.png',
      './assets/red-king.png',
    ]
  }

  shuffleDeck(deck) {
    for(var i = 0; i < 1000; i++) {
      var swap1 = Math.floor((Math.random() * deck.length));
      var swap2 = Math.floor((Math.random()) * deck.length);
      var dis = deck[swap1]
      deck[swap1] = deck[swap2]
      deck[swap2] = dis;
    }
  }

  dealDeck() {
    var shuffledDeck = this.deck
    this.player1.playerHand = shuffledDeck.slice(0,26)
    this.player2.playerHand = shuffledDeck.slice(26, shuffledDeck.length)
  }

  becomeCurrentPlayer(currentPlayer) {
    // currentPlayer;
    if(this.currentPlayer === player2) {
      this.currentPlayer = this.player1
    } else if(this.currentPlayer === player1){   
      this.currentPlayer = this.player2
    }
    return currentPlayer
  }

  checkSlap() {
    debugger
    var regex = /-\d+|jack/
    var topCard = regex.exec(this.pile[0]) || [1];
    var nextCard = regex.exec(this.pile[1]) || [2];
    var thirdCard = regex.exec(this.pile[2]) || [3];
    if (topCard[0] === 'jack' && game.player1.playerHand.length === 0 || game.player2.playerHand.length === 0) {
      this.currentPlayer.wins++
      return (`Player ${this.currentPlayer.id} Wins the Match!`)
    } else if (topCard[0] === thirdCard[0]) {      
      this.winSet()
      return `SAMICH`
    } else if (topCard[0] === nextCard[0]) {
      this.winSet()
      return `Doubles!`
    } else if (topCard[0] === 'jack') {
      this.winSet()
      return `Slapjack!`
    } else  
    return `MISSED`
  } 
  
  winSet() {
    this.currentPlayer.playerHand = this.currentPlayer.playerHand.concat(this.pile)
    this.pile = []
    this.becomeCurrentPlayer()
  }
  
  checkMatch() {
    if (game.currentPlayer === game.player1 && player2.playerHand.length === 0) {
      this.player1.wins++
      alert(`Player 1 wins match!`)
      return true
    } else if (game.player2 === game.currentPlayer && player1.playerHand === []) {
      this.player1.wins++
      alert(`Player 1 wins match!`)
      return true
    }
    return false
  }

  forfeitCard() {
    var forfeitedCard = this.currentPlayer.playerHand.shift()
    if (this.currentPlayer === this.player1) {
      this.player2.playerHand.push(forfeitedCard) 
    } else {
        this.player1.playerHand.push(forfeitedCard) 
      }
  }
}




  
