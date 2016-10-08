// var display;
//
// var getId = function(id)// a function that stores the value of display for success and failure's use
// {
//     display = document.getElementById(id);
//     locateme();
// }

var success = function (display, position) { // has been modified to take two parameters as input
    display.innerHTML = position.coords.latitude + ":" + position.coords.longitude;
};

var failure = function(display, err) {
    display.innerHTML = err.message;
};

var locateme = function(display) {
    navigator.geolocation.getCurrentPosition(success.bind(null ,display), failure.bind(null, display)); //-> Needs 2 functinos that take only one parameter as input
};

// change a function that takes 2 parameters into a function that takes 1 para
