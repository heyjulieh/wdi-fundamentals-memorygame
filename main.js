console.log("Up and running!");
//set up board
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png",
  },
  {
  rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png",
  },
  {
  rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png",
  },
  {
  rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png",
  }
];
var createBoard = function(){
var gameboard = document.getElementById('game-board');
for (var i = 0; i < cards.length; i++) {
var cardElement = document.createElement('img');
cardElement.setAttribute('src', "images/back.png");
cardElement.setAttribute('data-id', cards[i]);
cardElement.addEventListener('click', flipCard);
gameboard.appendChild(cardElement);
}
};
//flip card
var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  cardsInPlay.push(cards);
  this.innerHTML = '<img src="' + this.getAttribute('data-id') + '.jpg">'
console.log("User flipped " + cards.rank);
console.log(cards.cardImage);
console.log(cards.suit);
};

//cards in play
var cardsInPlay = [];
var checkForMatch = function(){
  this.setAttribute(src);
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again!");
  }

};


//call function
createBoard();
