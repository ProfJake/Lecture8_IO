var myWrite = require('./simpleWrite.js');
var myRead = require('./custReadStream.js');

let writer = new myWrite();
let myReader = new myRead();
myReader.pipe(writer);
