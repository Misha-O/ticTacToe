const cells = document.querySelectorAll("[data-cell]");
const gameContainer = document.getElementById("gameContainer");
const winBlockOverlay = document.getElementById("winningMsg");
const winningMsg = document.querySelector("[data-overlay--msg]");
const restartBtn = document.getElementById("restartBtn");

const xClass = "x";
const circleClass = "circle";

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let circlePlayer = false;

const startGame = () => {
  // parse every cells and process event only once
  cells.forEach((cell) => {
    cell.classList.remove(xClass);
    cell.classList.remove(circleClass);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setContainerHoverClass();
  winBlockOverlay.classList.remove("show");
};

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const swapTurns = () => {
  circlePlayer = !circlePlayer;
};

const setContainerHoverClass = () => {
  gameContainer.classList.remove(xClass);
  gameContainer.classList.remove(circleClass);
  if (circlePlayer) {
    gameContainer.classList.add(circleClass);
  } else {
    gameContainer.classList.add(xClass);
  }
};

startGame();

const checkWin = (currentClass) => {
  // if any winCombinations have any combination return true
  return winCombinations.some((combination) => {
    //   check every element in a combination and return if true
    return combination.every((i) => {
      // check if single elem in cells array has specific class
      return cells[i].classList.contains(currentClass);
    });
  });
};

const endGame = (draw) => {
  if (draw) {
    winningMsg.innerText = "It is a draw !";
  } else {
    winningMsg.innerText = `${circlePlayer ? "Player O" : "Player X"} Wins !`;
  }
  winBlockOverlay.classList.add("show");
};

const isDraw = () => {
  return [...cells].every((cell) => {
    return (
      cell.classList.contains(xClass) || cell.classList.contains(circleClass)
    );
  });
};

restartBtn.addEventListener("click", startGame);

function handleClick(e) {
  // place mark
  const cell = e.target;
  const currentClass = circlePlayer ? circleClass : xClass;
  placeMark(cell, currentClass);

  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setContainerHoverClass();
  }

  // check if win
  // check if draw
  // switch current player
}
