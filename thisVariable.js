/**
 * Created by pranikchainani on 9/25/16.
 */

var greet = function (name) {
    console.log(this + ' ' + name);
};

greet('sudarshan');

greet.call('Hello', 'Jill', 'a;alskdj');

greet.call('Howdyo®');

// this refers to a context object within a function

var Car = function () {
    this.miles = 0; // this refers to a context object within a Class
};

var car = new Car();

console.log(car.miles);