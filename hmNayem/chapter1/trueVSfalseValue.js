// !Falsy values
'', "", ``
0 
null
undefined
NaN

console.log(Boolean(''));               //ans: false, because have no value
console.log(Boolean('miraj'));          //ans: true, because has a value

console.log(Boolean(0));                //ans: false, because 0 by default false
console.log(Boolean(123));              //ans: true, because has a value

console.log(Boolean(null));             //ans: false, because by default set the 'null' value so this is false 
console.log(Boolean(undefined));        //ans: false, because have no value set the undefined so its called false.



// N.B those values falsy value, this value without everything is truthy values