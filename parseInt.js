console.log(Number.parseInt('34'))              //34
console.log(Number.parseInt('34rfdaef721'))     //34
console.log(Number.parseInt('sdf345'))          //NaN
console.log(Number.parseInt(''))                //NaN

console.log(Number.parseFloat('54abc'))         //54
console.log(Number.parseFloat('42.1223ffff'))   //42.1223
console.log(Number.parseFloat(''))              //NaN