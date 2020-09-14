/*copying.js
File for demoing how to copy in and with buffers in Node.
APW_JS
Jake Levy
Sept 2020
*/

var nums = Buffer.from('0123456789');
var blank =  Buffer.alloc(10);  //empty, size 10
blank.fill('-'); //blank now is  ‘----------’
nums.copy(blank);// blank now is ‘0123456789’
blank.fill('-'); // reset
nums.copy(blank, 4, 4, 7); // blank is ‘----456---'
console.log("Raw Buffer Data:");
console.log(blank); //prints the raw byte data
console.log("Buffers can be converted to strings if they are encoded that way");
console.log(blank.toString('utf8')); //prints ----456---
console.log(`Interpolation works with buffer to String conversions: ${blank}`);
console.log('Adding it to a string also automatically converts it:'+ blank); 
