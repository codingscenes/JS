// // 1. callback - synchronous
// // Direct style (return)
// function add(x, y) {
//     return x + y;
// }

// const output = add(3, 4)

// console.log(output);

// // The continuation - pass style
// function add2(x, y, cb) {

//     return cb(x + y);

//     console.log('This is after cb has run')
// }

// console.log('line no 19')
// add2(3, 4, function (result) {
//     console.log(result)
// })
// console.log('This is my line no 22');


// 2. Asynchronous callback (future result)

function add(x , y, callback) {
    // connect => to => server => x  + y;
    setTimeout(() => { // Closure: add {x: 2, y: 4, callback : f(result) {}}
        callback(x + y);
    }, 2000)// asynchronous
    console.log('Work is over') // 1
    return true;
}

add(2, 4, function (result) {
        console.log('This is result', result) // 3
});
 console.log('out of function'); // 2