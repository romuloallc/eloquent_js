/* Abstraction */
console.log("_____Abstraction_____\n")

/*
Abstraction says that we can say the same thing with more words
or less words, but to do that we need to know more.
*/

/* Abstracting Repetition */
console.log("_____Abstracting Repetition_____\n")

for (let i = 0; i < 10; i++) {
    console.log(i);
}

function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

let labels = [];
repeat(5, (i) => labels.push(`Unit ${i + 1}`));

console.log(labels);

/* Higher-Order Functions */
console.log("_____Higher-Order Functions_____\n")

/* 
Functions that operate on other functions, either by taking them as arguments or 
by returning them, are called higher-order functions.
*/

//Functions that create new functions
function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

//Functions that change other functions
function noisy(f) {
    return (...args) => {
        console.log("Calling with", args);
        let result = f(...args);
        console.log("Called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);

//Functions that provide new types of control flow

function unless(test, then) {
    if (!test) then();
}

repeat(3, n => {
    unless(n % 2 == 1, () => {
        console.log(n, "is even");
    });
});

// forEach is a higher-order function for built-in array method
["A", "B"].forEach(l => console.log(l));

/* Filtering Arrays */
console.log("_____Filtering Arrays_____\n")
require("./05_higher_order/code/scripts");

// creates a new array
// function(element, index, array){}, return true || false

// Filter is a standard array method, this is what it does internally.
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

/*
const living = SCRIPTS.filter(element => element.living == true );
console.log(living);
*/

console.log(filter(SCRIPTS, script => script.living));
console.log("_______________________________________")
console.log(SCRIPTS.filter(s => s.direction == "ttb"));

/* Transforming with Map */
console.log("_____Transforming with Map_____\n")

/* 
The map method transforms an array by applyinga function to all of its elements
and building a new array from the returned values.
*/

function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

// filtering scripts that direction is right to left
let rtlScripts = SCRIPTS.filter(s => s.direction == 'rtl'); 
console.log(map(rtlScripts, s => s.name));

const living = SCRIPTS.map(lScript => {
    return lScript.name;
});

console.table(living);

// map is a standard array method

/* Summarizing with Reduce */
console.log("_____Summarizing with Reduce_____\n")

// reduce compute a single value from the array, like summing a collection of numbers

function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// array.reduce((accumulator, currentValue, index, array) => {}, initialValue )

// reduce is a standard array method so:

console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function characterCount(script) {
    return script.ranges.reduce((count, [from , to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

/* Composability */
console.log("_____Composability_____\n")

/*
Higher-order functions start to shine when you need to compose operations. You
can write the same code using loops and etc, but it is harder to see what is being
computing and how.
The first will build up new arrays when running filter and map, whereas the second
computes only some numbers, doing less work. You can usually afford the readable
approach, but if you're processing huge arrays, and doing so many times, the less
abstract style might be worth the extra speed.
*/

/* Strings and Character Codes */
console.log("_____Strings and Character Codes_____\n")

/*
charCodeAt method gives you a code unit, not a full character code

codePointAt does give a full Unicode character
*/

function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }
  
  console.log(characterScript(121));

/* Recognizing Text */
console.log("_____Recognizing Text_____\n")

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

function textScripts(text) {
    let scripts = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.name : "none";
    }).filter(({ name }) => name != "none");

    let total = scripts.reduce((n, { count }) => n + count, 0 );
    if (total == 0) return "No scripts found";

    return scripts.map(({ name, count }) => {
        return `${Math.round(count * 100 / total)}% ${name}`;
    });
}

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));