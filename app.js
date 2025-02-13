// Falte Array

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 4, [7, 8], 9],
//   [10, 11, 12],
// ];

// const res = arr.flat(2);

// console.log(res);
// function customFlat(arr, depth = 1) {
//   let result = [];
//   arr.map((ar) => {
//     if (Array.isArray(ar) && depth > 0) {
//       result.push(...customFlat(ar, depth - 1));
//     } else {
//       result.push(ar);
//     }
//   });
//   return result;
// }

// const result = customFlat(arr, (depth = 2));

// console.log(result);

//===================== find duplicate in array===================================

// let arr = [1, 1, 2, 2, 3];
// let unqiue = [];
// let duplicate = [];

// arr.forEach((ar) => {
//   if (!unqiue.includes(ar)) {
//     unqiue.push(ar);
//   } else {
//     duplicate.push(ar);
//   }
// });

// console.log(duplicate);

// 2nd methord

// let arr = [1, 1, 2, 2, 3, 2, 3, 4, 2, 21, 2, 2, 21, 32, 2, 4, 4, 5, 5];

// let duplicateArray = arr.filter((ele, index, ar) => ar.indexOf(ele) !== index);
// console.log(duplicateArray);

//=========================max and min value of array==========================

// const PalindromNumber = (num) => {
//   return num === +num.toString().split("").reverse().join("");
// };

// console.log(PalindromNumber(123));

{
    const a = 10;
  }
  
  console.log(a);
  