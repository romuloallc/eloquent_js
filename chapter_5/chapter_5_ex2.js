// // first try
// function loop(start, test, update, action) {
//     for (let value = start;test; update(value)){
//         console.log(value);
//     }
// }


//solution
function loop(start, test, update, action) {
    for (let value = start; test(value); value = update(value)) {
        action(value);
    }
}


loop(3, n => n > 0, n => n - 1, console.log);
