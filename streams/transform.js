var stream = require('stream');


class JSONstream extends stream.Transform{

    constructor(options){
	super(options);
    }

    _transform(data, encoding, callback){
	let object = data ? JSON.parse(data.toString()) : "";
	this.emit("object", object);
	object.handled = true;
	this.push(JSON.stringify(object));
	callback();
    }

    _flush = function(cb){
	cb();
    }

    
}

var  test = new JSONstream();
test.on("object", function(object) {
    console.log(`Name: ${object.name}`);
    console.log(`Color: ${object.color}`);
});

test.on("data", function(data){
    console.log(`Data: ${data.toString()}`);
});

test.write('{"name":"Jake", "color":"green"}');



