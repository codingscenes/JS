const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const fetchToDo = (url, timeMs) => {
  return delay(timeMs)
    .then(() => {
      return fetch(url);
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject('An error occurred. Please try again!');
    });
};

const url1 = `https://jsonplaceholder.cypress.io/todos/1`;
const url2 = `https://jsonplaceholder.cypress.io/todos/2`;
const url3 = `https://jsonplaceholder.cypress.io/todos/3`;

// resolved
// const p1 = Promise.resolve(1000);

// const p2 = Promise.resolve(p1);

// // then -> async
// p2.then(value => {
//     console.log(value);
// })

// console.log('p1 === p2', p1 === p2)

// const p1 = Promise.reject(1000); // error
// console.log(p1)
// const p2 = Promise.resolve(p1); // error reject => error => error

// // then -> async
// p2.then((value) => {
//   console.log(value);
// }).catch(e => {
//     console.log(typeof e)
//     console.log('error', e)
// });





// // Promise.all() => all should pass, single error => out error
// const p1 = Promise.resolve(10);

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve(20)
//     }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 500);
// });
// const p4 = 'This is Rohit';
// // aggregated (sumup data)
// // running all promises, using Promise.all([p1,p2, p3]) async
// // [] sync
// const allPromises = Promise.all([p1, p2, p3, p4])
// allPromises.then(result => {
//     console.log(result)
// }).catch(error => {
//     console.log('error', error)
// })



// // Promise.any() => promise which resolve faster will be in the output(only one)
// const p1 = Promise.reject(10);

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve(20)
//     }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 500);
// });
// const p4 = 'This is Rohit';
// // running all promises, using Promise.any([p1,p2, p3]) async
// // [] sync
// const anyPromises = Promise.any([p1, p2, p3, p4])
// anyPromises
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });


// // Promise.allSettled() => pass/fail (only used for knowing promise status)
// const p1 = Promise.reject(10);

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             resolve(20)
//     }, 1000);
// })
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 500);
// });
// const p4 = 'This is Rohit';
// // running all promises, using Promise.any([p1,p2, p3]) async
// // [] sync
// const allSettled = Promise.allSettled([p1, p2, p3, p4]);
// allSettled
//   .then((results) => {
//       console.log(results);
//       results.forEach( result => console.log(result.status))

//   })
//   .catch((error) => {
//     console.log('error', error);
//   });



// Promise.race() => any one promise gets settled quickest
// settled => Fulfilled(resolved) OR Reject(error)
const p1 = Promise.resolve(10);

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            resolve(20)
    }, 1000);
})
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 500);
});
const p4 = 'This is Rohit';
// running all promises, using Promise.any([p1,p2, p3]) async
// [] sync
const racePromise = Promise.race([p2, p3]);
racePromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log('error', error);
  });