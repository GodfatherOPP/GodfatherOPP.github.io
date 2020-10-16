// var dino;
// function startgame() {
//   mygamearea();
//   dino = new Component(50, 50, "red", 50, 50);
// }
// function mygamearea() {
//   var canvas = document.getElementById("Canvas");
//   var canvasdimension = canvas.getContext("2d");
// }
// function component(width, height, color, x, y) {
//   var dinoBody = mygamearea.context;
//   dinoBody.fillStyle = color;
//   dinoBody.fillRect((width, height, color, x, y);
// }
var dino;
function start() {
  mygamearea();
  dino = new component(30, 30, "red", 10, 120);
}
function mygamearea() {
  var canvas = document.getElementById("myCanvas");
  var canvasdimension = canvas.getContext("2d");
}
function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
