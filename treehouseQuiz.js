/*
5 questions
keep track of questions answered correctly
Provide final message letting player know how many questions answered correctly
rank, 5 correct gold, 3-4 silver, 1-2 bronze, 0 - no rank
*/
var correct = 0;
document.write('<h1>State Capital Trivia</h1>');
var answer1 = prompt('What is the capital of Washington?');
if (answer1.toLowerCase() === 'olympia') {
  correct +=1;
  console.log(correct);
}
var answer2 = prompt('What is the capital of Minnesota?');
if (answer2.toLowerCase() === 'st. paul' || answer2.toLowerCase() === 'st paul') {
  correct +=1;
}
var answer3 = prompt('What is the capital of New York?');
if (answer3.toLowerCase() === 'albany') {
  correct +=1;
}
var answer4 = prompt('What is the capital of Wisconsin?');
if (answer4.toLowerCase() === 'madison') {
  correct +=1;
}
var answer5 = prompt('What is the capital of California?')
if (answer5.toLowerCase() === 'sacramento') {
  correct +=1;
}
console.log(correct);
document.write('<p>You answered ' + correct + ' questions correctly out of 5</p>');
if (correct >= 5) {
  document.write('<p>Good Job. You\'ve earned a Gold Crown</p>')
} else if (correct >= 3) {
  document.write('<p>Fine job. You have earned a Silver Crown</p>')
} else if (correct >= 1) {
  document.write('<p>You need to brush up on your capitals! But you have still earned a Bronze Crown.</p>')
} else{
  document.write('<p>Yikes. You got no questions right.</p>')
}

//second quiz using arrays
function print(message) {
  document.write(message);
}

var questions = [
    ['What is the capital of Washington?', 'olympia'],
    ['What is the capital of Wisconsin?', 'madison'],
    ['What is the capital of New York?', 'albany']
];

var answersList = [
  ['Correct Answers: '],
  ['Wrong Answers: ']
];

var answersGiven;

while (true){
  for (var i = 0; i< questions.length; i+=1){
    var answer = prompt(questions[i][0]);
    if (answer.toLowerCase() == questions[i][1]){
      answersList[0].push(answer);
    } else {
     answersList[1].push(answer);
    }
  }
  if (answersGiven < questions.length){
   answersGiven +=1;
  } else {
   print("<h1>Here are your results!</h1>" + "<br>" + answersList[0] + "<br>" + answersList[1]);
   break;
  }
}

//my quiz
function print(message) {
  document.write(message);
}

var questions = [
    ['What is the capital of Washington?', 'olympia'],
    ['What is the capital of Wisconsin?', 'madison'],
    ['What is the capital of New York?', 'albany']
];

var question;
var answer;
var response;
var html;
var correctAnswers = 0;

for (var i = 0; i < questions.length; i+=1){
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = response.toLowerCase();
  if(response === answer){
     correctAnswers +=1;
     }
 }

html = 'You got ' + correctAnswers + ' question(s) right.';
print(html);

//updated quiz
function print(message) {
 var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

var questions = [
    ['What is the capital of Washington?', 'olympia'],
    ['What is the capital of Wisconsin?', 'madison'],
    ['What is the capital of New York?', 'albany']
];

var correct = [];
var wrong = [];

var question;
var answer;
var response;
var html;
var correctAnswers = 0;

function buildList(arr){
  var listHTML = '<ol>';
  for(var i = 0; i < arr.length; i++){
    listHTML += '<li>' + arr[i] + '</li>';
  }
    listHTML += '<ol>'
    return listHTML;
  }


for (var i = 0; i < questions.length; i+=1){
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = response.toLowerCase();
  if(response === answer){
     correctAnswers +=1;
      correct.push(question);
    } else {
    wrong.push(question);
 }
}

html = 'You got ' + correctAnswers + ' question(s) right.';
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);
