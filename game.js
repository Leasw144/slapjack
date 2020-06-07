class Game {
  constructor() {
    this.player1 = new Player(1)
    this.player2 = new Player(2)
    this.pile = [1, 2, 1, 3]
    this.player1Turn = true
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
      './assets/blue-010.png',
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
    player1.playerHand = shuffledDeck.slice(0,26)
    player2.playerHand = shuffledDeck.slice(26, shuffledDeck.length)
  }

  swapPlayerTurn(currentPlayer) {
    // currentPlayer;
    if(this.player1Turn) {
      game.player1Turn = false
      currentPlayer = player2
    } else if(this.player1Turn === false){   
      currentPlayer = player1
      this.player1Turn = true
    }
    return currentPlayer
  }

  testCurrentPlayer() {
    var currentPlayer= this.swapPlayerTurn()
    console.log(currentPlayer)
    currentPlayer.deal()
    console.log(currentPlayer.playerHand)
  }

  setCondition() {
    if(this.pile[0] === this.pile[2] || this.pile[0] === this.pile[1] || this.pile[0] === 11) {
      currentPlayer.playerHand = currentPlayer.playerHand.concat(this.pile)
      this.shuffleDeck(currentPlayer.playerHand)
      currentPlayer.wins++
      console.log(`this person won the set`, currentPlayer.playerHand)
    } else {
      this.forfeitCard()
    } 
  } 


  forfeitCard() {
    var forfeitedCard = currentPlayer.playerHand.shift()
    if (currentPlayer === player1) {
      currentPlayer.playerHand.shift(forfeitedCard)
      player2.playerHand.push(dealtCard) 
    } else {
        currentPlayer.playerHand.shift(forfeitedCard)
        player1.playerHand.push(dealtCard) 
      }
  }
}


  // setWinCondition() {
  //   if(mainDeck[0] === mainDeck[1]) {
  //     playerDeck.concat(mainDeck)
  //   } else if(mainDeck[0]) {
  //     board.filter()
  //     this.deck = []
  //   } else if(mainDeck[0] === mainDeck[2]) {
  //     //same thing
  //   }
  //   //player one removes element[0] from thier deck, it gets pushed to player 2's deck.
  // }

  // matchWinCondition() {
  //   if(playerDeck === []) {
      
  //   }
  // }

  
