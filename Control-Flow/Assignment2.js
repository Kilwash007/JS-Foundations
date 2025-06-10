// 1Write a function checkNumber(num) that returns:
function checkNumber(num) {
  if (num > 0) {
    return `Positive`;
  } else if (num < 0) {
    return `Negative`;
  } else {
    return `Zero`;
  }
}
console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));

// 2 Write a function isEvenOrOdd(num) that returns "Even" if the num is even or "Odd" if it's odd

function isEvenOrOdd(num) {
  if (num % 2 == 0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}
console.log(isEvenOrOdd(4));
console.log(isEvenOrOdd(7));

// 3 Grade Evaluator
//Create a function getGrade(score) that returns a grade based onthis scale:
//A: 90-100
//B: 80-89
//C: 70-79
//D: 60-69
//F: below 60
function getGrade(score) {
  switch (true) {
    case score >= 90 && score <= 100:
      return `A`;
    case score >= 80 && score <= 89:
      return `B`;
    case score >= 70 && score <= 79:
      return `C`;
    case score >= 60 && score <= 69:
      return `D`;
    default:
      return `F`;
  }
}
console.log(getGrade(95));
console.log(getGrade(73));
console.log(getGrade(50));

//4 Maximum of Two Numbers
//Write a function getMax(a, b) that returns the larger of the two numbers
function getMax(a, b) {
  switch (true) {
    case a > b:
      return a;
    case b > a:
      return b;
    default:
      return "equal";
  }
}
console.log(getMax(5, 8));
console.log(getMax(10, 3));
console.log(getMax(8, 8));

//5 Leap Year Checker
//Write a function isLeapYear(year) that returns true if the year is the leap year. A leap year is divisible by 4, not by 100 unless divisible by 400

function isLeapYear(year) {
  if (year % 400 == 0) {
    return `The year is a leap year`;
  } else if (year % 100 == 0 || year % 4 !== 0) {
    return `This year is not a leap year`;
  } else {
    return `This is a leap year`;
  }
}
console.log(isLeapYear(2020));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(1994));

//6 Simple Login Validator
//Write a function login(username, password) that returns "Access Granted" if the username is "admin" and password "1234", otherwise returns "Access Denied"
function login(username, password) {
  if (username === "admin" && password === "1234") {
    return `Access Granted`;
  } else {
    return `Access Denied`;
  }
}
console.log(login("admin", "1234"));
console.log(login("user", "1234"));
console.log(login("admin", "abcd"));

//7 Traffic Light Message
//Write a funtion trafficLight(color) that returns:
function trafficLight(color) {
  switch (color) {
    case "red":
      return `Stop`;
    case "yellow":
      return `Slow down`;
    case "green":
      return `Go`;
    default:
      return `Invalid color`;
  }
}
console.log(trafficLight("green"));
console.log(trafficLight("yellow"));
console.log(trafficLight("red"));
console.log(trafficLight("blue"));

//8 Basic Calculator
// Create a function calculate(a, b, operator) that performs an operation("+", "-", "*", "/") and returns the result.

function calculate(a, b, operator) {
  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else {
    return "Invalid Choice";
  }
}
console.log(calculate(5, 3, "+"));
console.log(calculate(10, 2, "-"));
console.log(calculate(4, 5, "*"));
console.log(calculate(20, 4, "/"));

//9 Check if a Number is Prime
//Write a function isPrime(num) that returns true if the num is prime number otherwise false
function isPrime(num) {
  if (num < 2) {
    return "false";
  }
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      return "false";
    }
  }
  return `true`;
}
console.log(isPrime(7));
console.log(isPrime(10));
console.log(isPrime(9));

// 10 Rock, Paper, Scissors Game
//Write a function playRPS(player1, player2) that returns the winner based on these rules 1 Rock beats Scissors, Scissors beat Paper, Paper beats Rock or Same choice is a tie. Return "Player1 wins", "Player2 wins" or "It's a tie"

function playRPS(player1, player2) {
  switch (true) {
    case (player1 == "Rock" && player2 == "Scissors") ||
      (player1 == "Scissors" && player2 == "Paper") ||
      (player1 == "Paper" && player2 == "Rock"):
      return `Player1 wins`;
    case (player2 == "Rock" && player1 == "Scissors") ||
      (player2 == "Scissors" && player1 == "Paper") ||
      (player2 == "Paper" && player1 == "Rock"):
      return `Player2 wins`;
    default:
      return "It's a tie";
  }
}
console.log(playRPS("Rock", "Scissors"));
console.log(playRPS("Paper", "Rock"));
console.log(playRPS("Scissors", "Rock"));
console.log(playRPS("Rock", "Rock"));
