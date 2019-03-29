
'use strict';

console.log('JS Script linked/started.');

var userName;
var rightAnswersNum = 0;
var reply;
var yesReply = ['y','yes','true'];
var noReply = ['n','no','false'];
var visitedCountries = ['philippines','grand cayman','australia','france','dubai'];
var countryTries = 6;
var countryGuessed = false;
var numberTries = 4;
var numberGuessed = false;

var questions = [
  'Am I girl?',
  'Do I like sushi?',
  'Am I a coder?',
  'Am I an Amazon employee?',
  'Do I play an instrument?',
  'Guess the number I\'m thinking:', //4 tries
  'Guess a country I have visited:' // 6 tries
];

var answers = [
  yesReply,
  yesReply,
  yesReply,
  yesReply,
  noReply,
  '22',
  visitedCountries
];

userName = prompt('Let\'s play a guessing game about me, but first tell me youruserName.');
if(name === null ||userName === ''){
  userName = 'anonymous person';
}
alert('Welcome ' +userName + '! Let\'s proceed!');

for(var i = 0; i < 5; i++){
  reply = prompt(questions[i]).toLowerCase();
  var counter = 0;
  var answerArr = answers[i];
  while(counter < answerArr.length){
    if(reply === answerArr[counter] || reply === answers[i]){
      console.log('Correct answer was submitted');
      alert('You are right!!!');
      rightAnswersNum++;
      break;
    }else if(counter === answerArr.length - 1 && reply !== answerArr[counter]){
      console.log('Wrong answer was submitted');
      alert('Your answer is . . wrong!');
    }

    counter++;
  }
}

while(numberTries !== 0){
  reply = prompt(questions[5]).toLowerCase();
  let answerArr = answers[5];
  if(reply === answerArr){
    console.log('Correct answer was submitted');
    alert('Nice! You are right!!!');
    rightAnswersNum++;
    numberGuessed = true;
    break;
  }else if(reply !== answerArr){
    console.log('Wrong answer was submitted');
    if(reply < answerArr){
      alert('Your answer is too low! Try Again!');
    }else if(reply > answerArr){
      alert('Your answer is too high! Try Again!');
    }else{
      alert('Your answer is . . wrong! Invalid response. Try Again!');
    }

  }

  if(numberGuessed){
    break;
  }

  numberTries--;
  if(numberTries === 0){
    alert('You get no more tries for this question! Sorry T_T');
  }
}

while(countryTries !== 0){
  reply = prompt(questions[6]).toLowerCase();
  let counter = 0;
  let answerArr = answers[6];
  while(counter < answerArr.length){
    if(reply === answerArr[counter] || reply === answers[5]){
      console.log('Correct answer was submitted');
      alert('You are right!!!');
      rightAnswersNum++;
      countryGuessed = true;
      break;
    }else if(counter === answerArr.length - 1 && reply !== answerArr[counter]){
      console.log('Wrong answer was submitted');
      alert('Your answer is . . wrong! Try again!');
    }

    counter++;
  }

  if(countryGuessed){
    break;
  }

  countryTries--;
  if(countryTries === 0){
    alert('You get no more tries for this question! Sorry T_T');
    break;
  }
}


alert('You got ' + rightAnswersNum + ' out of 7 questions right. ');
