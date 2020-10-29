document.addEventListener("DOMContentLoaded", () => {

    var operator = "";
    var numberOne = "";
    var numberTwo = "";
    var screen;
    var answer;
    document.getElementById("number").addEventListener("click", (event) => {

        if (operator === "") {
            numberOne += event.target.getAttribute("value");
            document.getElementById("screen").innerHTML = numberOne;
            console.log("numberOne: " + numberOne)
        } else {
            numberTwo += event.target.getAttribute("value");
            document.getElementById("screen").innerHTML =numberOne + operator + numberTwo;
            console.log("numberTwo: " + numberTwo)
        }

    });

    document.getElementById("operation").addEventListener("click", (event) => {
        operator = event.target.getAttribute("value");
        screen = document.getElementById("screen").innerHTML += operator;
        console.log("operator: " + operator);

    });

    document.getElementById("equal").addEventListener("click", (event) => {
        switch (operator) {
            case "+":
                answer = document.getElementById("screen").innerHTML = Number(numberOne) + Number(numberTwo);
                break;
            case "-":
                answer = document.getElementById("screen").innerHTML = Number(numberOne) - Number(numberTwo);
                break;
            case "*":
                answer = document.getElementById("screen").innerHTML = Number(numberOne) * Number(numberTwo);
                break;
            case "/":
                answer = document.getElementById("screen").innerHTML = Number(numberOne) / Number(numberTwo);
                break;
        }
        console.log("Answer: " + answer);

    })
    // document.getElementById("Clear").addEventListener("click", function(event){
    //     document.getElementById("screen").innerHTML = " afs";
      
    //   });
});
function clearscreen(){
    location.reload();
}