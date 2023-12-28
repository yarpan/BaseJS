
// Creating an Array
let arr = [4,5,6, "string", nul, {a:12}]
let a = arr[0]

let arr2 = []
arr2.push(34)

let testArray = [1, 1, 1, 2, 3, 4, 5, 5, 66, 6, 6, 7, 77, 8, 8, 8888, 9];

// Add +5 for each element
for (let i = 0; i < testArray.length; i++) {
    testArray[i] += 5;
}
console.log(testArray);

// Create Set from Array
let testSet = new Set(testArray)
console.log(testSet)

// Iterate Set and increase each element by 2, then sum all elements
let newSet = new Set();
let setSum = 0;
for (let num of testSet) {
    newSet.add(num + 2);
    setSum += num;
}
console.log(newSet);
console.log("setSum = " + setSum);

// Create Map with ABC and values of Set
let keys = 'abcdefghijklmnopqrstuvwxyz'.split('').slice(0, newSet.size);
//NOTE this solution has limitation for 26 values in the Set. 
let testMap = new Map();
let i = 0;
for (let value of newSet) {
    testMap.set(keys[i], value);
    i++;
}
console.log(testMap);

// Concatenate the Keys of the Map
let keysConc = [...testMap.keys()].join('');
console.log("concatenated keys: " + keysConc);
