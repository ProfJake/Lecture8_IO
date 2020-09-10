/*
Jake Levy
Sept 2020
JS objects look like JSON but there are key differences:

JS objects are bundled K-V pairs | JSON is bundled but stringified K-V pairs
JS Objects can have functionality | JSON is just a formatted set of strings
JS Objects are for internal program use | JSON is for data exchange
JS Objects are only for JS | JSON is platform independent

We can convert back and forth between JSON and JS Objects with methods:

JSON.parse(String) will create a JS object from properly formatted strings
JSON.stringify(Object) will create a JSON object from a JS Object
*/

var tracker = require("tracker");
var swimmingOBJ = new tracker("Swimming", 200, 5, 60 );

console.log(`Calories Burned: ${swimmingOBJ.calculate()}`);

var swimSTR =  JSON.stringify(swimmingOBJ);

console.log(swimSTR);

var newSwim = JSON.parse(swimSTR);

console.log(`Swam for ${newSwim.time} minutes`);
//Notice that stringifying the object kills the function

//Uncomment the first part of the following line to see what I mean
//console.log(`Calories Burned: ${newSwim.calculate()}`); //this is an error

//JSON cannot hold functions.  So when you restore your objects from saved data
//either a file or from a DB, you will have to construct a corresponding JS
//object

//There are "hacks" arund this but none of them are good or pleasant to look
//at.  JSON should "lightweight". The best thing to do, if you need to
//restore an object's functionality is to create a new instance from the data
//that is being restored.  

var goodSwim = new tracker(newSwim.exercise.type, newSwim.weight, newSwim.distance, newSwim.time);

console.log(`Calories Burned: ${goodSwim.calculate()}`);
