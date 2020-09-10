
//This is another way to use a require statement
//This will auto-decompose the module and grab the export you want
const { Readable } = require('stream');

/*
A Simple custom ReadStream.  Data source could be any valid buffer.
Chunks can be whatever you want to them to be. Here I made chunks
into whole words from a String.
Jake Levy
Sept 2020

Extending a writable Stream would be similar but you would implement _write*/
class custReadStream extends Readable{

    constructor(options){

	super(options);
	this._count = 0;
	this._max= 10;
	this._source = "This is a test Source";
    }

    _read(){

	let i = this._count;
	var word = '';
	if (i > this._source.length){
	    this.push(null);//end the stream at 10 chars or more
	}else{
	    while (this._source[i] != ' ' && i < this._source.length){
		word+=this._source[i];
		i++;
	    }
	
	    this.push(word);
	    this._count = i + 1;
	}
	this.emit('word', word); //emit a custom event to tell me I'm
	//done. 
    }
}
module.exports = custReadStream;
var custom = new custReadStream();

custom.on('word', (chunk) => {
    console.log("Chunk: "+ chunk);
    
});

custom._read();//reads the whole stream
