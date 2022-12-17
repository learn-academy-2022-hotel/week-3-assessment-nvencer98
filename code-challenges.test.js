// ASSESSMENT 3: Coding Practical Questions with Jest

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

// FAIL  ./code-challenges.test.js
// fibonacci
//   ✕ takes in a number greater than 2 and creates a new array

// ● fibonacci › takes in a number greater than 2 and creates a new array

//   ReferenceError: fibonacci is not defined


const fibonacci = (n) => {
  let array = [1,1]
for (let i = 1; i <=n ; i++) {
  array.push(array[i] + array[i - 1])
  
  console.log(array[i])
  
}
return (array)
}


  
// psuedo code 
// create functin that takes in a number greater than 2 and creates a array with the remaining numbers.
//create a test function: describe(fibLength1, () =>{
//it("takes in a number greater than 2 and creates a new array", () => {
 // expect(fibLength1()).toEqual([1, 1, 2, 3, 5, 8])
//}
//}
//run to see if it is a good fail 
// 1 + 1 = 2 
// 1 + 2 = 3
// 2 + 3 = 5
// 3 + 5 = 8
//adding the zero index and 1 index together to get index 2
//adding the 1 index and 2 index to get the 3rd index.
// adding the 2nd and 3rd index to get the 4th index
//adding the 3rd and 4th index to get the 5th index

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