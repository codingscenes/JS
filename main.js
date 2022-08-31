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
function composeFn(fn1, fn2) {

  return function (n) {
    return fn1(fn2(n));
  };
}

function PipeFn(fn1, fn2) {
  return function (...nums) {
    return fn2(fn1(...nums));
  };
}

function numberFactory(...fns) {
  return fns.reduce(composeFn);
}

const output = numberFactory(divide10Fn, sub10Fn, doubleFn, add10Fn)(10, 20);

console.log(output);
