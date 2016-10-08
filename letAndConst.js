/**
 * Created by pranikchainani on 9/23/16.
 */

'use strict';

var foo = function () {
    var local1 = 2;
    const local3 = 6;

    {
        let local2 = 4;
        // local3 = 5; // Produces an error
    }

    console.log("The number is "+ local3);
    // console.log("The number is "+ local2); // Produces an error
}


foo();