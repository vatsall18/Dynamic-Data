var name = "Vatsal Lahoti"
var myNumber = 18;
const port = 3000;
// Objects
var car = {
    make:"Audi",
    model:"A5",
    year:2023
}
// function/method that returns a value
function addTwo(somenumber) {
    return somenumber + 2;
}
// functions that perform a task
function outputsomething(output) {
    console.log("You wrote " + output)
}

outputsomething("Write something here.. I'm having fun with node!");

//var result = addTwo(10);
//outputsomething(result);

outputsomething(addTwo(10));

// Acces item from object using period - .
console.log(car.make);
console.log("My name is " + name + "and my fav no. is " + myNumber);