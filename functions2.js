
getAge = function(){
    return "my age is 69"
}


function echo() {
    return getAge;   // returns link to func
    return getAge(); // returns result of func
}


ec = echo();
console.log(ec());


getName = () => {
    return "name";
}


getAge = function(){
let b = 5;
    function callA(){
        let someData = "data" + b;
    }
    return "my age is 69"
}


getAge = (age, name) => {
    return `my age is ${age} and my name is ${name}`
}

console.log(getAge(35, Alex));



// console.log('hello console');


// function call(callback){

//     console.log('hello callback');
//     callback();
// }


function call(){
    console.log('this is main function');

    function nestedFunction(){
        console.log('this is nested function');
    }
    return nestedFunction
}

call()      //this is main function

call()()    //this is main function
            //this is nested function