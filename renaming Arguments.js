/**
 * Created by pranikchainani on 9/25/16.
 */

var max = function(...numbers){

    var largest = numbers[0];

    for (var i = 0; i < numbers.length; i++) {
        if(numbers[i] > largest)
            largest = numbers[i];
    }

    return largest;
}

console.log(max(5,6,7));

console.log(max(1,12,3,4,5,6,7,8,9));

console.log(max(123,11,141,0,12));