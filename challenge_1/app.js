var turnTracker = true;
var currentBoard = {}

var clicker = (id) => {
  // if (
  //   (currentBoard.one === "X" &&
  //   currentBoard.two === "X" &&
  //   currentBoard.three === "X") ||

  //   (currentBoard.one === "O" &&
  //   currentBoard.two === "O" &&
  //   currentBoard.three === "O") ||

  //   (currentBoard.one === "X" &&
  //   currentBoard.two === "X" &&
  //   currentBoard.three === "X") ||
  // )
  if (turnTracker === true) {
    document.getElementById(id).innerHTML = "X"
    currentBoard[id] = "X"
    turnTracker = false
    document.getElementById("turn").innerHTML = "Player Turn: O"
  } else {
    document.getElementById(id).innerHTML = "O"
    currentBoard[id] = "O"
    turnTracker = true
    document.getElementById("turn").innerHTML = "Player Turn: X"
  }
}