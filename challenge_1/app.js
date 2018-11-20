var state = {
  turnTracker: "X",
  currentBoard: {},
  win: false
}

var changeState = (id, change) => {
  document.getElementById(id).innerHTML = change;
}

var listeners = {
  clicker: (id) => {
    if (state.currentBoard[id] === "X" || state.currentBoard[id] === "O") {
      //can't click on same square twice during game
    } else if (state.win) {
      //can't make moves after win
    } else if (state.turnTracker === "X") {
      document.getElementById(id).innerHTML = "X"
      state.currentBoard[id] = "X"
      winChecker(state.turnTracker)
      tieChecker()
      state.turnTracker = "O"
      if (!state.win) {
        document.getElementById("turn").innerHTML = "Player Turn: O"
      }
    } else {
      document.getElementById(id).innerHTML = "O"
      state.currentBoard[id] = "O"
      winChecker(state.turnTracker)
      tieChecker()
      state.turnTracker = "X"
      if (!state.win) {
        document.getElementById("turn").innerHTML = "Player Turn: X"
      }
    }
  },

  newGame: () => {
    for (var elem in state.currentBoard) {
      document.getElementById(elem).innerHTML = "--"
    }
    state.turnTracker = "X";
    state.currentBoard = {};
    state.win = false;
    document.getElementById("turn").innerHTML = "Player Turn: X"
    document.getElementById("winner").innerHTML = "Winner:"

  }

}




var tieChecker = () => {
  if (
    state.currentBoard.one &&
    state.currentBoard.two &&
    state.currentBoard.three &&
    state.currentBoard.four &&
    state.currentBoard.five &&
    state.currentBoard.six &&
    state.currentBoard.seven &&
    state.currentBoard.eight &&
    state.currentBoard.nine
  ) {
    document.getElementById("winner").innerHTML = "Tie Game"
  }
}

var winChecker = (turnTracker) => {
  if (

    (state.currentBoard.one === turnTracker &&
    state.currentBoard.two === turnTracker &&
    state.currentBoard.three === turnTracker) ||

    (state.currentBoard.four === turnTracker &&
    state.currentBoard.five === turnTracker &&
    state.currentBoard.six === turnTracker) ||

    (state.currentBoard.seven === turnTracker &&
    state.currentBoard.eight === turnTracker &&
    state.currentBoard.nine === turnTracker) ||

    (state.currentBoard.one === turnTracker &&
    state.currentBoard.four === turnTracker &&
    state.currentBoard.seven === turnTracker) ||

    (state.currentBoard.two === turnTracker &&
    state.currentBoard.five === turnTracker &&
    state.currentBoard.eight === turnTracker) ||

    (state.currentBoard.three === turnTracker &&
    state.currentBoard.six === turnTracker &&
    state.currentBoard.nine === turnTracker) ||

    (state.currentBoard.one === turnTracker &&
    state.currentBoard.five === turnTracker &&
    state.currentBoard.nine === turnTracker) ||

    (state.currentBoard.three === turnTracker &&
    state.currentBoard.five === turnTracker &&
    state.currentBoard.seven === turnTracker)

  ) {
    document.getElementById("winner").innerHTML = `Winner: ${state.turnTracker}!!  Congratulations!`
    state.win = true;
  }
}