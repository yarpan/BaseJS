const myCity = {
    city: 'London',
    region: 'US'
}

//Add property')
myCity.popular = true
console.log(myCity)

//Change property')
myCity.region = 'UK'
console.log(myCity)

//Delete property')
delete myCity.popular
console.log(myCity)

//Add property with []')
myCity['visited'] = false
console.log(myCity)

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'
console.log(myCity)

const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)
//true

delete myCity.info['isPopular']

console.log(myCity)
//{ city: 'New York', info: { country: 'USA' } }
