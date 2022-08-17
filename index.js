//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//1

function filterRange(arr, a, b) {
  //write your code here
  const newArrayq1 = arr.filter((item) => {
    if (item >= a && item <= b) {
      return item;
    }
  });
  return newArrayq1;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (matching values)
console.log(`-------original Array----------`);
console.log(arr); // 5,3,8,1 (not modified)

console.log(`------------------Q2 STARTED-------------------------`);

//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//2
function filterRangeInPlace(arr, a, b) {
  //write your code here
  arr.forEach((item, i, arr) => {
    console.log(arr, i);
    if (!(item >= a && item <= b)) {
      // arr[i] = item - 1;
      arr.splice(i, 1);
      i--;
      // console.log("This is an Array", arr);
    }
  });
  console.log(arr);
}

let array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // removed the numbers except from 1 to 4

console.log(array); // [3, 1]

// arr = [1, 2, 3];
// console.log(arr.at(0));

// let arr = [5, 3, 8, 1, 18, 9];

// for (let i = 0; i < arr.length; i++) {
//   let val = arr[i];
//   // remove if outside of the interval
//   if (val < a || val > b) {
//     arr.splice(i, 1);
//     i--;
//   }
// }
