// Using Math.min and Math.max

var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(smaller + " is smaller than " + larger);
};

showSmaller(12, 3);
showSmaller(-10, 3);
showSmaller(20, 10);
showSmaller(-30, -10);

var showLarger = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);

    console.log(larger + " is larger than " + smaller);
};

showLarger(12, 3);
showLarger(-10, 3);
showLarger(7, 7);
showLarger(100, 0);

var showSmaller = function(num1, num2 ,num3){
  var smaller = Math.min(num1, num2, num3);
  console.log(smaller + "is the smallest of" + num1 + "," + num2 + ", and" + num3)
};

showSmaller(12, 34, 6);
showSmaller(122, 450, 30);
showSmaller(100, 0, 40);
showSmaller(1000, 15, 20);




/* Further Adventures
 *
 * 1) Try out some different arguments.
 *
 * 2) Write a showLarger function.
 *
 * 3) Write a showSmallest function that takes
 *    three arguments and displays the smallest
 *    of the three.
 *
 */