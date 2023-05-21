const team = {
    _players: [
      { firstName: "Will", lastName: "Smith", age: 25 },
      { firstName: "John", lastName: "Allan", age: 32 },
      { firstName: "Gary", lastName: "Anderson", age: 21 },
    ],
    _games: [
      { opponent: "Lakers", teamPoints: 15, opponentPoints: 20 },
      { opponent: "Spurs", teamPoints: 22, opponentPoints: 25 },
      { opponent: "Celtics", teamPoints: 8, opponentPoints: 7 },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this.players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        oppenentPoints: newOpponentPoints,
      }
      this.games.push(game);
    }
  };
  
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  console.log(team.players);
  console.log(team.games);
  