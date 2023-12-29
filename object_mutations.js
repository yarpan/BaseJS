const person = {
    name: 'Bob',
    age: 25
}

//link to same Object in memory
const person2 = person

//creating separate copy of Object //nested Objects still as links
const person3 = Object.assign({}, person)

// ... operator spread for spreading the Object //nested Objects still as links
const person4 = {...person}

//completely independent new Object
const person5 = JSON.parse(JSON.stringify(person))