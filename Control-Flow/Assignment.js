// 1. Create a function greetStudent() that returns the words "Hello Student"
// eg greetStudent() should retunr  "Hello Student"

function greetStudent() {
  return `Hello Student`;
}
console.log(greetStudent());

// 2. Create a funtion greetSpecificStudent() that takes the name of a student as input and returns the words "Hello name" where the name is the name of the student.
// eg greetSpecificStudent("Wick") should return "Hello Wick"
function greetSpecificStudent(Name) {
  return `Hello ${Name}`;
}
console.log(greetSpecificStudent("Joshua"));

//3. Create a function  calculateArea() that takes base and height as input of a triangle and returns the area.
// eg calculateArea(10, 7) should return 35

function calculateArea(base, height) {
  return 0.5 * (base * height);
}
console.log(calculateArea(10, 7));

//4. Create a function  calculatePerimeter() that takes the width and length as input and returns the perimeter.
// eg calculatePerimeter(10, 7) should return 34

function calculatePerimeter(width, length) {
  return 2 * (width + length);
}
console.log(calculatePerimeter(10, 7));

var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
var i = 0;
do {
  sum += numbers[i];
  i += 1;
} while (i < numbers.length);
console.log(sum);
