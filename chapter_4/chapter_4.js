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

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) * 
                  (table[0] + table[1]) * 
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1]));