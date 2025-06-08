var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1];
var sum = 0;
var i = 0;
while (i < numbers.length) {
  sum += numbers[i];
  i += 1;
}
console.log("The loop was executed " + i + " times");
console.log(sum);
