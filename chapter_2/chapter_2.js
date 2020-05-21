/* Expressions and Statements */
console.log("_____Expressions and Statements_____\n")
// The simplest kind of statement is an expression with a semicolon(;) after it.
1;
!false
1+1
/* In some cases, JavaScript allows you to omit the semicolon
   at the end of a statement. 
   It is recommended to always use the semicolon to avoid errors. 
*/

/* Bindings or Variables */
console.log("_____Bindings or Variables_____\n")
let caught = 5 * 5;
console.log(caught * caught);
let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);
//Two bindings can refer to the same value.
let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
luigisDebt -= 10;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

// Similar to let, we have var and const
var name = 'Ayda';
const greeting = 'Hello '; // It points at the same value for long as it lives.
console.log(greeting + name);

/* Bindings Names */
console.log("_____Bindings Names_____\n")
/* Binding names can be any word. Digits can be part of binding names—catch22 
   is a valid name, for example—but the name must not start with a digit.
   A binding name may include dollar signs ($) or underscores (_) but no other 
   punctuation or special characters. 
*/

/* The Environment */
console.log("_____The Environment_____\n")
/* The collection of bindings and their values that exist at a given time is called
   the environment.
/*

/* Functions */
console.log("_____Functions_____\n")
/* It is a piece of program wrapped in a value. For example, the binding prompt. */

/* The console.log Function */
console.log("_____The console.log Function_____\n")
/* It is used to output values. */
let x = 30;
console.log(`The value of x is ${x}.`);

/* Return Values */
console.log("_____Return Values_____\n")
// Math.max takes any amount of numbers arguments and return the greatest.
console.log(Math.max(2, 4)); 
console.log(Math.min(2, 4, 7, 1) + 250);

/* Control Flow */
console.log("_____Control Flow_____\n")
console.log("The statements are executed as if they are a story, from top to bottom.")
// Function Number converts a value to a number, there are similar like String/Boolean
// The prompt is always a string value

/* Conditional Execution */
console.log("_____Conditional Execution_____\n")
let theNumber = Number("tey"); // Change the value to test.
/* isNaN gives true if theNumber is NaN, so if it's a Number is false.
   Then we deny it to invert the statement.
*/
if (!Number.isNaN(theNumber)) { 
    console.log("Your number is the square root of " + theNumber * theNumber);
}

if (!Number.isNaN(theNumber)) { 
    console.log("2 - Your number is the square root of " + theNumber * theNumber);
} else {
    console.log("This is not a number.")
}

if (theNumber < 10) {
    console.log("Small");
} else if (theNumber < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

/* While and Do Loops */
console.log("_____While and Do Loops_____\n")
console.log(0);
console.log(2);
console.log(4);
console.log(6);
console.log(8);
console.log(10);
console.log(12);

let number = 0;
while (number <= 12) {
    console.log(number);
    number += 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result *= 2;
    counter += 1;
}
console.log(result);

/* Indenting Code */
console.log("_____Indenting Code_____\n")
/* Indentation makes the structure of the code stand out. */

/* For Loops */
console.log("_____For Loops_____\n")

for (let numberFor = 0;numberFor <= 12; numberFor += 2) {
    console.log(numberFor);
}

let resultFor = 1;
for (counterFor = 0;counterFor < 10;counterFor += 1){
    resultFor *= 2;
}
console.log(resultFor);

/* Breaking Out of a Loop */
console.log("_____Breaking Out of a Loop_____\n")

for(let current = 20; ;current += 1) {
    if (current % 7 == 0) {
        console.log(current)
        break;
    }
}

/* Updating Bindings Succinctly */
console.log("_____Updating Bindings Succinctly_____\n")

console.log("(counter = counter + 1) === (counter += 1) === (counter++)");
console.log("(counter = counter - 1) === (counter -= 1) === (counter--)");

/* Dispatching on a Value with Switch */
console.log("_____Dispatching on a Value with Switch_____\n")

switch ("sunny") {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
//There is no break here to show that it runs to next case, if there is no break.
    case "cloudy":
        console.log("Go outside.");
        break;
    default: 
    console.log("Unknown weather type!")
    break;
}

/* Capitalization */
console.log("_____Capitalization_____\n")
console.log("camelCase")

/* Comments */
console.log("_____Comments_____\n")

console.log("To comment use // or /*dfasdf*/")