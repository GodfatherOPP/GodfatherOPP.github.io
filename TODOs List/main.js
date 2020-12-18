var add = document.getElementById("Add");
var List = document.getElementById("List");
update();
add.addEventListener("click", update);
function update() {
  var title = document.getElementById("Title").value;
  var description = document.getElementById("Description").value;
  if (localStorage.getItem("itemsJson") == null) {
    var itemsJsonArray = [];
    itemsJsonArray.push([title, description]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
    console.log(localStorage.getItem("itemsJson"));
  } else {
    itemsJsonArrayStr = localStorage.getItem("itemsJson");
    itemsJsonArray = JSON.parse(itemsJsonArrayStr);
    itemsJsonArray.push([title, description]);
    localStorage.setItem("itemsJson", JSON.stringify(itemsJsonArray));
    console.log(localStorage.getItem("itemsJson"));
  }
  List.innerHTML = "tasks";
  //display content which are added to list
  var Str = "";
  itemsJsonArray.forEach((element, index) => {
    Str += `
       <p class="yourTask">Title${index + 1} : ${element[0]}
       </br> Description : ${element[1]}</br>
       <button class="remove" data="${index}">Remove</button>
       </p>
       `;
  });
  List.innerHTML = Str;
}
function Delete() {
  localStorage.clear();
  Str = "";
  List.innerHTML = Str;
}
// var remove = document.getElementsByClassName("remove");
// var removeIndex = remove.getAttribute("data");
// remove.addEventListener("click", () => {
//     console.log("Deleted")
//   itemsJsonArray.splice(removeIndex, 1);
// });

//   var darkModeBody = document.querySelector(".body")
//   darkModeBody.classList.remove("body");
//   darkModeBody.classList.add("darkModeBody");
//   var dark = document.querySelector("dark");
//   dark.classList.remove("dark");
//   dark.classList.add("light");
function changeTheme(){
  checkTheme()
}

function checkTheme(){
  var changeThemeInto = document.getElementById("changeThemeTO").innerHTML
  if(changeThemeInto=="Dark"){
    darkTheme()
  }else{
    lightTheme()
  }
}
function darkTheme(){
//  let body = document.getElementById("body")
//  let header = document.getElementById("header")

//  body.classList.remove("lightThemeBody")
//  body.classList.add("darkThemeBody")
 
//  header.classList.remove("lightThemeHeader")
//  header.classList.add("darkThemeHeader")
var cssLink =document.getElementById("cssLink")
cssLink.getAttribute("href");
console.log(cssLink)
  document.getElementById("changeThemeTO").innerHTML = "Light"
}
function lightTheme(){
  body.classList.remove("darkThemeBody")
  body.classList.add("lightThemeBody")
  document.getElementById("changeThemeTO").innerHTML = "Dark"
}