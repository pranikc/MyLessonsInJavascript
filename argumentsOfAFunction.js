/**
 * Created by pranikchainani on 9/25/16.
 */
// max o f 2 numbers
var max = function(a, b)
{
    if (a > b)
        return a;
    return b;
}

console.log(max(5, 6));

console.log(max(6,7 ,2));

console.log(max(6));

// In Javascript the caller of the functions decided the number of  arguments, the definition only tells what to do with the received arguments