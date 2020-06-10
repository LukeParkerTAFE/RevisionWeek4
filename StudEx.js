// Q1 - Use the array.map function to convert an array of strings into an array of 
// the length of each of those strings
console.log("Question 1--------------------------");
let ArrayofString = ["Earth", "Sun", "Moon", "Jupter", "Mars"];

function convertToStringLength(ArrayofString) {

    return {
        string: ArrayofString,
        length: ArrayofString.length
    }
}

let newStringArray = ArrayofString.map(convertToStringLength);
console.log(ArrayofString, newStringArray)


// Q2 - Create an array of numbers. Use the array.map function to add 5 to each 
// of those numbers
console.log("Question 2--------------------------");
let numberArray = [2342, 5, 2, 6, 8];

function newArrayadd5(numberArray) {

    return numberArray + 5;

}

let newNumberArray = numberArray.map(newArrayadd5);
console.log(numberArray, newNumberArray);
// Q3 - Create an array of people with properties firstName and lastName. 
// Use the array.map function to create an array of the full names of each of the people.
console.log("Question 3--------------------------");
let people = [
    {
        firstName: "Sharmin",
        lastName: "Alam",

    },

    {
        firstName: "Zubair",
        lastName: "Sadit"

    }
];

function combineToFullName(people) {
    return `${people.firstName} ${people.lastName}`;

}

let newFullName = people.map(combineToFullName);
console.log(people, newFullName);
// Q4 - Create an array of pets with properties name (string), age (number) and 
// owner (object with name and age). Use the array.map function to get an array of the 
// names of all the owners.

console.log("Question 4--------------------------");
let pet = [
    {
        name: "Jerry",
        age: 12,
        owner: {
            name: "Jack",
            age: 26
        }

    }, {
        name: "Tom",
        age: 2,
        owner: {
            name: "Alam",
            age: 36
        }
    }

];

function getNewArrayObject(pet) {

    return pet.owner.name;

}







let newArrayOwner = pet.map(getNewArrayObject);

console.log(pet, newArrayOwner);