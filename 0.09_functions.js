function hello(){
	console.log("Hello World");
}

// hello();

// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")
// console.log("Hello World")

// making a function with greeting
// HOW DOES THIS APPLY TO THE BROWSER?!!  (parameters and arguments:)
function greeting(name){
	return "안영 " + name;
}

var addGreeting = greeting("Brandon and Brie") + ", what's up!";

console.log(addGreeting);
// adding numbers to functions
function printNumber(){
	console.log(1);
}

printNumber();

function sumNum(num1, num2){
	
	return num2 + num1;
}

sumNum(4, 6);
function mulNum(num1, num2){
	return num2 * num1;
}

mulNum(19384, 218);
function subNum(num1, num2){
	
	return num2 - num1;
}

subNum(20, 17);
console.log("******************************************************");
function calculatePriceIndiana(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(10, 15))

//built in Objects example:
var today = new Date();
console.log(today.toDateString());

mulNum(5, 5)

function checkOdd(num){
	if (num % 2 === 0){
		return "Yo dang, " + num + " is even"
	} else {
		return "nah, man " + num + " is odd"
	}
}
console.log(checkOdd(12))

function divByThree(num){
	if (num % 3 === 0){
		return "Mahjah, " + num + " is divisible by 3"
		} else {
		return "nah, man " + num + " is odd"
	}
}

function greeting(name){
	if (name == "Paul"){
		return "Okay, It's you."
		} else if (name == "Jenn"){
		return "HEY, GOOD MORNING, HOW ARE YOU DOING!!"
	} else {
		return "long nite, can't talk now."
	}
}

var addGreeting = greeting("Brandon and Brie") + ", what's up!";

console.log(addGreeting);

/*

//--------------------------------------------------------------
//--------------------------------------------------------------
// -------------- Challenge: Functions  ------------------
//--------------------------------------------------------------
//--------------------------------------------------------------
/*
Write a function with two strings as parameters.
		The function should concatenate the string.

Write a function that will help me easily calculate monthly bills.

Write a function that takes quantity, price, tax and an item
The function should take the quantity, price, tax and the item name and return
a response similar to this.
--150 hotdogs will cost you $145 (your math may not be perfect and may
 potentially return 145.457.  If that is the case, don’t sweat it.
*/
console.log("******************************************************");


function people(pOne, pTwo){
	return pOne + " " + pTwo;
}

console.log(people("Brie", "Brandon"))

function billj(rent, electricity, gas){
	var billjTotal = rent + electricity + gas
	return billjTotal
}
console.log(billj(509, 26, 13));

