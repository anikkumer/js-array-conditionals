var numbers = [45, 68, 78, 56, 89, 98];

// console.log(numbers);
// console.log(numbers[0]);
// console.log(numbers[3]);

// 1. GET element value by index
var element = numbers[1];
// console.log(element);

// 2. SET element value by index
numbers[1] = 77;
// console.log(numbers);

// 3. find index of an element
var positionIndex = numbers.indexOf(89);
console.log(positionIndex);

var positionIndex = numbers.indexOf(896);
console.log(positionIndex);