//code start from here
// it prevent browser from reading event listener before page is loaded
document.addEventListener("DOMContentLoaded", function () {

  // set an onclick method on each block using event listener
  document.getElementById("game").addEventListener("click", startGame);

  // combinations at which a person wins
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
  // array on which value is filled after click of each box
  blockvaluecombination = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ',];
  var currentPlayer = "X";


  //function to start game
  function startGame(event) {
    reversePlayer();
//it print value X or O on blocks
    function reversePlayer() {
      if (event.target.innerHTML != '') {
        return;
      }
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      event.target.innerHTML = currentPlayer;

    }


//get value filled inside the block and position of the block
    let blockvalue = event.target.innerHTML;
    let blockposition = event.target.getAttribute("id");
 
    // fill value of block on array
    blockvaluecombination[blockposition] = blockvalue;
    win()
  }

  // function to check winning condition

  function win() {
    let howManyblockclicked = blockclicked();
    if (howManyblockclicked > 4) {
      winner();
    }
  }
  function blockclicked() {
    let blockFilled = blockvaluecombination.filter((element) => {
      return element != '';
    });
    console.log("blockFilled " +  blockFilled);
    return blockFilled.length;
    // console.log(blockFilled.length);
  }

  function winner() {
    let winnerIs;
    for (i = 0; i < wincombination - 1; i++) {
      let element = wincombination[i];
      let a = blockvaluecombination[element[0]];
      let b = blockvaluecombination[element[1]];
      let c = blockvaluecombination[element[2]];
      if (a === '' || b === '' || c === '') {
        continue;
      }
      if (a === b && b === c) {
        winnerIs = a;
        break;
      }
    }
    document.getElementById("over").innerHTML = winnerIs + " has won the game"
  }
});
