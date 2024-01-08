

function sum (a, b) {
    const c = a + b;
    console.log(c)
}

sum2 = function (a, b) {
    const c = a + b;
    console.log(c)
}

//

const personOne = {
    name: 'Bob',
    age: 21
}

function increasePersonAge(person){
    person.age += 1
    return person
}

function increasePersonAgeConventioned(person){
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age += 1
    return updatedPerson
}

const updatedPersonOne = increasePersonAgeConventioned(personOne)
console.log(personOne.age)
console.log(updatedPersonOne.age)