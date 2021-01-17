document.addEventListener("DOMContentLoaded", () => {
  var cards = [
    { name: "emoji1", image: "image/emoji1.jpeg" },
    { name: "emoji2", image: "image/emoji2.jpeg" },
    { name: "emoji3", image: "image/emoji3.jpeg" },
    { name: "emoji4", image: "image/emoji4.jpeg" },
    { name: "emoji5", image: "image/emoji5.jpeg" },
    { name: "emoji6", image: "image/emoji6.jpeg" },
    { name: "emoji7", image: "image/emoji7.jpeg" },
    { name: "emoji8", image: "image/emoji8.jpeg" },
    { name: "emoji9", image: "image/emoji9.jpeg" },
    { name: "emoji10", image: " image/emoji10.jpeg" },
    { name: "emoji1", image: "image/emoji1.jpeg" },
    { name: "emoji2", image: "image/emoji2.jpeg" },
    { name: "emoji3", image: "image/emoji3.jpeg" },
    { name: "emoji4", image: "image/emoji4.jpeg" },
    { name: "emoji5", image: "image/emoji5.jpeg" },
    { name: "emoji6", image: "image/emoji6.jpeg" },
    { name: "emoji7", image: "image/emoji7.jpeg" },
    { name: "emoji8", image: "image/emoji8.jpeg" },
    { name: "emoji9", image: "image/emoji9.jpeg" },
    { name: "emoji10", image: " image/emoji10.jpeg" },
  ];
  cardChoosen = [];
  cardChoosenId = [];
  var cardWon = [];
  const result = document.getElementById("result");
  const board = document.getElementById("board");

  cards.sort(() => 0.5 - Math.random());


    if(result.innerHTML=="congratulations! you won"){
        document.getElementById("refresh").style.display = "block";
        refresh.addEventListener("click",refresh);
    }


  function creatcard() {
    for (i = 0; i < cards.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "image/blank.jpeg");
      card.setAttribute("data-value", i);
      card.setAttribute("class", "card");
      card.addEventListener("click", flipcard);
      board.appendChild(card);
    }
  }
  function flipcard(event) {
    var cardClicked = event.target.getAttribute("data-value");
    cardChoosen.push(cards[cardClicked].name);
    cardChoosenId.push(cardClicked);
    event.target.setAttribute("src", cards[cardClicked].image);
    if (cardChoosen.length == 2) {
      setTimeout(win(), 500);
    }
  }

  function win() {
    let firstCard = cardChoosenId[0];
    let secondCard = cardChoosenId[1];
    var currentCard = document.querySelectorAll("img");
    if (cardChoosen[0] == cardChoosen[1]) {
      alert("you found a match");
      currentCard[firstCard].setAttribute("src", "image/page1.jpg");
      currentCard[secondCard].setAttribute("src", "image/page1.jpg");
      cardWon.push("1");
    } else {
      alert("Beter luck next time!");
      currentCard[firstCard].setAttribute("src", "image/blank.jpeg");
      currentCard[secondCard].setAttribute("src", "image/blank.jpeg");
    }
    cardChoosen = [];
    cardChoosenId = [];
    result.innerHTML = cardWon.length;
    if (cardWon.length == cards.length / 2) {
      result.innerHTML = "congratulations! you won";
    }
  }
  
//   function refresh(){
//     creatcard()
//     cardChoosen = [];
//     cardChoosenId = [];
//     var allCard = document.querySelectorAll("img");
//     allCard.setAttribute("src", "image/blank.jpeg");
//     result.innerHTML = 0;
//   }
  
  creatcard();
});