/**
 * Created by pranikchainani on 9/25/16.
 */

var greet = function (name1, name2, name3, name4) {
    console.log(this + ' ' + name1 + ' ' + name2 + ' ' + name3 + ' ' + name4);
};

greet.call('BonJour','Karthikk', 'Dhandapani');

var names = ['Mohammad', 'Abdul', 'Iman', 'Rasool'];

greet.call('BienVien', names[0], names[1], names[2], names[3]);

greet.apply('Guten Morgen', names);

