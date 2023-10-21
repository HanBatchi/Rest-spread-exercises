function filterOutOddsExample() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
//Refactor it to use the rest operator & an arrow function:
const filterOutOdds = (...nums) => {
  return nums.filter(num => num % 2 === 0);
}

//Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
//Make sure to do this using the rest and spread operator.
const findMin = (...nums) =>{
  //Checks if the user provided an array of numbers, or one number
  if(nums.length === 0) return undefined;
  return Math.min(...nums);
}


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.
const mergerObjects = (obj1, obj2) =>{
  return {...obj1,...obj2};
}

// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...nums) =>{
  return [...arr,...nums.map(num => num * 2)];
}

/** remove a random element in the items array
and return a new array without that item. */

const removeRandome = (items) => {
  const randomIndex = Math.floor(Math.random() * items.length);
  const updateItems = [...items.slice(0, randomIndex),...items.slice(randomIndex + 1)]
  return updateItems;
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  const arrExtend = [...array1, ...array2];
  return arrExtend
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const addKeyValObj = {...obj};
  addKeyValObj[key] = val;
  return addKeyValObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const removedKeyObj = {...obj};
  delete removedKeyObj[key];
  return removedKeyObj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  const combinedObj = {...obj1,...obj2};
  return combinedObj;
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  const updatedObj = {...obj, [key]: val};
  return updatedObj;
}