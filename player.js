class Player {
  constructor(id) {
    this.id = id
    this.playerHand = [
    ]
    this.playerTurn = true
  
    this.wins = 0
  }

  deal() {
    game.pile.unshift(this.playerHand[0])
    player1.playerHand.shift()
    console.log(`it's probably been dealt`, game.pile)
  }

}



