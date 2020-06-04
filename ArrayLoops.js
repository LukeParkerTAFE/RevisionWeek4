let numbers = [12, 19, 57, 84, 24];

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }

let bigNumbers = [];

for (let element of numbers) {
    if (element > 30) {
        bigNumbers.push(element)
    }
}
console.log(bigNumbers);

// for (let i = 0; i < numbers.length; i++) {
//     let number = numbers[i];
//     console.log(number);
// }