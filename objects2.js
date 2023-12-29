var username = 'Abram'
const postQty = 23

const userProfile = {
    username: username,
    postQty: postQty,
    hasAgreement: false
}

console.log (userProfile)
//{ name: 'Abram', postQty: 23, hasAgreement: false }

username = 'Moisei'
console.log (userProfile)
//{ name: 'Abram', postQty: 23, hasAgreement: false }


const userProfile2 = {
    username,
    postQty,
    hasAgreement: false
}

console.log (userProfile2)
//{ username: 'Moisei', postQty: 23, hasAgreement: false }