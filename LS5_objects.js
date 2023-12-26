// створити 3 обʼєкти через {}
// створити 3 обʼєкти через Object()
// створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
// унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів



// створити 3 обʼєкти через {}
const myStreet = {
    streetName: 'Bandery st.',
    streetLongBuildings: 86,
    streetHasSkyscrapers: false
};

const myCity = {
    name: 'Lviv',
    population: 59325,
    lat: 49.25,
    long: 23.85,
    localStreet: myStreet
};

const myCountry = {
    name: 'Ukraine',
    capital: 'Kyiv',
    favoriteCity: myCity,
    isCapital: false
};



// створити 3 обʼєкти через Object()
let myStreet2 = new Object();
myStreet2.streetName = 'Bandery st.';
myStreet2.streetLongBuildings = 86;
myStreet2.streetHasSkyscrapers = false;

let myCity2 = new Object();
myCity2.name = 'Lviv';
myCity2.population = 59325;
myCity2.lat = 49.25;
myCity2.long = 23.85;
myCity2.localStreet = myStreet2;

let myCountry2 = new Object();
myCountry2.name = 'Ukraine';
myCountry2.favoriteCity = myCity2;
myCountry2.isCapital = false;
myCountry2.capital = 'Kyiv';

console.log(myStreet2);
console.log(myCity2);
console.log(myCountry2);



// створити обʼєкт на базі протиту іншого обʼєку (Object.create(інший_оʼєкт), або через __prototype__), створити одному в кожному форматі
let bird = {
    isHuman: false,
    isSwim: false,
    isFligth: true,
    isWalk: true
};

let swan = Object.create(bird);
swan.legs = 2;
swan.color = 'white';

let sparrow = {
    color: 'grey',
    legs: 2,
    isSwim: false,
    __proto__: bird
};

console.log(bird);
console.log(swan);
console.log(sparrow);



// створити обʼєкт engineer, від нього унаслідувати QA_engineer, вивести деталі по всім полям (engineer, QA_engineer)
let engineer = {
    isMasterDegreed: true,
    yearsOfDegree: 6
};

let qaEngineer = Object.create(engineer);
qaEngineer.speciality = "Java";
qaEngineer.yearsOfExperience = 3;

console.log(engineer)
console.log(qaEngineer)
console.log(Object.getPrototypeOf(qaEngineer))



// унаслідувати ваш існуючий engineer від person. вивести значення всіх 3х обʼєктів
let person = {
    isHuman: true,
    yearsOld: 26,
    sex: 'male'
}
engineer.__proto__ = person;

// console.log(engineer)
// console.log(qaEngineer)
// console.log(Object.getPrototypeOf(qaEngineer))
// console.log(Object.getPrototypeOf(engineer))

let obj = qaEngineer;
while (obj) { 
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(key + ": " + obj[key]);
    }
    obj = Object.getPrototypeOf(obj);
}










