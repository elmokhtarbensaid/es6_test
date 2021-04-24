
//Exemple 1
let firstname = 'El Mokhtar'
let age = 26

let ageField = 'age'

let obj = {
    firstname,
    [ageField] : age,
    'greet me'(){
        console.log(`Hello ${this.firstname}, you are ${this.age} years old`)
    }
}

obj["greet me"]()