/**
 * Created by pranikchainani on 9/25/16.
 */
var foo = function () {
    console.log("FOO is defined");
}

foo();

var foo = function() {
    console.log("Redefining Foo");
};

foo();