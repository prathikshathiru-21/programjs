// A function to create planets

var buildCar;
var getCarInfo;
var car1;
var car2;

buildCar = function  (make, model, year, color, mileage) {
    return {
        make: make,
        model: model,
        year: year,
        color: color,
        mileage: mileage
    };
};

getCarInfo = function (car) {
    return car.year + " " + car.make + " " + car.model + " (" + car.color + "), " + car.mileage + " miles";
};

car1 = buildCar("Toyota", "Camry", 2020, "Red", 15000);
car2 = buildCar("Ford", "Mustang", 2018, "Blue", 30000);

console.log(getCarInfo(car1));
console.log(getCarInfo(car2));



/* Further Adventures
 *
 * 1) Write a similar program to create and
 *    display objects that represent cars.
 *
 */