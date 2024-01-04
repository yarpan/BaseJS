
//OBJECTS

let regularObj = new Object()

let bracerersObj = {}


function Person(name, age, isMarried){
    this.name = name;
    this.age = age;
    this.isMarried = isMarried;
    this.speciality = {
        position: "qa",
        salary: 10000,
        "some hobbies": "jazz, sex, box"
    }
    this.echo = function(){
        console.log(`hello ${name} !!!`)
    }
    this.echooo = sayhello;
}

let vadym = new Person ("Vadym", 36, true);
console.log((vadym))

//delete vadym.speciality

console.log("name" in vadym)
console.log("*****************************")


for (let key in vadym){
    console.log(key)
    console.log(vadym[key])
}

vadym.echo()

function sayhello(name){
    console.log(`hello ${name} !!!`)
}

console.log("=========================")
vadym.echooo()

vadym.echooo("not vadym")
