// functions required for the compose
function add10Fn(n) {
  return n + 10;
}

function doubleFn(n) {
  return n * n;
}

function sub10Fn(n) {
  return n - 10;
}

function divide10Fn(n) {
  return n / 10;
}

// compose . reduce (closure)
// previousValue => divide10Fn, currentValue => sub10Fn
function composeFn(fn1, fn2) {
  // nested => closure (fn args => inner fns)
  return function (n) {
    return fn1(fn2(n)); // divide10Fn(sub10Fn(10))
  };
}

function PipeFn(fn1, fn2) {
  // nested => closure (fn args => inner fns)
  return function (...nums) {
    // [10,20]
    return fn2(fn1(...nums)); // divide10Fn(sub10Fn(10)) 10,20
  };
}

function numberFactory(...fns) {
  return fns.reduce(composeFn); //reducer, initialValue
}

const output = numberFactory(divide10Fn, sub10Fn, doubleFn, add10Fn)(10, 20);

console.log(output);

// flipkart user
const users = {
  name: 'Rohit',
  wallet: 3000,
  order: [],
  cart: [],
  purchased: [],
};
// add to wallet
// add to order//
// add to cart..
/// purchase the order in the cart//
// emtpy cart
