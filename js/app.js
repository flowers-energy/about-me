'use strict';

console.log('hello world');


// user name question
let user = prompt('HI!' + ' What is your name?');
      console.log('user name is' + user);
alert('Excellent name, ' + user + '! Now, let\'s talk about me.');
      
// question one correct answer yes
let answerOne = prompt('Did I serve in the military?');
if (answerOne === 'yes' || answerOne === 'y');
      //console.log('Yes, I did some time in the Navy.');
      alert('Yes, I did some time in the Navy!');

let answerTwo = prompt('Do I have a dog?');
if (answerTwo === 'yes' || answerTwo === 'y');
      //console.log('Indeed, her name is Phoebe.');
      alert('Indeed, her name is Phoebe!');

let answerThree = prompt('Did I go to College?');
if (answerThree === 'yes' || answerThree === 'y');
      //console.log('Of course, I went to The Academy of Contemporary Music @ the University of Central Oklahoma. And yes, it is a mouthful.);
      alert('Of course, I went to The Academy of Contemporary Music @ the University of Central Oklahoma. And yes, it is a mouthful.');

let answerFour = prompt('Did I live in Oklahoma?');
if (answerFour === 'yes' || answerFour === 'y');
//console.log('Yes. I don't recommend it.');
alert('Yes. I don\'t recommend it.');

let answerFive = prompt('Do I like music?')
if (answerFive === 'yes' || answerFive === 'y');
      //console.log('Oh most definitely.');
      alert('Oh most definitely.');


let attemptsRemain = 3;
let indexCount = 0;

let numGame = prompt(`${user}, what number am I thinking? You have four guesses.`);
 for (let i = 0; i < 3; i++){
       if (numGame !== 42){
             alert('Please try again.');
       }

       if (numGame == 42){
             alert('Bingo, you must have read my mind!')
       }
 }


//while (let i = 0; i < 3 );{

//alert('Bingo, you must have read my mind!');
//alert('Please try again.');
//}
//let attempts = [0,1,2,3,4,5,6,]
//for (let i = 0; i > attempts;){ 
      
//}


      //console.log('You must have read my mind!');
      //if (answerSix === '42');


