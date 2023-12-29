// ==================
// Creating Object

const myStreet = {
    streetName: 'Bandery st.',
    streetLongBuildings: 86,
    streetHasSkyscrapers: false
};


let myStreet2 = new Object();
myStreet2.streetName = 'Bandery st.';
myStreet2.streetLongBuildings = 86;
myStreet2.streetHasSkyscrapers = false;


// ==================
// Creating Object on Prototype of another Object
let bird = {
    isSwim: false,
    isFligth: true,
    isWalk: true
};

let swan = Object.create(bird);
swan.legs = 2;
swan.color = 'white';

// ==================
// Creating Object and set another Object as Prototype
let sparrow = {
    color: 'grey',
    isSwim: false,
    __proto__: bird
};

console.log(bird);
console.log(swan);
console.log(sparrow);



// Creating Object and child Object
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

// Making previously created Object as child of new Object
let person = {
    isHuman: true,
    yearsOld: 26,
    sex: 'male'
}
engineer.__proto__ = person;

// Log the values of all 3 Objects: person > engineer > qaEngineer
let obj = qaEngineer;
while (obj) {
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(key + ": " + obj[key]);
    }
    obj = Object.getPrototypeOf(obj);
}










