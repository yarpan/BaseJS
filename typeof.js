console.log(typeof 3);              //number
console.log(typeof 'abc');          //string
console.log(typeof true);           //boolean
console.log(typeof '3');            //string
console.log(typeof Number('3'));    //number

const number = Number('51');
console.log(Number.isNaN(number)); //false

const string = Number('abc');
console.log(Number.isNaN(string)); //true
