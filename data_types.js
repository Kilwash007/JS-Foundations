// //1. Number (any positive or negative integer, including floats/decimals)
// let num = 7.0;
// num = 7;
// num = -7;
// num = "Joshua";
// console.log(typeof num);

// //Addition
// //Subtraction
// //Multiplication
// //Division
// //Remainders

// //2. Strings (must be enclosed by quatation notes "")
// let str = "___@sohfwt45twf4twrf";
// console.log(typeof str);

// //3. Booleans (true/false)
// let bool = true;
// console.log(typeof bool);

// console.log(7 * "4");

// //4. Null
// let n = null;
// console.log(typeof n);

// let m;
// console.log(typeof m);

// console.log(0 / 0);
// console.log("Something is string" * 4);
// console.log(1 / 0);

// var num1 = 0;
// var num2 = 5;
// num++;
// num2--;
// var sum = num1 + num2;
// var result = sum ** 2;
// console.log(result);

// var a = 5;
// var b = 3;
// a += b;
// console.log(a);
// a -= b;
// console.log(a);
// a %= b;
// console.log(a);

// var a = 3;
// a += 2;
// a -= 1;
// a **= 2;
// a /= 4;
// a %= 3;
// var result = a;
// console.log(result);

// var x = 5;
// var y = "5";

// var z = 0;
// var a = 10;

// console.log(Boolean(x != y));
// console.log(x <= a && z !== y);
// console.log("Hi" && "Hey");

/*console.log(null === true);
console.log(!!NaN == !!undefined && 6 >= !!Infinity);*/

function Greet(Name) {
  return `Hello ${Name.toUpperCase()}`;
}
console.log(Greet("Joshua"));

const greet = (name) => `Hello ${name.toUpperCase()}`;

console.log(greet("Joshua"));

function checkIFnumber(x) {
  if (typeof x === "number") {
    console.log(x + " is a number");
  } else {
    console.log("Ops that is not a number.");
  }
}
checkIFnumber(5);
checkIFnumber("5");
checkIFnumber();

function decodeColor(code) {
  if (code === 1) {
    console.log("Red");
  } else if (code === 2) {
    console.log("Green");
  } else if (code === 3) {
    console.log("Yellow");
  } else {
    console.log("Unknown code");
  }
}
decodeColor(1);
decodeColor(2);
decodeColor(3);
decodeColor("Joshua");
