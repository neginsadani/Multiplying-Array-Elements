function multiplyArray(arr, factor = 2) {
  return arr.map((num) => num * factor);
}

let numbers = [1, 24, 3, 4, 2];
let factor = 3;

console.log(multiplyArray(numbers, factor));

// console.log(multiplyArray([1, 24, 3, 4, 2], 3));
// console.log(multiplyArray([1, 24, 3, 4, 2]));
