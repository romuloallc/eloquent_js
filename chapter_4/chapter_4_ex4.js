function deepEqual(x, y) {
    if (x === y) return true;

    if (x == null || y == null || typeof x != "object" || typeof y != "object") return false;
    
    let keysX = Object.keys(x), keysY = Object.keys(y);

    if (keysX.length != keysY.length) return false

    for (let key of keysX) {
        if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};

console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));