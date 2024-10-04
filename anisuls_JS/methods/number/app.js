//=> (*, !, ?, TODO, @param) better comments styles.

//! JavaScript Number Methods
/*
?Method	            Description
toString()	        Returns a number as a string
toExponential()	    Returns a number written in exponential notation
toFixed()	        Returns a number written with a number of decimals
toPrecision()	    Returns a number written with a specified length
valueOf()	        Returns a number as a number
*/

// * toString()
// TODO: The toString() method returns a number as a string
let a = 123;
console.log(a); //still number answer output
console.log(a.toString()); // number convert to string

// * toExponential()
// TODO: toExponential() returns a string, with a number rounded and written using exponential notation.
let b = 9.0123;
console.log(b.toExponential(1));
console.log(b.toExponential(3));
console.log(b.toExponential(5));

// * toFixed()
// TODO: toFixed() returns a string, with the number written with a specified number of decimals
let c = 9.0123
console.log(c.toFixed(0)); // toFixed()==toFixed(0) both are same.
console.log(c.toFixed(2));
console.log(c.toFixed(4));
console.log(c.toFixed(8)); // extra when init the result 0000


// * toPrecision
// TODO: toPrecision() returns a string, with a number written with a specified length
let d = 9.0123
console.log(d.toPrecision(2));
console.log(d.toPrecision(4));
console.log(d.toPrecision(8));



// * valueOf()
// TODO: valueOf() returns a number as a number.
let e = 123
