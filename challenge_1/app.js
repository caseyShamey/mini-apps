var state = {
  turnTracker: "X",
  currentBoard: {
    one: "  ",
    two: "  ",
    three: "  ",
    four: "  ",
    five: "  ",
    six: "  ",
    seven: "  ",
    eight: "  ",
    nine: "  "
  },
  win: false,
}

var changeState = (id, change) => {
  document.getElementById(id).innerHTML = change;
}

var changeClass = (id, cl) => {
  var elem = document.getElementById(id)
  elem.classList.toggle(cl)
}



var listeners = {
  clicker: (id) => {
    if (state.currentBoard[id] === "X" || state.currentBoard[id] === "O") {
      //can't click on same square twice during game
    } else if (state.win) {
      //can't make moves after win
    } else if (state.turnTracker === "X") {
      changeClass(id, "xsquare")
      state.currentBoard[id] = "X"
      //randomize()
      console.log(state.currentBoard)
      winChecker(state.turnTracker)
      tieChecker()
      state.turnTracker = "O"
      if (!state.win) {
        document.getElementById("turn").innerHTML = "Player Turn: O"
      }
    } else {
      changeClass(id, "osquare")
      state.currentBoard[id] = "O"
      //randomize()
      console.log(state.currentBoard)
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
      if (state.currentBoard[elem] === "X") {
        changeClass(elem.toString(), 'xsquare')
      } else if (state.currentBoard[elem] === "O") {
        changeClass(elem.toString(), 'osquare')
      }
    }

    state.turnTracker = "X";
    state.currentBoard = {};
    state.win = false;
    state.randomizer = false;
    state.currentBoard.one = "  ";
    state.currentBoard.two = "  ";
    state.currentBoard.three = "  ";
    state.currentBoard.four = "  ";
    state.currentBoard.five = "  ";
    state.currentBoard.six = "  ";
    state.currentBoard.seven = "  ";
    state.currentBoard.eight = "  ";
    state.currentBoard.nine = "  ";

    document.getElementById("turn").innerHTML = "Player Turn: X"
    document.getElementById("winner").innerHTML = "Winner:"
    console.log('reset', state.currentBoard)

  }

}




var tieChecker = () => {
  if (
    state.currentBoard.one !== "  " &&
    state.currentBoard.two !== "  " &&
    state.currentBoard.three !== "  " &&
    state.currentBoard.four !== "  " &&
    state.currentBoard.five !== "  " &&
    state.currentBoard.six !== "  " &&
    state.currentBoard.seven !== "  " &&
    state.currentBoard.eight !== "  " &&
    state.currentBoard.nine !== "  "
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





// var randomize = () => {

//   var makeRandom = function(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   var rand = makeRandom(1, 3);
//     function cond(id, chg) {
//       if (chg === "X") {
//         changeClass(id, "xsquare")
//       } else if (chg === "O") {
//         changeClass(id, "osquare")
//       } else {
//         changeClass(id, "neutralSquare")
//       }
//     }

//   if (rand === 1) {
//     var boardCopy = Object.assign(state.currentBoard)

//     var one = boardCopy.one
//     var two =  boardCopy.two
//     var three = boardCopy.three
//     var four =  boardCopy.four
//     var six =  boardCopy.six
//     var seven =  boardCopy.seven
//     var eight =  boardCopy.eight
//     var nine =  boardCopy.nine

//     state.currentBoard.one = two
//     //cond(one, two)

//     state.currentBoard.two = three
//     //cond(two, three)

//     state.currentBoard.three = six
//     //cond(three, six)

//     state.currentBoard.four = one
//     //cond(four, one)

//     state.currentBoard.six = nine
//     //cond(six, nine)

//     state.currentBoard.seven = four
//     //cond(seven, four)

//     state.currentBoard.eight = seven
//     //cond(eight, seven)

//     state.currentBoard.nine = eight
//     //cond(nine, eight)
//   }
// }