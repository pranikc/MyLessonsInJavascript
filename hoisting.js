/**
 * Created by pranikchainani on 9/25/16.
 */

function foo() {
    console.log("Foo is called");
};

foo();

function foo(){
    console.log("Foo redefined");
}

function foo(){
    console.log("Foo is once again redefinied");
}

foo();

//hoisting - the defintion of the second foo overwrites the definition of the first foo