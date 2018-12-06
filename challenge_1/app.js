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

var quadrantItems = document.querySelectorAll('.quadrant__item');
var svgs = document.querySelectorAll('svg');
var cube = document.querySelector('.cube');
var closeButton = document.querySelector('.quadrant__item__content--close');
var isInside = false;

var tl = new TimelineLite({paused: true});
tl.timeScale(1.6);

tl.to('.cube', 0.4, {rotation: 45, width: '120px', height: '120px', ease: Expo.easeOut}, 'first');
tl.to('.plus .plus-vertical', 0.3, {height: '0', backgroundColor: '#f45c41', ease: Power1.easeIn}, 'first');
tl.to('.plus .plus-horizontal', 0.3, {width: '0', backgroundColor: '#f45c41', ease: Power1.easeIn}, 'first');
tl.to('.cube', 0, {backgroundColor: 'transparent'});
tl.to(quadrantItems[0], 0.15, {x: -5, y: -5}, 'seperate');
tl.to('.arrow-up', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[1], 0.15, {x: 5, y: -5}, 'seperate');
tl.to('.arrow-right', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');
tl.to(quadrantItems[3], 0.15, {x: 5, y: 5}, 'seperate');
tl.to('.arrow-down', 0.2, {opacity: 1, y: 0}, 'seperate+=0.2');
tl.to(quadrantItems[2], 0.15, {x: -5, y: 5}, 'seperate');
tl.to('.arrow-left', 0.2, {opacity: 1, x: 0}, 'seperate+=0.2');

cube.addEventListener('mouseenter', playTimeline);
cube.addEventListener('mouseleave', reverseTimeline);

function playTimeline(e) {
  e.stopPropagation();
  tl.play();
}

function reverseTimeline(e) {
  e.stopPropagation();
  tl.timeScale(1.8);
  tl.reverse();
}