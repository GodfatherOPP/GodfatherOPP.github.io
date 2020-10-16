document.addEventListener("DOMContentLoaded", function () {
  const wincombination = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];
  var currentPlayer = "X";
  document.getElementById("game").addEventListener("click", startGame);
  function startGame(event) {
    reversePlayer();
    function reversePlayer() {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      event.target.innerHTML = currentPlayer;
    }
  }
});
