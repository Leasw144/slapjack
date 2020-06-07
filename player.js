class Player {
  constructor(id) {
    this.id = id
    this.playerHand = [
    ]
    // this.currentPlayer = true
  
    this.wins = 0
  }

  deal() {
    game.pile.unshift(this.playerHand[0])
    this.playerHand.shift()
    console.log(`it's probably been dealt`, game.pile)
  }

}



