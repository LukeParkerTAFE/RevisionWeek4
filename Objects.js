// let person = {
//     name: "Luke",
//     age: 23,
//     friends: ["Dan", "Alicia", "Max", "Bob"]
// };

// console.log(person["name"]);
// console.log(person.name);
// person["lastName"] = "Parker";

// person.friends = ["Dan", "Alicia", "Max", "Bob"];
// console.log(person);

// console.log(person.friends[2]);

// for (let i = 0; i < person.friends.length; i++) {
//     console.log(person.friends[i])
// }
let pet = {
    name: "Rex",
    age: 6
}

console.log("".padEnd(30, "-"));
for (const key in pet) {
    console.log(key);
    console.log(pet[key]);
    console.log("".padEnd(30, "-"));
}

let historicalRates = [
    {
        CAD: 1.565,
        CHF: 1.1798,
        GBP: 0.87295,
        SEK: 10.2983,
        EUR: 1.092,
        USD: 1.2234,
    }, {
        CAD: 1.265,
        CHF: 1.3798,
        GBP: 0.97295,
        SEK: 10.1983,
        EUR: 1.082,
        USD: 1.2634,
    }
]

for (const day of historicalRates) {
    console.log("------------------------");
    for (const currencyCode in day) {
        console.log(`${currencyCode}: ${day[currencyCode]}`)
    }
    console.log("------------------------");
}