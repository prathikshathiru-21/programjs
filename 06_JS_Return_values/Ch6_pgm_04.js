// Returning the sum of two numbers

var add;

add = function (number1, number2) {
	var total = number1 + number2;

	return total;
};

var sum = add(210, 300);

console.log(sum);
console.log("The sume of 50 and 23 is:" + add(50, 23));

var nestedSum =add(30, add(40, add(70, 80)));
console.log(nestedSum);

var addThreeNumbers = function (num1, num2, num3){
	var sum = num1 + num2 + num3;
	return sum;
}

console.log(addThreeNumbers(21,50,76));



/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */