/* Anagram 1st Approch */
/*
const anagram = (str1, str2) => {
  if (str1.split("").sort().join("") === str2.split("").sort().join(""))
    return true;
  return false;
};

console.log(anagram("ram", "mara"))
*/

/* Anagram 2st Approch */

// const anagram = (str1, str2) => {
//   if (str1.length !== str2.length) return false;
//   let obj1 = {};
//   let obj2 = {};

//   for (let i = 0; i < str1.length; i++) {
//     obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
//     obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
//   }

//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]) return false;
//   }
//   return true;
// };

// console.log(anagram("ram", "ramq"));

// let obj = {
//   a: 200,
//   b: 100,
//   tittle: "Myname",
// };
// for (const key in obj) {
//   if (typeof obj[key] == "number") {
//     obj[key] *= 2;
//   }
// }
// console.log(obj);

// let str = "shashikant";

// console.log(str.reverse());

// let num = 123456789;
// let str = JSON.stringify(num);
// console.log(JSON.parse(str.split("").reverse().join("")));

const targetSumIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] + arr[i + 1] == target) {
      return [i, i + 1];
    }
  }
  return false;
};

console.log(targetSumIndex([2, 3, 4, 6, 5], 5));

// const twoSumIndex = (array, target) => {
//   let obj = {};
//   for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(obj[target - element]);
//     if (obj[target - element] >= 0) {
//       return [obj[target - element], index];
//     } else {
//       obj[element] = index;
//     }
//     console.log(obj);
//   }
//   return "No found required sum index";
// };

// console.log(twoSumIndex([2, 3, 4, 6, 5], 10));

// const MakeProfit = (arr) => {
//   let globalProfit = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let localProfit = arr[j] - arr[i];
//       if (localProfit > globalProfit) globalProfit = localProfit;
//     }
//   }
//   return globalProfit;
// };

// console.log(MakeProfit([7, 1, 5, 12, 6, 4]));

// const makeProfit = (price) => {
//   let min = price[0];
//   let profit = 0;
//   for (let i = 0; i < price.length - 1; i++) {
//     if(min>price[i+1]) min=price[i+1]
//   }
// };

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       //return a + b + c;
//     };
//   };
// }

// console.log(sum(3)(2)(3));

// {
//   var a = 10;
// }

// console.log(a);

// function divideByHalf(sum) {
//   console.log(Math.floor(sum / 2));
// }

// function multiplyBy2(sum) {
//   console.log(sum * 2);
// }

// function operationOnSum(num1, num2, operation) {
//   var sum = num1 + num2;
//   operation(sum);
// }

// operationOnSum(3, 3, divideByHalf); // Outputs 3

// operationOnSum(5, 5, multiplyBy2);

// function memoizedAddTo256() {
//   var cache = {};

//   return function (num) {
//     if (num in cache) {
//       console.log("cached value");
//       return cache[num];
//     } else {
//       cache[num] = num + 256;
//       return cache[num];
//     }
//   };
// }
// var memoizedFunc = memoizedAddTo256();
// console.log(memoizedFunc(20));

// console.log(memoizedFunc(20));
// console.log(memoizedFunc(20));

// const secondLargestNumber = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }

//   for (let i = 0; i < arr.length - 1; i++) {
//     console.log(arr[i], arr[i + 1]);
//     if (arr[i] === arr[i + 1]) {
//       return arr[i + 1];
//     }
//   }
// };

// console.log(
//   secondLargestNumber([2, 33, 102, 5, 336, 366, 366, 7, 44, 77, 55, 88, 99])
// );

// const secondLargestNumber = (arr) => {
//   const unique = new Set(arr);

//   let uniqueArray = [...unique];

//   console.log(uniqueArray);

//   uniqueArray.sort((a, b) => b - a);

//   console.log(uniqueArray);
// };

// console.log(
//   secondLargestNumber([2, 33, 102, 5, 336, 366, 366, 7, 44, 77, 55, 88, 99])
// );

// const secondLargestNumberOptimseCode = (arr) => {
//   let largest = Number.NEGATIVE_INFINITY;
//   let SecondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       SecondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > SecondLargest) {
//       SecondLargest = arr[i];
//     }
//   }
//   return SecondLargest;
// };

// console.log(secondLargestNumberOptimseCode([2, 3, 2, 5, 6, 7, 4, 9, 7, 5, 2]));

// const rotateArray = (arr, k) => {
//   for (let i = 0; i < k; i++) {
//     let pop = arr.pop(arr.length - 1);

//     console.log(pop, arr, arr.push(pop));
//     arr.unshift(pop);
//   }

//   return arr;
// };

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// const reverse = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right > left) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
//   }
//   return arr;
// };

// console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// const uniueArray = (arr) => {
//   for (let index = 0; index < arr.length - 1; index++) {
//     if (arr[index] === arr[index + 1]) {
//       arr.splice(index + 1, 1);
//       index--;
//     }
//   }
//   return arr;
// };

// console.log(uniueArray([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6]));

// const uniueArray = (arr) => {
//   let resultarray = [];
//   for (let index = 0; index < arr.length - 1; index++) {
//     if (!resultarray.includes(arr[index])) {
//       resultarray.push(arr[index]);
//     }
//   }
//   return resultarray;
// };

// console.log(uniueArray([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 5, 6]));

// const arr = [
//   { name: "shashi1", age: 20 },
//   { name: "shashi2", age: 25 },
//   { name: "shashi3", age: 20 },
//   { name: "shashi4", age: 20 },
//   { name: "shashi5", age: 30 },
// ];

// let sortedArray = arr
//   .sort((a, b) => {
//     a.age - b.age;
//   })
//   .filter((value) => value.age == 20);

// console.log(sortedArray);

//-------------- polyfill for map----------------
//arr.map((num,i,arr))
// Array.prototype.mymap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// Array.prototype.myfilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {}
// };

// let student = [
//   { name: "shashi", rollno: 31, marks: 80 },
//   { name: "ravi", rollno: 15, marks: 89 },
//   { name: "pankaj", rollno: 16, marks: 35 },
//   { name: "mithlesh", rollno: 5, marks: 55 },
// ];

// let result = student
//   .filter((stu) => stu.marks < 60)
//   .map((stu) => {
//     stu.marks += 20;
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => {
//     return acc + curr.marks;
//   }, 0);

// console.log(result);

// const fs = require("fs");
//fs.writeFileSync("text.txt", "hellooo");

// const data = fs.readFileSync("text.txt", "utf-8");

// console.log(data);
// const stream = fs.createReadStream("text.txt", "utf-8");
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

//stream.emit("data");

// const useConter = (inititalValue) => {
//   const [count, setCount] = useState(inititalValue);
//   const increment = () => setCount(count + 1);
//   const decrement = () => setCount(count - 1);
//   const reset = () => setCount(0);

//   return [count, increment, decrement, reset];
// };

// const [count, increment, decrement, reset] = useConter(0);

// let input1 = { a: 10, b: 11, c: 11, d: 10, e: 17, f: 11 };
// let input2 = { a: 11, d: 10, e: 17 };

// let obj = {};

// for (let input in input1) {
//   console.log(input);

//   if (input1[input] == input2[input]) {
//     obj[input] = input1[input];
//   }
// }
// console.log(obj);
//------------------------------------------------

// let str = "This is javascript code and you to find max char";

// let arrOfstr = str.split("");

// let arr = arrOfstr.filter((entry) => entry.trim() != "");

// console.log(arr);

// -------------------------------------

// let str = "This is javascript code and you to find max char";

// let arrOfstr = str.split(" ");

// let arr = arrOfstr.filter((entry) => entry.trim() != "");

// let left = 0;
// let right = arr.length - 1;

// while (right > left) {
//   let temp = arr[left];

//   arr[left] = arr[right];
//   arr[right] = temp;
//   left++;
//   right--;
// }
// console.log(arr);

// const arr = [
//   {
//     id: 10,
//     name: "A",
//   },
//   {
//     id: 11,
//     name: "B",
//   },
//   ,
//   {
//     id: 12,
//     name: "C",
//   },
// ];

// const arr1 = [11, 10, 12];

// const arragneArray = () => {
//   let result = [];

//   for (let index = 0; index < arr1.length; index++) {
//     const filterObject = arr.filter((data) => data.id == arr1[index]);

//     result.push(filterObject[0]);
//   }

//   return result;
// };

// console.log(arragneArray());
// let obj = { name: "shashi", age: 28 };

//let obj2 = obj;
//memeory location would be same

// let obj2 ={...obj}

//let obj2 = Object.assign({}, obj);

//let obj2 = JSON.parse(JSON.stringify(obj2));

// const books = [
//   { name: "name1", author: "author1" },
//   { name: "name2", author: "author2" },
//   { name: "name3", author: "author3" },
// ];

// books.sort((a,b)=>{
//     b.author-a.author
// })

// console.log(a)

// let a

// let arr =[1,2]

// let result  = arr.map()

// const EventEmitter =require("event");

// const event =new EventEmitter();

// event.on("PageStatus",()=>{
//     console.log("ok");
// })

// event.emit("PageStatus");

// const server.use(cors({

// }))

//[{()}]

Array.prototype.mySum = function () {
  let sum = 0;

  for (let index = 0; index < this.length; index++) {
    sum += this[index];
  }
  return sum;
};

let arr = [1, 2, 3, 5];

console.log(arr.mySum());

import React, { useState } from "react";

function register() {
  const [initialValue, setInitalValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInput = (event) => {
    setInitalValue({ ...initialValue, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleSubmit = () => {
    const error = validate();
    if (error) {
      console.log(error);
    } else {
      console.log(initialValue);
    }
  };
  return (
    <div>
      <child name={name} />
      <input type="text" name="name" onChange={handleInput} />
      <input type="text" name="email" onChange={handleInput} />
      <input type="text" name="phone" onChange={handleInput} />
      <input type="button" name="submit" onClick={handleSubmit} />
    </div>
  );
}

export default app;

// const fn1 = () => {
//   console.log("fn1 called");
// };

// const fn2 = () => {
//   console.log("fn2 called");
// };

// const Pr1 = new Promise((resolve, reject) => {
//   return resolve(fn1());
// });

// const Pr2 = new Promise((resolve, reject) => {
//   return resolve(fn2());
// });

// const fnCall = async () => {
//   await Pr1;
//   await Pr2;
// };

// fnCall();

// let arr = [4, 2, 1, 5, 3, 7, 8, 9];

// const keyValue = (key) => {
//   const key1 = arr.sort((a, b) => a - b).indexOf(key);
//   if (key1 == arr.length - 1) {
//     console.log(arr[key1 - 1]);
//   } else {
//     console.log(arr[key1 - 1], arr[key1 + 1]);
//   }
// };

// keyValue(9);
