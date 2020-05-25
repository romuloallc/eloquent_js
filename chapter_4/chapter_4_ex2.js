function reverseArray(array) {
    let newArray = [];
    for(let i = array.length - 1;i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
    for(let i = 0;i < Math.floor(array.length / 2); i++) {// We don't need to use all the array, only half
        let temp = array[i]; // temporary binding to store the old value of the array in that position
        array[i] = array[array.length - 1 -i]; // changing the value from the back to the front of the array
        array[array.length - 1 - i] = temp; // and putting the value of the temporary binging to the position in the back
    }
    return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);