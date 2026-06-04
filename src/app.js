/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function(num) {
  if (num === 0) return 1;
  factorial = num * findFactorial(num - 1);
  return factorial;
}

//Exercise 2
const reverseString = function(str) {
  const strArr = str.split("");
  let middleStr = "";
  const length = strArr.length;
  if (length === 1) return str;
  const lastChar = strArr[length -1];
  strArr[length -1] = strArr[0];
  strArr[0] = lastChar;
  middleStr = reverseString((strArr.slice(1, length-1)).join(""));
  newArr = strArr.splice(1, length-2, ...middleStr.split(""));
  str = strArr.join("");
  return str;
}



//Exercise 3
const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr) {
  arr2.push(arr[0]);
  arr1.splice(0,1);
  if (arr.length === 0){
    console.log("arr1:", arr1);
    console.log("arr2:", arr2);
    return;
  } 
  swap(arr1); 
}

swap(arr1)
/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap }