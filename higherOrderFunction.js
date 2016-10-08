/**
 * Created by pranikchainani on 10/1/16.
 */
var list = [1, 3, 2, 3, 4, 5, 6, 7, 8, 10];

var totalSelectedValues = function (list, selector) {
    // var total = 0;
    //
    // for (var i = 0; i < list.length; i++) {
    //     if(selector(list[i])) {
    //         total += list[i];
    //     }
    // }
    //
    // return total;

    var add = function (a, b) { return a+b; }

    return list.filter(selector)
                .reduce(add);
}

console.log(totalSelectedValues(list, function(e) {return e % 2 === 0 }));
console.log(totalSelectedValues(list, function(e) {return e % 2 !== 0 }));
console.log(totalSelectedValues(list, function(e) {return true}));