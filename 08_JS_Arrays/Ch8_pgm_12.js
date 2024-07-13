// Displaying a multiple choice question

var displayQuestion = function (questionAndAnswer) {
    var options = [ "A", "B", "C", "D", "E" ];
    
    console.log(questionAndAnswer.question);
    
    questionAndAnswer.answers.forEach(
      function (answer, i) {
        console.log(options[i] + " - " + answer);
      }
    );
  };
  
  var question1 = {
    question : "What is the capital of France?",
    answers : [
      "Bordeaux",
      "F",
      "Paris",
      "Brussels"
    ],
    correctAnswer : "Paris"
  };

  var question2 = {
    question: "What is the tallest mountain in the world?",
    answers: [
        "K2",
        "Mount Everest",
        "Kangchenjunga",
        "Lhotse"
    ],
    correctAnswer: "Mount Everest"
};

var question3 = {
    question: "Which planet is known as the Red Planet?",
    answers: [
        "Venus",
        "Earth",
        "Mars",
        "Jupiter"
    ],
    correctAnswer: "Mars"
};
  
var questions = [question1, question2, question3];

questions.forEach(displayQuestion);

  
  
  
  /* Further Adventures
   *
   * 1) Add two more question objects.
   *
   * 2) Create an array with your question objects.
   *
   * 3) Use forEach to call displayQuestion on
   *    each of your questions.
   *
   * 4) Can you execute a command at the prompt
   *    to display a particular question?
   */