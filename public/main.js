const Card = function (value, name, suit) {
  this.value = value;
  this.name = name;
  this.suit = suit;
}

const Deck = function () {
  this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
  this.cards = new Array();

  for (let s = 0; s < this.suits.length; s++) {
    for (let n = 0; n < this.names.length; n++) {
      this.cards.push(new Card(n + 1, this.names[n], this.suits[s]));
    }
  }

  console.log(this);

  const randomNum = function (min, max) {
    return Math.floor(Math.random() * (max - min ));
    console.log(min);
  }

  const Shuffle = function (deck) {
    temp = [];
    for(i = 0; i < deck.length; i++) {
      
    }
  }
}

const main = () => {
  deck = new Deck();
}


document.addEventListener('DOMContentLoaded', main)
