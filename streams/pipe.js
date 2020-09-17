var myWrite = require('./simpleWrite.js');
var myRead = require('./custReadStream.js');

let writer = new myWrite();
let myReader = new myRead();

myReader.name = "Default Reader";
writer.on('pipe', (src) => {

    console.log(`${src.name} is piping into a Writable Stream`);
});
myReader.on('end', () =>{
    console.log("Stream has ended");
});

myReader.pipe(writer);
