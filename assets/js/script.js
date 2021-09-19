// Question Array


var MyQuestions = [
  new Question("Javascript is which type of language?", ["Object-Oriented", "Object-Based", "Assembly Language", "High-Level"], "Object-Based"),
  new Question("The 'function and the 'variable are known as:" ["Key words", "Data type", "Declaration statemetns", "Prototypes"], "Declaration Statements"),
  new Question("Which of the following variables take precedence over the others if the names are the same?", ["Global variables", "Local variables", "Both of the Above", "None of the Above"], "Local variables"),
  new Question("Which of the following symbols is used to create comments in javascript?" ["\\", "//", "/* */", "\* */"], "/* */"),
  new Question("Javascript files have an extension of:" ["Java", "js", "javascript", "xml"], "js")
];


  function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
 
// create quiz
var quiz = new Quiz(questions);
 
// Start ad display quiz
let StartQ = document.querySelector("startQuiz");
StartQ.addEventListener("click", event => {
populate();});