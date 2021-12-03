'use strict';

console.log('hello world');


// user name question
let user = prompt('HI!' + ' What is your name?');
console.log('user name is ' + user);
alert('Excellent name, ' + user + '! Now, let\'s talk about me.');


let score = 7;


// question one correct answer yes
let answerOne = prompt('Did I serve in the military?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
      //console.log('Yes, I did some time in the Navy.');
      alert('Yes, I did some time in the Navy!');

} else {
      alert('Hmm I did serve in the navy.');
      score--;
}

let answerTwo = prompt('Do I have a dog?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
      //console.log('Indeed, her name is Phoebe.');
      alert('Indeed, her name is Phoebe!');

} else {
      alert('Well I do have a dog and Phoebe is her name.');
      score--;

}
let answerThree = prompt('Did I go to College?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
      //console.log('Of course, I went to The Academy of Contemporary Music @ the University of Central Oklahoma. And yes, it is a mouthful.);
      alert('Of course, I went to The Academy of Contemporary Music @ the University of Central Oklahoma. And yes, it is a mouthful.');

} else {
      alert(`Nope, I am a learned individual.`);
      score--;
}

let answerFour = prompt('Did I live in Oklahoma?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
      //console.log('Yes. I don't recommend it.');
      alert('Yes. I don\'t recommend it.');

} else {
      alert(`Nope, I am sooner born and sooner bred... I guess.`);
      score--;

}
let answerFive = prompt('Do I like music?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
      //console.log('Oh most definitely.');
      alert('Oh most definitely.');

} else {
      alert(`Do you even shoegaze?`);
      score--;
}


function guessGame() {
      let attemptsRemain = 3;
      let bingo = 42;
      let i;
      for (i = 0; i <= attemptsRemain; i++) {
            let numGame = prompt(`${user}, what number am I thinking? You have four guesses.`);

            console.log(numGame)
            console.log(i)

            if (numGame == bingo) {
                  alert('Bingo, you must have read my mind!');
                  break;

            } else if (numGame > bingo) {
                  alert(`That guess is too high ${user}. Try again`);
                  //      attemptsRemain--;
                  score--;

            } else if (numGame < bingo) {
                  alert(`That guess is too low ${user}. Try again`);
                  //      attemptsRemain--;
                  score--;

            } if (i == 2) {
                  alert('Hint: It is the answer to the ultimate question of life, the universe, and everything.');

            } if (i == attemptsRemain) {
                  alert(`Sorry ${user}. You are out of attempts. The number I was thinking was 42.`);
                  

            }
      }
}

guessGame()

function multGame() {

}

multGame()


console.log(score);

//while (let i = 0; i < 3 );{

//alert('Bingo, you must have read my mind!');
//alert('Please try again.');
//}
//let attempts = [0,1,2,3,4,5,6,]
//for (let i = 0; i > attempts;){ 

//}


      //console.log('You must have read my mind!');
      //if (answerSix === '42');
