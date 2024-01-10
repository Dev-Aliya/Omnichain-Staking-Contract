/*
var petDog = "Rex"
var petCat = "Pepperr"


console.log(petDog)
console.log(petCat)

console.log("My pet dog's name is: ", petDog);
console.log("My pet cat's name is: ", petCat);


var catSound = "purr"
var dogSound = "woof"

console.log(petDog, "says", dogSound)
console.log(petCat, "says", catSound)


catSound = "meow"

console.log(petCat, "says", catSound)*/



/********
 * Arithmetic operators in JS:
 *
 * + addition
 * - subtraction
 * * multiplication
 * / division
 *
 *  ***********/

/* Comparison operators in JS:
    > grater than
    < less than
    = equal
*/

// console.log(2 + 2);
// console.log(1 + 2 + 3 + 4 + 5);
// console.log(20 - 18);
// console.log(2 * 3);
// console.log(8 / 1)
// console.log(3 > 2);
// console.log(2 > 3)
// console.log(10 == 10)


// var petHungry = true

// petHungry = !petHungry

// console.log(petHungry)

// console.log(5 !== "5")

// console.log(10 > 9 > 3)


/*var score = 8

console.log("Mid-level skills:", score > 0 && score < 10)*/

/*var timeRemaining = 0
var energy = 10

timeRemaining = 10


console.log("Game over:", timeRemaining == 10 || energy == 0)*/


/*var num1 = 2
var num2 = 5
var test1 = num1 % 2
var test2 = num2 % 2
var result1 = test1 == 0
var result2 = test2 == 0

console.log("is", num1, "an even number", result1)
console.log("is", num2, "an even number", result2)*/


/*var now = "Now in"
var three = 3
var d = "D!"

console.log(now + " " + three + d)*/


/*var counter = 0
counter += 5
counter += 3
console.log(counter)*/


/*var age = 10;

if (age >= 65) {
  console.log('You get your income from your pension')
} else if (age < 65 && age >= 18) {
  console.log('Each month you get a salary')
} else if (age < 18) {
  console.log('You get an allowance')
} else {
  console.log('The value of the age variable is not numerical')
}*/


/*var day = "Thursday"

switch (day) {
  case "Monday":
    console.log("Read a book")
    break;
  case "Tuesday":
    console.log("Watch a movie")
    break;
  case "Wednesday":
    console.log("Code html, css and js")
    break;
  case "Thursday":
    console.log("Going to teach in a school")
    break;
  case "Friday":
    console.log("Going to jummuah")
    break;
  case "Saturday":
    console.log("playing game")
    break;
  case "Sunday":
    console.log("play ps and eat ")
    break;
  default:
    console.log("There is no such day")
}*/


/*for (var i = 1; i <= 5; i++) {
  console.log(i)
}
console.log(i)*/

//Loops and nested loops

/*for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + ", " + secondNum)
  }
}*/

/*for (var firstNum = 0; firstNum < 2; firstNum++) {
  for (var secondNum = 0; secondNum < 10; secondNum++) {
    console.log(firstNum + " items " + secondNum + " equals " + firstNum * secondNum)
  }
}

for (var i = 100; i > 10; i = i - 10) {
  for (var j = 10; j > 4; j = j - 5) {
    console.log(i + " divided by " + j + " equals " + i / j)
  }
}*/


/*var cubes = 'ABCDEFG';
for (var i = 0; i < cubes.lenght; i++) {
  var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
  console.log("%c" + cubes[i], styles)
}*/

/*for (var i = 1; i <= 10; i++) {
  if (i == 1) {
    console.log("Gold medal")
  } else if (i == 2) {
    console.log("Sliver medal")
  } else if (i == 3) {
    console.log("Brone medal")
  } else {
    console.log(i)
  }
}*/


/*for (var i = 1; i <= 10; i++) {
  switch (i) {
    case 1:
      console.log("Gold Medal")
      break
    case 2:
      console.log("Sliver medal")
      break
    case 3:
      console.log("Brone medal")
      break
    default:
      console.log(i)
  }
}
*/

/*for (i = 0; i < 2; i++) {
  for (var j = 0; j < 3; j++) {
    console.log("Hello")
  }
}*/

/*function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i])
  }
}

var colors = ['red', 'range', 'yellow', 'green', 'blue', 'purple', 'pink']
listArrayItems(colors)*/

/*function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'red') {
      console.log(i * 100, "tomato!")
    } else {
      console.log(i * 100, arr[i])
    }
  }
}

var colors = ['red', 'range', 'yellow', 'green', 'blue', 'purple', 'pink']
listArrayItems(colors)
*/




/*function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i)
    } else {
      console.log('---no match found at', i)
    }
  }
}
letterFinder("test", "t")*/

/*var clothes = []
clothes.push('cap', 'shoe', 'hat', 't-shirt', 'pam')
clothes.pop()
clothes.push('polo')
console.log(clothes[2])
*/
/*var favCar = {}
favCar.color = 'red'
favCar.covertible = true

console.log(favCar)*/



/*function addTwoNums(a, b) {
  try {
    if (typeof (a) != 'number') {
      throw new ReferenceError('the first argument is not a number')
    } else if (typeof (b) != 'number') {
      throw new ReferenceError('the second argument is not a number')
    } else {
      console.log(a + b)
    }
  } catch (err) {
    console.log("Error!", err)
  }
}
addTwoNums(5, "5")
console.log("it still works")
*/

/*function listArrayItems(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 'red') {
      console.log(i * 100, "tomato!")
    } else {
      console.log(i * 100, arr[i])
    }
  }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors)
*/

/*function letterFinder(word, match) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i)
    } else {
      console.log('---No match found at', i)
    }
  }
}

letterFinder('test', 't')
*/


// object

/*var assistantManager = {
  rangeTilesPerTurn: 3,
  socialSkills: 30,
  streetSmarts: 30,
  health: 40,
  specialAbility: "young and ambitions",
  greeting: "Let's make some money"
}*/

/*var table = {
  legs: 3,
  color: "brown",
  priceUSD: 100
}
console.log(table)
console.log(table.color)

// Object dot

var house = {
  rooms: 3,
  color: "brown",
  priceUSD: 10000,
}

var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345

console.log(house);
house.windows = 10;
console.log(house)
house.windows = 11;
console.log(house)*/


/*var house2 = {};
house2["room"] = 4;
house2['color'] = "prink";
house2["priceUSD"] = 12345;

console.log(house2)*/

/*var car = {}
car.color = "red"
car["color"] = "green"
car["speed"] = 200
car.speed = 100
car["number of doors"] = 4
car["2022"] = 1901

console.log(car)*/

/*
var arrOfKeys = ['speed', 'altitude', 'color']
var drone = {
  speed: 100,
  altitude: 200,
  color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
  console.log(drone[arrOfKeys[i]])
}
*/


// array are Object
// array are Object

/*function arrayBuilder(one, two, three) {
  var arr = []
  arr.push(one)
  arr.push(two)
  arr.push(three)
  console.log(arr)
}
arrayBuilder('apple', 'pear', 'plum')fl111

function arrayBuilder(one, two, three) {
  var arr = []
  arr.push(one)
  arr.push(two)
  arr.push(three)
  return arr
}
var simpleArr = arrayBuilder('apple', 'pear', 'plum')
console.log(simpleArr)*/

/*
function addTwoNums(a, b) {
  try {
    if (typeof (a) != 'number') {
      throw new ReferenceError('the first argument is not a number')
    } else if (typeof (b) != 'number') {
      throw new ReferenceError('the second argument is not a number')
    } else {
      console.log(a + b)
    }
  } catch (err) {
    console.log("Error!", err)
  }
}

addTwoNums(4, "2")
console.log("It still works")
*/


/*
function letterFinder(word, match) {
  var condition1 = typeof (word) == 'string' && word.length >= 2;
  var condition2 = typeof (match) == 'string' && match.length == 1;
  if (condition1 && condition2) {
    for (var i = 0; i < word.length; i++) {
      if (word[i] == match) {
        console.log('Found the', match, 'at', i)
      } else {
        console.log('---No match found at', i)
      }
    }
  } else {
    console.log("Please pass correct arguments to the function")
  }
}
letterFinder([], [])
letterFinder("correction", "c")
*/

/*

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
  // Create the message with "%c" + txt
  const message = "%c" + txt;

  // Create the style variable with the specified CSS styles
  let style = `color: ${color};`;
  style += `background: ${background};`;
  style += `font-size: ${fontSize};`;

  // Log the message and style
  console.log(message, style);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
  const fontStyle = "color: tomato; font-size: 50px";

  if (reason === "birthday") {
      console.log(`%cHappy birthday`, fontStyle);
  } else if (reason === "champions") {
      console.log(`%cCongrats on the title!`, fontStyle);
  } else {
      console.log(message, style);
  }
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
celebrateStyler('birthday');

function styleAndCelebrate(color, background, fontSize, txt, reason) {
  consoleStyler(color, background, fontSize, txt);
  celebrateStyler(reason);
}

// Invoke the styleAndCelebrate function with the specified arguments
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');
*/


let price = 10.5;
let day = "Monday";

day === "Monday" ? price -= 1.5 : price += 1.5;
console.log(day)