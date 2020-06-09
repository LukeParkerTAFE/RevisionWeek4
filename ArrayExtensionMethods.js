let myArray = [
    "Jim",
    "Bob",
    "Harriet",
    "Dana"
];

let namesWith3Characters = myArray.filter(element => element.length == 3);
// console.log(namesWith3Characters);


let schools = [
    {
        name: "School of Rock",
        address: "Rock 'n' Roll Bvd"
    }, {
        name: "School of Jazz",
        address: "Davies Ln"
    }, {
        name: "School of Classical",
        address: "Bach Hwy"
    }
]

// Find the first school with an address starting with 'R'
// function findAddressStartingWithR(school) {
//     return school.address[0].toLowerCase() == "r";
// }
let schoolWithAddressStartingWithR = schools.find(school => school.address[0].toLowerCase() == "r");
// console.log(schoolWithAddressStartingWithR)

// Some

let numbers = [1, 5, 3, 1, 5];
let hasEvenNumbers = numbers.some(num => num % 2 == 0);
// console.log(hasEvenNumbers);

let people = [
    {
        name: "Luke",
        age: 22
    }, {
        name: "Hannah",
        age: 22
    }
];

let hasPersonWithAge22 = people.every(person => person.age == 22);
console.log(hasPersonWithAge22);

// Some: returns true if any of the values returned true
// Every: returns true if all of the values returned true


// Get all names that start with a,b,c or d
let names = [
    "Alice",
    "Daniel",
    "Luke",
    "Jacinta"
];

let namesMatches = names.filter(name => ["a", "b", "c", "d"].includes(name[0].toLowerCase()));
console.log(namesMatches);

