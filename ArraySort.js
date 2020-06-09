let numbers = [12, 7, 8];
console.log(numbers);

function compareNumbers(num1, num2) {
    return num1 - num2
}

let sortedNumbers = numbers.sort(compareNumbers);

console.log(sortedNumbers);

let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 11,
        year: 2019
    }
];

let people = [
    {
        firstName: "Margaret",
        lastName: "Cox",
        age: 35
    }, {
        firstName: "Asma",
        lastName: "Bauer",
        age: 29
    }, {
        firstName: "Aaryan",
        lastName: "Molloy",
        age: 22
    }, {
        firstName: "Jazmin",
        lastName: "Flowers",
        age: 22
    }
];

function sortByAge(person1, person2) {
    return person1.age - person2.age;
}

function sortByLastName(person1, person2) {
    if (person1.lastName.toLowerCase() < person2.lastName.toLowerCase()) {
        return -1;
    } else if (person1.lastName.toLowerCase() > person2.lastName.toLowerCase()) {
        return 1;
    } else {
        return 0;
    }
}

let peopleSortedByAge = people.sort(sortByLastName).sort(sortByAge);
console.log(peopleSortedByAge)
