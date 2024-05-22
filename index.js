// Code your solutions in this file
const cards = ["Guadalupe", "Ollie", "Aki"];
const eventName = "Birthday"
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }

  


writeCards(cards, eventName);


function countDown(count) {
    while (count > -1) {
      console.log(count);
      count--;
    }
  }
    countDown(10);
    countDown(4);