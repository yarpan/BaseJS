const userName = 'Jonathan';
const userAge = 39;
const userCar = false;
const wife = null;
const userJob = {};
const friend = {
    userName: 'John',
    userLastname: 'Deere',
    userAge: 35
};

const myWish = {
    dream: "To change my life completely",
    shareMyWish: function () {
        console.log(`But I have a dream - ${this.dream} \n`)
    }
};

console.log(`Hello, my name is ${userName} and i am alcoholic.`);
console.log(`I am ${userAge} years old.`);
console.log('Do I have a car? ' + userCar);
console.log('Do I have a wife? ' + wife);
console.log('And Do I have a job? ' + userJob.position);
console.log(`Also I have a friend ${friend.userName} ${friend.userLastname} and he is ${friend.userAge} years old, and we like to fight with a bottle of the Scotch`);
myWish.shareMyWish();

console.log(typeof 3);              //number
console.log(typeof 'abc');          //string
console.log(typeof true);           //boolean
console.log(typeof '3');            //string
console.log(typeof Number('3'));    //number





