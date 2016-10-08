/**
 * Created by pranikchainani on 10/7/16.
 */
var numbers = [11,22,33,44,55,66,77,88,99,101];

var report = function( partial, element, index) {
    console.log(partial + ' ' + element + ' ' + index);
    return element;
}

numbers.reduce(report, 100);

console.log(numbers.reduce((a,b) => a+b, 0));
console.log(numbers.reduce((a,b) => a+b, 1000));