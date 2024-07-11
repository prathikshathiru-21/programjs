// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var question1 = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
};

var question2 = {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
};

var question3 = {
    question: "What is the largest planet in our Solar System?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Jupiter"
};

var showQuestion;

showQuestion = function () {
    console.log(question.question);
    console.log("------------------------------");
    for (var i = 0; i < question.options.length; i++) {
        console.log((i + 1) + ": " + question.options[i]);
    }
    console.log("------------------------------");
};

var question;

question = question1;
showQuestion();

question = question2;
showQuestion();

question = question3;
showQuestion();


/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */