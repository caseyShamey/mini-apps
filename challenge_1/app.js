var turnTracker = "X";
var currentBoard = {}
var win = false

var clicker = (id) => {
  if (currentBoard[id] === "X" || currentBoard[id] === "O") {
    //can't click on same square twice during game
  } else if (win) {
    //can't make moves after win
  } else if (turnTracker === "X") {
    document.getElementById(id).innerHTML = "X"
    currentBoard[id] = "X"
    winChecker(turnTracker)
    turnTracker = "O"
    document.getElementById("turn").innerHTML = "Player Turn: O"
  } else {
    document.getElementById(id).innerHTML = "O"
    currentBoard[id] = "O"
    winChecker(turnTracker)
    turnTracker = "X"
    document.getElementById("turn").innerHTML = "Player Turn: X"
  }
}

var winChecker = (turnTracker) => {
  if (

    (currentBoard.one === turnTracker &&
    currentBoard.two === turnTracker &&
    currentBoard.three === turnTracker) ||

    (currentBoard.four === turnTracker &&
    currentBoard.five === turnTracker &&
    currentBoard.six === turnTracker) ||

    (currentBoard.seven === turnTracker &&
    currentBoard.eight === turnTracker &&
    currentBoard.nine === turnTracker) ||

    (currentBoard.one === turnTracker &&
    currentBoard.four === turnTracker &&
    currentBoard.seven === turnTracker) ||

    (currentBoard.two === turnTracker &&
    currentBoard.five === turnTracker &&
    currentBoard.eight === turnTracker) ||

    (currentBoard.three === turnTracker &&
    currentBoard.six === turnTracker &&
    currentBoard.nine === turnTracker) ||

    (currentBoard.one === turnTracker &&
    currentBoard.five === turnTracker &&
    currentBoard.nine === turnTracker) ||

    (currentBoard.three === turnTracker &&
    currentBoard.five === turnTracker &&
    currentBoard.seven === turnTracker)

  ) {
    document.getElementById("winner").innerHTML = `Winner: ${turnTracker}!!  Congratulations!`
    win = true;
  }
}