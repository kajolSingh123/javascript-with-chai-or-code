// primitive 

// 7 type : string , number, boolean, null, undefind,symbol,BigInt

const score = 100   // Typeof is number
const scoreValue = 100.5 //  typeof is number


const isLoggeIn = false // boolean
const outSideTemp = null // object
let userEmailId ; // undefind

const id = Symbol ("123")  // symbol
const anotherId = Symbol("123") //symbol

//console.log( id === anotherId);// not Equall value

const bigNumber = 345678987654345n //bigInt

// reference datatype /Non primitive

// Array, Object, Function

const hero =["Shaktiman" , "naagrah" ," doga"] // array

let myObj ={
    name: "kajol", //object
    age :25
}
const myFunction = function(){ // function
    console.log("hello world")
}

//console.log(typeof scoreValue )//,,outSideTemp,userEmailId,id,anotherId,id,anotherId


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack  (Primitive datatype)  heap (non primitive or reference dataType)


 let myYouTubeName = "kajolkumari"
 let anotherName = myYouTubeName
 anotherName ="sudhaSingh"

console.log(myYouTubeName);
console.log(anotherName);


let userOne ={
    email:"kajol@gmail.com",
    number :123456789
}

let userTwo  = userOne

userTwo.email ="sudha@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)