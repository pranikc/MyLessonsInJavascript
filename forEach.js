/**
 * Created by pranikchainani on 10/7/16.
 */

var numbers = [1,2,3,4,5,6,7,8,9];

// numbers.forEach( function(e) {console.log(e);}); // stream of variables
// numbers.forEach( (e) => console.log(e));

var printNumber = function(e) {console.log(e);};

var add = (partialResult, e) => partialResult +e

var result = numbers.filter(e => e % 2 == 0)
                    .map(e => e * 2)
                    .reduce(add);
console.log(result);