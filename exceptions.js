var divide = function(numerator, denominator){
    if (denominator == 0){
        throw "you gave a zero, are you stupid??";
    }

    return numerator/denominator;
};

//console.log(divide(5,0));

console.log(divide(10,3));

try {
    console.log(divide(1,1));
} catch(ex) {
    console.log(ex);
} finally {
    console.log("I will run no matter what, exception or not");
}