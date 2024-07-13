// Finding the total shopping bill

var getTotalBill = function (itemCosts, itemCounts) {
	var total = 0;

	itemCosts.forEach(function (cost, i) {
		total += cost * itemCounts[i];
	});

	return total;
};

var costs = [ 1.99, 4.95, 2.50, 9.87 ];
var numOfEach = [ 2, 1, 5, 2 ];

console.log("The total cost is $" + getTotalBill(costs, numOfEach));

costs.push(3.75);
numOfEach.push(3);

console.log("The total cost is $" + getTotalBill(costs, numOfEach));

var getTotalBillRevised = function (itemCosts, itemCounts) {
    var total = 0;

    itemCounts.forEach(function (count, i) {
        total += count * itemCosts[i];
    });

    return total;
};
console.log("The total cost with revised function is $" + getTotalBillRevised(costs, numOfEach));

var items = [
    { cost: 1.99, numberBought: 2 },
    { cost: 4.95, numberBought: 1 },
   
];
var getTotalBillFromItems = function (items) {
    var total = 0;

    items.forEach(function (item) {
        total += item.cost * item.numberBought;
    });

    return total;
};
console.log("The total cost from items array is $" + getTotalBillFromItems(items));

/* Further Adventures
 *
 * 1) Add an extra item to the shopping trip.
 *
 * 2) Change the function so that forEach iterates
 *    over itemCounts instead of itemCosts.
 *    Can you make it work?
 *
 * 3) Create a single array of objects with
 *    cost and numberBought properties.
 *
 *    items = [ { cost: 1.99, numberBought: 2 },
 *              { cost: 4.95, numberBought: 1 } ];
 *
 * 4) Update getTotalBill to accept a single array
 *    of items.
 *
 */