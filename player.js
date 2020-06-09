class Player {
  constructor(id) {
    this.id = id
    this.playerHand = [
    ]  
    this.wins = 0
  }

  deal() {
    game.pile.unshift(this.playerHand[0])
    this.playerHand.shift()
    // game.swapPlayerTurn()
    console.log(`it's probably been dealt`, game.pile)
    console.log(`Player${game.currentPlayer.id}'s turn is up`)
    
  }

  forfeitCard() {
    var forfeitedCard = this.playerHand.shift()
    if (this.currentPlayer === this.player1) {
      this.playerHand.shift(forfeitedCard)
      this.playerHand.push(forfeitedCard)
    } else {
      this.currentPlayer.playerHand.shift(forfeitedCard)
      this.player1.playerHand.push(forfeitedCard)
    }
  }
}



