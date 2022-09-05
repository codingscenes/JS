//Guess the output 
console.log(1);
function printHello() {
  console.log('Hello');
}

function cb1() {
  console.log(2);
}
function cb2() {
  console.log(3);
}
function cb3(value) {
  console.log(value);
  return 8;
}
function cb4(value) {
  console.log(value);
}

setTimeout(cb1, 0);

setTimeout(cb2, 100);

Promise.resolve(4).then(cb3).then(cb4);

printHello();
console.log(5);
