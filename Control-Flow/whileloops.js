var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
var i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i += 1;
}
console.log("The loop was executed " + i + " times");
console.log(sum);

// Creating an Object
//1. Initializing an object literal with curly brackets
const objectLiteral = {};

//2. Initialzing an object constructor with new Object
const objectConstructor = new Object();

//example

const gimli = {
  name: "Gimli",
  race: "dwarf",
  weapon: "axe",
  greet: function () {
    return `Hi, my name is ${this.name}. I am a ${this.race} and I use ${this.weapon} as my weapon`;
  },
};
console.log(gimli.greet());
