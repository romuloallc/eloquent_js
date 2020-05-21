/* Defining a Function */
console.log("_____Defining a Function_____\n")

const square = function(x) {
    return x * x;
};

console.log(square(12));

const makeNoise = function() {
    console.log("TEY");
};
makeNoise();

const power = function(base, exponent) {
    let result = base ** exponent;
    return result;
};
console.log(power(2, 10));

/* Bindings and Scopes */
console.log("_____Bindings and Scopes_____\n")

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
/* 
y is no visible here, if we try to call it here JavaScript
will tell us that y is not defined
*/
console.log(x + z);

/* Nested Scope */
console.log("_____Nested Scope_____\n")

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += 's';
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
}
console.log(hummus(5));

/* Functions as Values */
console.log("_____Functions as Values_____\n")

/*
    A binding that holds a function is still just a 
    regular binding and can, if not constant (const),
    be assigned a new value.
*/

/* Declaration Notation */
console.log("_____Declaration Notation_____\n")

console.log("The future says:", future());

function future() {
    return "You'll never have flying cars.";
}
/*
The preceding code works, even though the function is
defined below the code that uses it. Function declarations 
are not part of the regular top-to-bottom flow of control. 
They are conceptually moved to the top of their scope and 
can be used by all the code in that scope. 
This is sometimes useful because it offers the freedom 
to order code in a way that seems meaningful, without 
worrying about having to define all functions before 
they are used.
*/

/* Arrow Functions */
console.log("_____Arrow Functions_____\n")

const power_2 = (base, exponent) => {
    let result = base ** exponent;
    return result;
}

const square1 = (x) => { return x * x};
const square2 = x => x * x;

const horn = () => {
    console.log("AAAAAH");
}
horn();

/* The Call Stack */
console.log("_____The Call Stack_____\n")

function greet(who) {
    console.log('Hello ' + who);// 2°
}
greet("Harry"); // 1°
console.log('Bye'); // 3°

/*
The program follows that order, it stores the context
in the call stack, every time a function is called,
the current context is stored on top of this stack.
*/

/*
The following program is infinite and the computer would
get a message like "out of stack space"

function chicken() {
    return egg();
}
function egg() {
    return chicken();
}
console.log(chicken() + " came first.");
*/

/* Optional Arguments */
console.log("_____Optional Arguments_____\n")

//Javascript computes the first one and ignores the extra
console.log(square(4, true, "hedgehog"));

//the second parameter is optional
function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
console.log(minus(10, 5));

// the default value for the exponent is 2
function power3(base, exponent = 2) {
    let result3 = base ** exponent;
    return result3;
}
console.log(power3(4));
console.log(power3(2, 6));

/* Closure */
console.log("_____Closure_____\n")

// I don't understand this very well, but okay.

function wrapValue(n) {
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(2);
console.log(twice(3));

/* Recursion */
console.log("_____Recursion_____\n")
//Recursion functions are functions that call itselves many times
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, '1');
}
console.log(findSolution(13));

/*
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
*/

/* Growing Functions */
console.log("_____Growing Functions_____\n")

function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);
    let chickenString = String(chickens);
    while (chickenString.length < 3) {
        chickenString = "0" + chickenString;
    }
    console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

function printZeroPaddedWithLabel(number, label) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${label}`);
}

function printFarmInventory(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, "Cows");
    printZeroPaddedWithLabel(chickens, "Chickens");
    printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);

function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`);
    console.log(`${zeroPad(chickens, 3)} Chickens`);
    console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);

/* Functions and Side Effects */
console.log("_____Functions and Side Effects_____\n")

/*
A pure function is a specific kind of value-producing function that not only has 
no side effects but also doesn’t rely on side effects from other code—for example, 
it doesn’t read global bindings whose value might change. A pure function has the 
pleasant property that, when called with the same arguments, it always produces the 
same value (and doesn’t do anything else). A call to such a function can be 
substituted by its return value without changing the meaning of the code. 
When you are not sure that a pure function is working correctly, you can test it 
by simply calling it and know that if it works in that context, it will work in any 
context. Nonpure functions tend to require more scaffolding to test.
*/