// import "./styles.css";
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [pin, setPin] = useState("");
//   function handleChange(event) {
//     const { name, value } = event.target;
//     console.log(value);

//     setPin(value);
//   }

//   useEffect(() => {
//     const debonce = setTimeout(() => {
//       axios
//         .get("https://dummyjson.com/products")
//         .then((res) => {
//           console.log(res);
//         })
//         .catch(() => {});
//     }, 2000);

//     return () => clearTimeout(debonce);
//   }, [pin]);
//   return (
//     <div>
//       <input name="pin" onChange={handleChange} />
//     </div>
//   );
// }

// let array = [
//   [1, 2],
//   [1, 2, [3, 4, [2, 3]]],
// ];

// const customFlatArray = (arr, depth = 1) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i]) & (depth > 0)) {
//       res.push(...customFlatArray(arr[i], depth - 1));
//     } else {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };

// console.log(customFlatArray(array, 3));

// let obj = {
//   name: "shashikant",
//   hello: function (arg, arg2) {
//     console.log(`${this.name} say hello ${arg} ${arg2}`);
//   },
// };

// let obj2 = {
//   name: "Ravikant",
// };

// const newfn = obj.hello.bind(obj2, "world", "Good");

// console.log(newfn);

// newfn();

//===============================================================================

function memoizedAddTo256() {
  console.log("--------------");
  var cache = {};

  return function (num) {
    if (cache[num]) {
      console.log("cached value");
      return cache[num];
    } else {
      console.log("not cached value");
      cache[num] = num + 256;
      return cache[num];
    }
  };
}
var memoizedFunc = memoizedAddTo256();
console.log(memoizedFunc(20));
console.log(memoizedFunc(20));
console.log(memoizedFunc(20));
console.log(memoizedFunc(20));
