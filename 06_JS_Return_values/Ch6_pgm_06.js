// A collection of functions that return values

var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I’m going on an adventure!"; 
};

getHelloTo = function (name) {
    console.log( "Hello to " + name);
};

getHelloTo("Dax");

sum = function (number1, number2) {
    console.log( number1 + number2);
};

sum(30, 21);
sum(44, 66);

totalCost = function (callOutCharge, costPerHour, numberOfHours) {
    console.log(callOutCharge + costPerHour * numberOfHours);
};

totalCost(30, 50, 4);
totalCost(70, 25, 8);


/* Further Adventures
 *
 * 1) Run the program.
 *
 * There is nothing logged to the console.
 * However, the functions will now be
 * available for calling.
 *
 * 2) At the console prompt, type
 *    getMessage()
 *    and press enter.
 *
 * The return value of the function is
 * logged to the console.
 *
 * 3) At the console prompt, type
 *    getHelloTo("Dax")
 *    and press enter.
 *
 * The argument, "Dax", forms part of the
 * return value.
 *
 * 4) Call the getHelloTo function
 *    with different arguments.
 *
 * 5) Call the sum and totalCost functions,
 *    using different arguments each time.
 *
 */