/*
The previous chapter introduced the standard function 
Math.min that returns its smallest argument. 
We can build something like that now. 
Write a function min that takes two arguments and 
returns their minimum.
*/

function min(n1, n2) {
    if (n1 < n2) return n1;
    else return n2;
}
console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(5, 10));