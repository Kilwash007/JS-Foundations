var i = 0;
for (; i < 5; i++) {
  console.log(i);
}
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;

//Using for... in loop
for (var i in numbers) {
  //   sum += numbers[i];
  if (i % 2 == 0) continue;
  sum += numbers[i];
}
console.log(sum);

//Using for... of loop
var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
for (var value of numbers) {
  sum += value;
}
console.log(sum);

var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
for (var i in numbers) {
  sum += numbers[i];
  if (sum >= 100) {
    break;
  }
}
console.log(sum);

// Declarng an array called storage containing 3 dfferent types
var storage = [1, "Joshua", null];
// accessing elements
console.log(storage[0]);
console.log(storage[6]);
//Array length
console.log(storage.length);

var days = ["Monday", "Tuesday", "wednesday", "Thursday", "Friday"];
console.log(days);
days.push("Saturday");
console.log(days);
days.unshift("Sunday");
console.log(days);
days.pop();
console.log(days);
days.shift();
console.log(days);
