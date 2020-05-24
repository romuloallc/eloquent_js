/* The weresquirrel */
console.log("_____The weresquirrel_____\n")

/* Data Sets */
console.log("_____Data Sets_____\n")

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[4 - 1]);

/* Properties */
console.log("_____Properties_____\n")

// null.length; null has no properties
console.log(listOfNumbers.length);
console.log(listOfNumbers["length"]);
/*
Both value.x and value[x] access a property on value—but 
not necessarily the same property.
*/

/* Methods */
console.log("_____Methods_____\n")

let tey = "Tey";
console.log(typeof tey.toUpperCase);
console.log(tey.toUpperCase());
console.log(tey.toLowerCase());

let sequence = [1, 2, 3];
sequence.push(4); // adds values to the end of an array
sequence.push(5); 
console.log(sequence);
console.log(sequence.pop()); // remove the last value in the array and returning it
console.log(sequence);

/* Objects */
console.log("_____Objects_____\n")

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);

let descriptions = {
    work: "went to work",
    "touched tree": "Touched a tree"
};

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);
console.log("left" in anObject);
console.log("right" in anObject);

console.log(Object.keys(day1)) // return an array of strings with the object's property names

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"],
     squirrel: false},

    {events: ["work", "ice cream", 'cauliflower', "lasagna", "touched tree", "brushed teeth"],
     squirrel: false},
     
    {events: ["weekend", "cycling", 'break', "peanuts", "beer"],
     squirrel: true}

     /* and so on */
];

/* Mutability */
console.log("_____Mutability_____\n")

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

const score = {visitors: 0, home: 0};
console.log(score);
score.visitors = 1;
console.log(score);
// score = {visitors: 1, home: 1}; this isn't allowed

/* The Lycanthrope's Log */
console.log("_____The Lycanthrope's Log_____\n")
let journalNews = [];

function addEntry(events, squirrel) {
    journalNews.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running",
          "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
          "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",
          "beer"], true);

/* Computing correlation */
console.log("_____Computing correlation_____\n")

require('./04_data/code/journal.js') // Data to use

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) * 
                  (table[0] + table[1]) * 
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

console.log(tableFor("peanuts", JOURNAL));

/* Array Loops */
console.log("_____Array Loops_____\n")

/* 
To run each element of the array the loop is used:

for (let i = 0; i < JOURNAL.length; i++) {
    let entry = JOURNAL[i];
    //Do something with entry
}

But there is a simpler way to write this:

for (let entry of JOURNAL) {
    console.log(`${entry.events.length} events`)
}
*/

/* The Final Analysis */
console.log("_____The Final Analysis_____\n")

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log(journalEvents(JOURNAL));
console.log(journalEvents(JOURNAL).length);

for (let event of journalEvents(JOURNAL)) {
    console.log(event + ":", phi(tableFor(event,JOURNAL)));
}

console.log("_____________________");

for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
}

console.log("_____________________");

for (let entry of JOURNAL) {
    if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));

/* Further Arrayology */
console.log("_____Further Arrayology_____\n")

let todoList = [];
function remember(task) {
    todoList.push(task);
}

function getTask() {
    return todoList.shift(); // removing things at the start of an array
}

function rememberUrgently(task) {
    todoList.unshift(task); // adding things at the start of an array
}

console.log([1, 2, 3, 2, 1].indexOf(2)); // search from the start
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // search from the end

console.log([5, 6, 7, 8, 9].slice(2, 4));
console.log([5, 6, 7, 8, 9].slice(2));

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));

/* Strings and Their Properties */
console.log("_____Strings and Their Properties_____\n")

let kim = "Kim";
kim.age = 88;
console.log(kim.age);

console.log("coconuts".slice(4, 7));
console.log("coconuts".indexOf("u"));
console.log("one two three".indexOf("ee"));
console.log("    okay \n ".trim()); //removes whitespace from the start and end of a string
console.log(String(98).padStart(7, "0"));

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);

console.log(words.join("_"));

console.log("La".repeat(3));

/* Rest Parameters */
console.log("_____Rest Parameters_____\n")

function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

console.log(max(4, 1, 9, -2));

let numbers = [5, 1, 7];
console.log(max(9, ...numbers, 2));
console.log(max( ...numbers));

let wordsNew = ["never", "fully"];
console.log(["will", ...wordsNew, "understand"]);

/* The Math Object */
console.log("_____The Math Object_____\n")

function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle), y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));
console.log(Math.floor(Math.random() * 10)); 
/*
Math.floor - rounds down
Math.ceil - rounds up
Math.round - to the nearest whole number
Math.abs - takes absolute value of a number
*/

/* Destructuring */
console.log("_____Destructuring_____\n")

function newPhi([n00, n01, n10, n11]) {
    return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

let {name} = {name: "Faraji", age: 23};
console.log(name);

/* JSON */
console.log("_____JSON_____\n")

let stringJson = JSON.stringify({squirrel: false, events: ["weekend", "pizza"]});

console.log(stringJson);
console.log(JSON.parse(stringJson).events);