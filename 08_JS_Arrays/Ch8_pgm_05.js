// Passing an array to a function

var getVisitorReport = function (visitorArray, dayInWeek) {
	var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
  ];
	var index = dayInWeek - 1;
	var visitorReport;

	visitorReport = "There were ";
  visitorReport += visitorArray[index];
  visitorReport += " visitors ";
	visitorReport += "on " + days[index];

	return visitorReport;
};

var visitors = [ 354, 132, 210, 221, 481, 512, 376 ];

var report = getVisitorReport(visitors, 5);

console.log(report);

var getMonthlyVisitorReport = function (monthArray, week, day) {
  var weekVisitors = monthArray[week - 1];
  return getVisitorReport(weekVisitors, day);
};


var week1 = [354, 132, 210, 221, 481, 512, 376];
var week2 = [400, 250, 300, 180, 520, 430, 390];
var week3 = [380, 260, 270, 310, 500, 460, 420];
var week4 = [410, 290, 320, 230, 540, 470, 410];

var month = [week1, week2, week3, week4];

console.log(getMonthlyVisitorReport(month, 2, 5)); 
console.log(getMonthlyVisitorReport(month, 1, 7)); 
console.log(getMonthlyVisitorReport(month, 3, 3)); 
console.log(getMonthlyVisitorReport(month, 4, 6));



/* Further Adventures
 *
 * 1) Run the report for Friday.
 *
 * 2) Update the function to include Saturday and Sunday.
 *
 * A month of visitor info could be represented as an
 * array of arrays: [ week1, week2, week3, week4 ]
 * where each week could be an array of visitor numbers.
 *
 * 3) Write a new function with three parameters,
 *    the month array, the week wanted and the day wanted.
 *    The new function should return the visitor report specified.
 *    You can call getVisitorReport from your function if you want.
 *
 * 4) Create four arrays of week visitor numbers
 *    and a month array of the four weeks.
 *    Test your function from 3) for different weeks and days.
 *
 */