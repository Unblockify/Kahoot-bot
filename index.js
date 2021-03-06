var Kahoot = require('kahoot.js');
var client = new Kahoot;
var NameGenerator = require('nodejs-randomnames');
var randomName = NameGenerator.getRandomName();
var game_pin = 6039738;
var randomnumber = Math.round(Math.random() * 3);

console.log("Joining kahoot...  ");
client.join(game_pin, randomName);
client.on("joined", () => {
    console.log("I joined the Kahoot!");
});
client.on("questionStart", question => {
    console.log("A new question has started, answering the first answer.");
    question.answer(randomnumber);
    randomnumber = Math.floor(Math.random() * 3);
});
client.on("quizEnd", () => {
    console.log("The quiz has ended.");
});
