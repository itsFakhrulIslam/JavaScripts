// !string to number
var age = '24'

console.log(age);                           //ans: string value
console.log(Number(age));                   //ans: convert string to number
console.log(Number.parseInt(age));          //ans: convert string to integer number
console.log(Number.parseFloat(age));        //ans: convert string to floating number
console.log(Number.parseFloat(age));        //ans: convert string to floating number

// !number to string 
var number = 25

console.log(number.toString());

// !boolean to string
var bool = true

console.log(bool.toString());

// !NaN to string 
console.log(NaN.toString());

// !infinity to string
console.log(Infinity.toString())

// !infinity to boolean
console.log(Boolean(Infinity)); //ans: true
console.log(Boolean(-Infinity)); //ans: true
