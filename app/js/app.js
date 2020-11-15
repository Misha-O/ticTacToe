const container = document.querySelector(".game__container");
const cells = document.querySelectorAll(".game__cell");
const currentTurn = document.querySelector("#currentTurn");
// const scoreOne = document.querySelector(".scoreOne");
// const scoreTwo = document.querySelector(".scoreTwo");

const restartGame = document.querySelector(".restart");

let currentPlayer = "Next Turn: Player Two";

cells.forEach((cell) => {
  const cellArray = Array.from(cells);

  cell.addEventListener("click", (e) => {
    currentTurn.innerHTML = currentPlayer;
    // let counterPlayerOne = "";
    // let counterPlayerTwo = "";

    if (currentPlayer === "Next Turn: Player Two") {
      cell.classList.add("playerOne");
      currentPlayer = "Next Turn: Player One";
      // counterPlayerOne++;
    } else {
      cell.classList.add("playerTwo");
      currentPlayer = "Next Turn: Player Two";
    }
  });
});
restartGame.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.classList.remove("playerOne");
    cell.classList.remove("playerTwo");
  });
});
