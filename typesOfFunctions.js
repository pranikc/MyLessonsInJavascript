/**
 * Created by pranikchainani on 9/23/16.
 */

var foo = function() {
    console.log("foo is called");
} // preferred way

function foo2() {
    console.log("foo2 is called");
}

var foo3 = function foo3() {
    console.log("foo3 is called");
}

foo()
foo2()
foo3()