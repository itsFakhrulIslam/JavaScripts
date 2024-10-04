//! if condition use the Logic operation, logic sign is().
let a = 10;
let b = 20;

if (a > b) {
  console.log(`${a} is greater than ${b}`);
}

if (a < b) {
  console.log(`${b} is greater than ${a}`);
}

//* tow number compare even/odd
let number = 2;
if (number % 2 === 0) {
  console.log(`${number} is even number`);
}

if (number % 2 === 1) {
  console.log(`${number} is odd number`);
}

//* tow person compare who's elder/junior.
let miraj = 40;
let yousuf = 35;

if (miraj > yousuf) {
  console.log(`Miraj age ${miraj} is elder than Yousuf age ${yousuf}`);
}
if (miraj < yousuf) {
    console.log(`Miraj age ${miraj} is junior than Yousuf age ${yousuf}`);
}
