let people = [
    {
        name: "Luke",
        age: 23,
        pet: {
            name: "Rex",
            species: "Dog",
            age: 6
        }
    }, {
        name: "Chris",
        age: 35,
        pet: {
            name: "Lucky",
            species: "Cat",
            age: 2
        }
    }
];

// console.log(`${people[0].name} is ${people[0].age} years old`);
// console.log(`${people[0].name} has a pet ${people[0].pet.species} called ${people[0].pet.name}`);

for (const person of people) {
    console.log(`${person.name} is ${person.age} years old`);
    if (person.pet.species == "Dog") {
        console.log(`${person.name} has a pet ${person.pet.species} called ${person.pet.name}`);
    }
}

const fs = require("fs");
const path = require("path");
let filetext = fs.readFileSync(path.join(__dirname, "DogBreeds.json")).toString()
console.log(JSON.parse(filetext))