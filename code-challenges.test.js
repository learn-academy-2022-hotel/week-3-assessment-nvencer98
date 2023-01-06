// ASSESSMENT 3: Coding Practical Questions with Jest

const { removeTypeDuplicates } = require("@babel/types")
const { default: test } = require("node:test")
const { array, number } = require("yargs")

// const { it } = require("node:test")
// const { number, describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.


describe("fibonacci", () =>{
  it("takes in a number greater than 2 and creates a new array", () => {
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
  }
)})

describe("fibonacci", () =>{
  it("takes in a number greater than 2 and creates a new array", () => {
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  }
)})

FAIL  ./code-challenges.test.js
fibonacci
  ✕ takes in a number greater than 2 and creates a new array

● fibonacci › takes in a number greater than 2 and creates a new array

  ReferenceError: fibonacci is not defined


const fibonacci = (n) => {
  let array = []
  let firstNum = 0
  let secondNum = 1
for (let i = 0; i <=n ; i++) {
  array.push(firstNum) 
let nextNum = firstNum + secondNum
   firstNum = secondNum
  secondNum = nextNum
  
  
}
array.shift()
return (array)
}


  
// psuedo code 
// create functin that takes in a number greater than 2 and creates a array with the remaining numbers.
//create a test function:describe("fibonacci", () =>{
//   it("takes in a number greater than 2 and creates a new array", () => {
//     expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
//   }
// )})
//}
//}
//run to see if it is a good fail 
// a fibbonaci is basically adding the 2 previous numbers to get the next. 
// i need to make a for loop and have it start at zero.
//i will push a number into my new array 
// have the next number = to the second and first number.
// firstNum = secondNum
//   secondNum = nextNum
// I keep getting 0 at the begginning so i did a unshift()
// cry out of confusion.



// array [1, 1, 2, 3, 5, 8]

// array[0] + array[1] = array[2]



// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


describe("sorted", () =>{
  it("takes in a object and returns values sorted least to greatest", () => {
    expect(sorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
  }
)})

describe("sorted", () =>{
  it("takes in a object and returns values sorted least to greatest", () => {
    expect(sorted(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  }
)})


const sorted = (swag) => {
 let cat = Object.values(swag) 
    return cat.sort((a, b) => {
      return a - b
    })
   
   



}

console.log(sorted(studyMinutesWeek1))
console.log(sorted(studyMinutesWeek2))



// psuedo code: Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// first i need to make my describe satements. 
// - run to see if it has a good fail. 
- FAIL  ./code-challenges.test.js
  sorted
    ✕ takes in a object and returns values sorted least to greatest (1 ms)
    ✕ takes in a object and returns values sorted least to greatest

  ● sorted › takes in a object and returns values sorted least to greatest

    ReferenceError: sorted is not defined

      122 | describe("sorted", () =>{
      123 |   it("takes in a object and returns values sorted least to greatest", () => {
    > 124 |     expect(sorted(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
          |     ^
      125 |   }
      126 | )})
      127 |

      at Object.expect (code-challenges.test.js:124:5)

  ● sorted › takes in a object and returns values sorted least to greatest

//     ReferenceError: sorted is not defined
// - creat function. 
// - uses object.values to get what is inside the objects 
// -use sort(a,b ) to get it into number order. if i use only sort() it picks up on the first number in 10 and thinks it comes after 1. 





// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass 

describe("accumulativeArray",() => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(accumulativeArray(accountTransactions1)).toEqual([100, 83, 60, 51])
  })
})

describe("accumulativeArray",() => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(accumulativeArray(accountTransactions2)).toEqual([250, 161, 261, 165])
  })
})

describe("accumulativeArray",() => {
  it("takes in an array and returns an array of the accumulating sum", () => {
    expect(accumulativeArray(accountTransactions3)).toEqual([])
  })
})


const accumulativeArray = (array) => {
  let addedArray = []
  for (let i = 0; i <array.length ; i++){
  if (array === []){
    return array
  }
  else if (i === 0){addedArray.push(array[i])}
  else {addedArray.push(array[i]+ addedArray[i - 1])}
}
return addedArray
}
console.log(accumulativeArray(accountTransactions1))




//psuedo code 
// use describe and create my test
// -run test 
//good fail
// FAIL  ./code-challenges.test.js
// accumulativeArray
//   ✕ takes in an array and returns an array of the accumulating sum
//   ✕ takes in an array and returns an array of the accumulating sum
//   ✕ takes in an array and returns an array of the accumulating sum

// ● accumulativeArray › takes in an array and returns an array of the accumulating sum

//   ReferenceError: accumulativeArray is not defined
// - creat function for my array to go through 
// - creat a blank array
// - create a for loop for my set arrays to go through 
// - use a if statemnt to catch the blank array
// - use else if to catch the first number in given array
// -use else to add previous pushed number and new pushed number
// - for loop will make it repeat