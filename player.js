class Player {
  constructor(id) {
    this.id = id
    this.playerHand = []  
    this.wins = JSON.parse(localStorage.getItem(`player-${this.id}-wins`)) || 0; 
  }

  deal() {
    if(this.playerHand.length === 0) {
      return false
    }
    game.pile.unshift(this.playerHand[0])
    this.playerHand.shift()
    return true
  }  

  saveWinsToStorage() {
    localStorage.setItem(`player-${this.id}-wins`, JSON.stringify(this.wins));
  }

}



