//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }
}

const type_of_food = Object.keys(person3)
const fav_food = Object.values(person3)

for(let i = 0; i < type_of_food.length; i++){
    if(Array.isArray(fav_food[i]) == true){
        console.log(`My favorite ${type_of_food[i]} is:`)
        for(j = 0; j < fav_food[i].length; j++){
            console.log(fav_food[i][j])
        } 
    } else if(typeof fav_food[i] === 'object'){
        console.log(`I have a lot of favorite ${type_of_food[i]}:`)
        const store = Object.keys(fav_food[i])
        const fav = Object.values(fav_food[i])
        for(k = 0; k < fav.length; k++){
            console.log(`From ${store[k]} is ${fav[k]}`)
        }
    } else {
            console.log(`My favorite ${type_of_food[i]} are ${fav_food[i]}`)
    }
} 


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => console.log(`Name: ${this.name}\nAge: ${this.age}`);
    this.addAge = () => this.age = (this.age + 1);
}

matt = new Person('matt', 34)
jen = new Person('Jen', 36)

matt.printInfo()
jen.printInfo()
jen.addAge()
jen.addAge()
jen.addAge()
jen.printInfo()


// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkString = (string) => {
    return new Promise( (resolve, reject) => {
        if(string.length > 10){
            resolve(true)
        } else{
            reject(false)
        }
    })
}

checkString('hellomyname')
.then( (result) => {
    console.log(`Big word`)
})

.catch( (error) => {
    console.log(`Small Number`)
})