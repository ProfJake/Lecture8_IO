/*reading.js
Demo file for how to read from Buffer structures
Jake Levy
Sept 2020

Buffers are array like, except once created they cannot be resized 
and they only hold bytes.
*/var someStr = "This is a dummy string";

let myBuff = Buffer.from(someStr, 'utf8');
console.log(myBuff);


myBuff[8]= 0x7A;

console.log(myBuff);

console.log(myBuff.toString('utf8'));

