// Step 1. Convert the function into a function expression

// BEFORE
// function addTwo(num) {
//     return num + 2;
// }

// AFTER
// const addTwo = function (num) {
//     return num + 2;
// }



// Step 2. Remove the function keyword and add the arrow
// between the parameters and the function body

// BEFORE
// const addTwo = function (num) {
//     return num + 2;
// }

// AFTER
// const addTwo = (num) => {
//     return num + 2;
// }


// Step 3 (Optional). If there is only 1 parameter, remove the brackets around it

// BEFORE
// const addTwo = (num) => {
//     return num + 2;
// }

// AFTER
// const addTwo = num => {
//     return num + 2;
// }


// Step 4 (Optional). If there is only 1 line in the function body,
// remove the curly brackets that declare the function body
// and remove the return keyword

// BEFORE
// const addTwo = num => {
//     return num + 2;
// }
// AFTER
// const addTwo = num => num + 2;

// let res = addTwo(10);
// console.log(res);


// const addTwo = num => {
//     return num + 2;
// }



// const addTwo = num => num + 2;


const getLargest = (num1, num2) => console.log(num1 > num2 ? num1 : num2);
getLargest(12, 19);

// const getSmallest = (num1, num2) => {
//     // if (num1 < num2) {
//     //     return num1;
//     // } else {
//     //     return num2;
//     // }
//     return (num1 < num2) ? num1 : num2
// }

const getSmallest = (num1, num2) => num1 < num2 ? num1 : num2;

let smallest = getSmallest(12, 19);
console.log(smallest);
