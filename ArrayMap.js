// map function

// let numbers = [2, 5, 4, 1, 7];

// function doubleNumber(num) {
//     return num * 2;
// }

// let numbersDoubled = numbers.map(doubleNumber);
// console.log(numbersDoubled);

let teachers = [
    {
        givenName: "Aliya",
        surname: "Love",
        subject: "Math"
    }, {
        givenName: "Mischa",
        surname: "Sach",
        subject: "History"
    }, {
        givenName: "Jenny",
        surname: "Matthews",
        subject: "Science"
    }
];

function teacherToPerson(teacher) {
    return {
        firstName: teacher.givenName,
        lastName: teacher.surname
    }
}

let teachersAsPeople = teachers.map(teacherToPerson);
// let teachersAsPeople = teachers.map(teacher => ({firstName: teacher.givenName, lastName: teacher.surname}));

console.log(teachers);
console.log(teachersAsPeople);


// let teachersAsPeople = [
//     {
//         firstName: "Aliya",
//         lastName: "Love"
//     }, {
//         firstName: "Mischa",
//         lastName: "Sach"
//     }, {
//         firstName: "Jenny",
//         lastName: "Matthews"
//     }
// ];

// let people = [
//     {
//         firstName: "Jagoda",
//         lastName: "Dowling"
//     }
// ];

// function printAllPeople(peopleArray) {
//     for (let person of peopleArray) {
//         console.log(`${person.firstName} ${person.lastName}`);
//     }
// }

// printAllPeople(teachers)

let names = ["Dan", "John", "Alice", "Jim"];
let namesLengths = [3, 4, 5, 3];