/*
simpleWrite.js
An Example of a very simple write Stream in ES6.
Jake Levy
Sept 2020

writable streams are really common tools for communicating over the
web and using the local file system. We'll see examples of both
very soon but for now, understand the concept.
*/var { Writable} = require('stream');


class customWrite extends Writable{

    constructor(opt){
	super(opt);
	this.data = new Array();
    }

    _write(chunk, encoding, callback){
	this.data.push(chunk.toString());
	console.log(`Adding ${chunk}`);
	callback();
    }
}

var myWrite = new customWrite();

myWrite.write("This");
myWrite.write(" is");
myWrite.write(" a");
myWrite.write(" simple");
myWrite.write(" example");

console.log(myWrite.data);

module.exports = customWrite;
