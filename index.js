// Code your solutions in this file
function writeCards(names, event) {
  let thankYouCards = [];
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
}


const cards = writeCards(["Charlie", "Samip", "Ali"], "birthday");
console.log(cards);
function countDown(startingNumber) {
  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}


countDown(10);
