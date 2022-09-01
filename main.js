// const promise = new Promise((resolve, reject) => {
//     resolve(25251235);
//     resolve(54433333);
// });

// // continuation passing style
// function add(x, y, cb) {
//     cb(x + y);
//     console.log('This is after cb ran!!')

// }
//  add(3,5, function(value) {
//     console.log('value', value);
// })


// // Handle exceptions in the code
// promise.then((value) => {// promise resolved
//     console.log('value: ', value);
// }).catch(error => {

//     console.log('error: ', error);

// }).finally(() => {
//     console.log('masti mein finally!')
// })


// using built in fetch api (promise)

const getTodo = (id) => {
    const url = `https://jsonplaceholder.cypress.io/todos333/${id}`;
    // fetch api does not reject if errors are 4xx or 5xx
    fetch(url).then(response => {
        if (response.ok) {
          return response.json(); // Promise
        }
        return Promise.reject('API failed with error!');

    }).then(jsonResponse => console.log(jsonResponse))
        .catch(error => {// safely error handle
            console.log('error', error);
            return Promise.resolve('This is ok!!');
        })
        .then((finalMsg) => {
        console.log(finalMsg)
    })
}

getTodo(2);
getTodo(2);
getTodo(2);
