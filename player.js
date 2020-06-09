class Player {
  constructor(id) {
    this.id = id
    this.playerHand = [
    ]  
    this.wins = 0
  }

  deal() {
    if(this.playerHand.length === 0) {
      return false
    }
    game.pile.unshift(this.playerHand[0])
    this.playerHand.shift()
    return true
    // game.swapPlayerTurn()
    console.log(`it's probably been dealt`, game.pile)
    console.log(`Player${game.currentPlayer.id}'s turn is up`)
    
  }

  
}



