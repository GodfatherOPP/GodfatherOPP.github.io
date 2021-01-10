//code start from here
// it prevent browser from reading event listener before page is loaded
document.addEventListener("DOMContentLoaded", function () {

    // set an onclick method on each block using event listener
    document.getElementById("game").addEventListener("click", startGame);
  
    // combinations at which a person wins
    const wincombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [3, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    // array on which value is filled after click of each box
    //function to start game
  
    var firstEmptyElementArray = [];
    var blockvaluecombination = [, , , , , , , , ];
    var winnerIs = "";
  

    //function to start game
    function startGame(event) {
  
    //get value filled inside the block and position of the block
    // let blockvalue = event.target.innerHTML;
    let blockposition = event.target.getAttribute("id");

    
      var IndexClickedByAi;
  
      humanPlayer();
      //Aiturn();
      //it print value X or O on blocks
      function humanPlayer() {
        if (event.target.innerHTML != "" || winnerIs != "") {
          return;
        }
        event.target.innerHTML = "O";
      // fill value of block on array
      blockvaluecombination[blockposition] = "O";

      firstEmptyElementArray = blockvaluecombination.filter((element) => {
        element = "";
       });
       console.log("firstEmptyElementArray"+firstEmptyElementArray);
      }
  
      function Aiturn() {
        IndexClickedByAi = firstEmptyElementArray[0];
        IndexClickedByAi.toString()
        firstEmptyElementArray[0] = "X"
        document.getElementById(IndexClickedByAi).innerHTML = "X"
        // fill value of block on array
        blockvaluecombination[blockposition] = "X";
      }
      win();
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
        return element != Number;
      });
      console.log("blockFilled " + blockFilled);
      return blockFilled.length;
    }
  
    function winner() {
      for (i = 0; i < wincombination.length - 1; i++) {
        let element = wincombination[i];
        let a = blockvaluecombination[element[0]];
        let b = blockvaluecombination[element[1]];
        let c = blockvaluecombination[element[2]];
  
        if (a === "" || b === "" || c === "") {
          continue;
        }
        if (a === b && b === c) {
          winnerIs = b;
          document.getElementById("over").innerHTML =
            winnerIs + " has won the game";
          document.getElementById("image").style.display = "block";
          break;
        }
      }
      document.getElementById("game").removeEventListener("click", startGame);
      document.getElementById("restart").style.display = "block";
      restart();
    }
    function restart() {
      blockvaluecombination = ["", "", "", "", "", "", "", "", ""];
      var currentPlayer = "X";
      var winnerIs = "";
      startGame(event);
    }
  });
  