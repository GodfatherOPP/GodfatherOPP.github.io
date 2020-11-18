document.addEventListener("DOMContentLoaded", ()=>{
 var tempNumber = "";
 var screen ;
 var Value = "";
 var tempOperator= "";
 var operation = [];
var number = [];

    document.getElementById("number").addEventListener("click", (event)=> {
      if(document.getElementById("screen").innerHTML == 0){
        document.getElementById("screen").innerHTML = "";
      }
          Value = event.target.getAttribute("data-value");
        tempNumber += Value;
        screen = document.getElementById("screen").innerHTML += Value;
        console.log("tempNumber: " + tempNumber);
        if(tempOperator!= ""){
            operation.push(tempOperator);
            tempOperator="";
        }
        console.log("operation: " + operation);
    });
    
    document.getElementById("operation").addEventListener("click", (event)=> {
        number.push(tempNumber);
        tempNumber= "";
        console.log("tempNumber: " + tempNumber);
        console.log("number: " + number);
      
      console.log("tempOperator: ${tempOperator}");

      //solve first written equation if two operator clicked at same time 
      if(operation.length == 1 ){
        let currentoperator = operation[0];
        if (currentoperator === '+') {
          result = Number(number[0]) + Number(number[1])
        } else if (currentoperator === '-') {
          result = Number(number[0]) - Number(number[1])
        } else if (currentoperator === '*') {
          result = Number(number[0]) * Number(number[1])
        } else if (currentoperator === '/') {
          result = Number(number[0]) / Number(number[1])
        }
        number = [];
        number.push(result);
        operation = [];
        screen = document.getElementById("screen").innerHTML = result;
      }
      //End
            // do not print operator in series 
            if(tempOperator== "" ){
      Value = event.target.getAttribute("data-value");
      tempOperator = Value;
      screen = document.getElementById("screen").innerHTML += tempOperator;
            }
           // end
  });
  // ON the click of equal 
  document.getElementById("equal").addEventListener("click", (event)=> {
       if(tempNumber!= ""){
           number.push(tempNumber);
      }
        let currentoperator = operation[0];
        if (currentoperator === '+') {
          result = Number(number[0]) + Number(number[1])
        } else if (currentoperator === '-') {
          result = Number(number[0]) - Number(number[1])
        } else if (currentoperator === '*') {
          result = Number(number[0]) * Number(number[1])
        } else if (currentoperator === '/') {
          result = Number(number[0]) / Number(number[1])
        }
        document.getElementById("screen").innerHTML = result;
        return result;
      })
      document.getElementById("Clear").addEventListener("click", (event)=> {
        document.getElementById("screen").innerHTML = 0;
         tempNumber = "";
         screen ;
         Value = "";
         tempOperator= "";
         operation = [];
         number = [];
         console.clear();
      })
    })