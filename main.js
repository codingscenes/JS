
const arr = [2, 3, 4, 5, 6, 7, 8];

const callbackFnEven = function(element, index, array)  {
    return element % 2 == 0;
}

const callbackFnOdd = function (element, index, array) {
  return element % 2 !== 0;
};

const outputEven = arr.filter(callbackFnEven);
const outputOdd = arr.filter(callbackFnOdd);

// console.log(outputEven, outputOdd);

// my filter
function filter(numbers, callback) {
    const tempArr = [];
    let i = 0;
    for (let number of numbers) {
        if (callback(number, i, numbers )) { // true number % 2== 0
            tempArr.push(number)
        }
        i++;
    }
    return tempArr;
}

const outputEvenNums = filter(arr, callbackFnEven);
const outputOddNums = filter(arr, callbackFnOdd);

console.log(outputEvenNums, outputOddNums);


const callbackMap = function (element, index, array) {
    return element * 5;
}

// my map
function map(numbers, callback) {
    const tempArr = [];
    let i = 0;
    for (let number of numbers) {
        const res = callback(number, i, numbers);
        tempArr.push(res);

        i++;
    }
    return tempArr;
}

const myMapOutput = map(arr, callbackMap);
console.log(myMapOutput)