// створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];
// перебрати масив і до кожного числа додати 5, і вивести результат в консоль
// створити на базі масиву Set унікальних значень
// ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів
// створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}
// зробити конкатенацію ключів з мапи. 


// створити масив з цифрами [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];
let testArray = [1,1,1,2,3,4,5,5,66,6,6,7,77,8,8,8888,9];

// перебрати масив і до кожного числа додати 5, і вивести результат в консоль
for (let i = 0; i < testArray.length; i++) {
    testArray[i] += 5;
}
console.log(testArray);

// створити на базі масиву Set унікальних значень
let testSet = new Set(testArray)
console.log(testSet)

// ітерувати через сет і кожне число збільшити на 2, далі вивести суму всіх елементів
let newSet = new Set();
let setSum = 0;
for (let num of testSet) {
    newSet.add(num + 2);
    setSum += num;
}
console.log(newSet);
console.log("setSum = " + setSum);

// створити мапу з літерами алфівіту, і значеннями з сету {"a" : 1, "b" : 2 ....}
let keys = 'abcdefghijklmnopqrstuvwxyz'.split('').slice(0, newSet.size);
//NOTE this solution has limitation for 26 values in the Set. 
//It is not implemented vor values more than 26 because there is no info about key creation strategy (a2, aa, other chr symbols, etc.)
let testMap = new Map();
let i = 0;
for (let value of newSet) {
    testMap.set(keys[i], value);
    i++;
}
console.log(testMap);

// зробити конкатенацію ключів з мапи. 
let keysConc = [...testMap.keys()].join('');
console.log("concatenated keys: " + keysConc);
