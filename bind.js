/**
 * Created by pranikchainani on 9/25/16.
 */

var greet = function (msg, name1, name2) {
    console.log(msg + name1 + name2);
}

greet('Bonjour ', 'Dhandapani ', 'Karthikk');
greet('Bonjour ', 'Dhandapani ', 'Gayathri');
greet('Bonjour ', 'Dhandapani ', 'Megan');

var bonjourGreet = greet.bind(null, 'Bonjour ');


bonjourGreet('Dhandapani ', 'Karthikk');

bonjourGreet('Dhandapani ', 'Gayathri');

bonjourGreet('Dhandapani ', 'Megan');

var bonjourLastGreet = bonjourGreet.bind(null, 'Dhandapani ');

bonjourLastGreet('Karthikk');
bonjourLastGreet('Gayathri');
bonjourLastGreet('Hermoine');
