// var bread = Math.floor(Math.random() * 10);

// if (bread <= 3){
// 	console.log("The store only has Wonderbread");
// }else if (bread > 3 && bread <= 6) {
// console.log("At least they got Mrs. Bairds");
// }else {
// 	 console.log("Bring back mamba")
// }



// var user_answer = prompt("What is your favorite bread?") 
// console.log("Your favorite bread is " + user_answer);

// console.log(bread);
// if (bread === "Sara Lee" ) {}

// var best = Math.floor(Math.random()) * 10;

// var ok = Math.floor(Math.random()) * 10;;

// var worst = Math.floor(Math.random()) * 10;;

// var blake_choice = best;

// if (blake_choice === best) {
// 	console.log("You've got SHaz's favorite bread");
// }
// else if (blake_choice === okay) {
// 	console.log ("Budget Bread Runner Up");
// }
// else {
// 	console.log("Just go home");
// }



// var x = 15;

// if (x < 15) {
// 	console.log("wumbo");
// }else {
// 	console.log("hoopla");
// }




// var x = (Math.random()*10);
// console.log("your random number is " + x)


// var cups = 1

// if (<3 cups);{
// 	console.log ("Have great day!");
// }else{
// 	console.log ("Slow up on the coffee");
// }








// var user_answer = prompt("Have you had coffee today?")
// console.log  if (user_answer < 3) {
// console.log("Noice!");
// else {
// console.log("That ought to be enough caffeine for the day");
// }






// var cupOfCoffee = prompt("How many cups of cofee have you drank today?");
// if(cupOfCoffee < 3){
// 	console.log("Here is a cup of coffee");
// }
// else {
// 	console.log("No more coffe for you.")
// }



// 1. var temperature = 80;
// 2. console.log("The temperature is " + temperature + "degrees");
// 3. if (temperature >80) {
// 	console.log("Time to Swim");
// }
// else 
// 4. var precipitation = false;
// 5. if (temperature >80 && precipitation === false)
// else if (temperature >80 && precipitation ===true || indoors === true {
// 	console.log("Time To Swim");
// }



// for (var x = 1; x <= 10; X++) {
// console.log(x + 1);
// }

// for (var x =99; x >= 0; x--) {
// 	console.log(x + " bottles of beer on the wall")
// 	if (x === 0); {
// 		console.log("We need more root beer.");
// } 

// var correctAnswer = prompt("Do you want to build a snowman?");

// while(correctAnswer != "yes") {
// 	correctAnswer === prompt("Do you want to build a snowman?");
// {
// 	if (correctAnswer === "yes"){
// 		console.log("Yippie!");
// 	}
	
// Solution shot 1:

// var random1 = rock
// var random2 = paper
// var random3 = scissors
// var computerChoice = Math.random

// prompt("Hey let's play rock, paper, siccors.");{
// 	Math.floor(Math.random() *3);
// prompt("Ready!  Rock, Paper Scissors.  What'd you get?")
// if user_answer(random2) && computerChoice === (random1); {
// 	console.log( Aww you win!)

// if user_answer(random2) && computerChoice === (random2); {
// 	prompt("Oh craps game!")

// if user_answer(random2) && computerChoice === (random3); {
// 	prompt("Gotchu sucka!")

// if user_answer(random1) && computerChoice === (random2); {
// 	prompt("Shucks!")
// if user_answer(random1) && computerChoice === (random1); {
// 	console.log("craps game")

// if (user_answer(random1) && computerChoice === (random3);{
// 	console.log ("You got me!")



// var teachers = ["Shane","Zack","Patricia","CL","Junior"];

// // console.log(teachers[4]);

// // teachers.pop();
// // console.log(teachers);

// // for(var i=0;teachers.length >i; i{++){
// // 	console.log(teachers[i])
// // }

// teachers.reverse();
// console.log(teachers);

// teachers.sort();
// console.log(teachers);


var shoppinglist = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
shoppinglist.push("fruit loops");
// console.log(shoppinglist);

shoppinglist[4] = "coffee"; // ["pop tarts", "ramen noodles", "chips", "salsa", "coffee", "fruit loops"];
shoppinglist[4] = "fair trade coffee"; // ["pop tarts", "ramen noodles", "chips", "salsa", "fair trade coffee", "fruit loops"];
// console.log(shoppinglist);

shoppinglist.splice(2,2, "rice", "beans");
console.log(shoppinglist);

var shoppingcart = [];

shoppingcart.push(shoppinglist.pop());
console.log(shoppingcart);

// 7. Remove the first item from your shoppinglist and add it to the cart
shoppingcart.push(shoppinglist.pop(shoppinglist.reverse));
// or
shoppingcart.push(shoppinglist.shift());
console.log(shoppingcart);

while(shoppinglist.length > 0) {
	shoppingcart.push(shoppinglist.pop());
}
console.log(shoppingcart);


shoppingcart.reverse(shoppingcart.sort);
console.log(shoppingcart);

var outputString = "";
for( var i = 0; i<shoppinglist.length; i++){
	outputString += shoppingcart[i] +","
}
console.log(outputString);

// or
var String = shoppingcart.join("");
console.log(String);

// or
console.log(shoppingcart.toString());