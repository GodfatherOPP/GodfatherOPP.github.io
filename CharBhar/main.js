document.addEventListener("DOMContentLoaded", () => {
  var currentplayer = "playerOne";
  var count = 0;
  var winCombinations = [
    [1.1,1.2,1.3],
    [1.3,1.4,1.5],
    [1.5,1.6,1.7],
    [1.7,1.8,1.1],
    [2.1,2.2,2.3],
    [2.3,2.4,2.5],
    [2.5,2.6,2.7],
    [2.7,2.8,2.1],
    [3.1,3.2,3.3],
    [3.3,3.4,3.5],
    [3.5,3.6,3.7],
    [3.7,3.8,3.1],
    [1.2,2.2,3.2],
    [1.4,2.4,3.4],
    [1.6,2.6,3.6],

  ]
var positionHolder = [["","","","","","","","",],
                      ["","","","","","","","",],
                      ["","","","","","","","",],
                      ]


  document.getElementById("block").addEventListener("click", (event) => {
    if(count>=18){
      gameOn()
      return
    }
    count++;
    reverseplayer();

    var clickedPosition = event.target.getAttribute("position");
    idOfClickedPosition = event.target.getAttribute("id");
   var a = clickedPosition.slice(0,1)-1;
   var b = clickedPosition.slice(2,3)-1;
    if(currentplayer == "playerOne"){
        document.getElementById(idOfClickedPosition).style.backgroundColor = "red";
        positionHolder[a][b] = "playerone";
    }else{
        document.getElementById(idOfClickedPosition).style.backgroundColor = "green";
        positionHolder[a][b] = "playertwo";
    }
  //  console.log(positionHolder);
  //   console.log("currentplayer: " + currentplayer);
  //   console.log("clickdPosition: " + clickedPosition);
  //   console.log("idOfClickedPosition: " + idOfClickedPosition);
  if(count>=5){
    console.log("Mill function called")
    checkForMill();
  }   
 

  });
  


  function reverseplayer() {
    currentplayer = currentplayer == "playerOne" ? "playertwo" : "playerOne";
   }
    function gameOn(){
     if(document.getElementById(idOfClickedPosition).style.backgroundColor != "black"){
         
     }
    }

function  checkForMill(){

  for (i = 0; i<=winCombinations.length-1; i++){
  
    var positionOne = winCombinations[i][0].toString();
    var positionTwo = winCombinations[i][1].toString();
    var positionThree = winCombinations[i][2].toString();

    var aOne = Number(positionOne.slice(0,1)-1);
    var aTwo = positionOne.slice(2,3)-1;
    var bOne = positionTwo.slice(0,1)-1;
    var bTwo = positionTwo.slice(2,3)-1;
    var cOne = positionThree.slice(0,1)-1;
    var cTwo = positionThree.slice(2,3)-1;

    var a =  positionHolder[aOne][aTwo];
    var b = positionHolder[bOne][bTwo];
    var c = positionHolder[cOne][cTwo];

    if((a=="playertwo" && b=="playertwo" && c=="playertwo") || (a=="playerone" && b=="playerone" && c=="playerone")){
      console.log("mill")
      alert("Mill")
    }
  }

}










});


