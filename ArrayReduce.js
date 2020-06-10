let numbers = [2, 3, 1, 4, 2];

function multiplyReducer(acc, val) {
    return acc * val;
}

let productOfNumbers = numbers.reduce(multiplyReducer);

// console.log(productOfNumbers);


let num1 = 12;
let num2 = 15;
// console.log(Math.max(numbers));

function minReducer(currentMin, currentVal) {

}

let minOfNumbers = numbers.reduce(minReducer)
// console.log(minOfNumbers)

let bankers = [
    {
        name: "Andrey",
        netWorth: 50000
    }, {
        name: "Luella",
        netWorth: 20000
    }, {
        name: "Aditya",
        netWorth: 70000
    }, {
        name: "Yazmin",
        netWorth: 40000
    }
];

function getSumOfNetWorth(sumOfNetWorth, banker) {
    return sumOfNetWorth + banker.netWorth;
}

let sumOfNetWorth = bankers.reduce(getSumOfNetWorth, 0);
console.log(sumOfNetWorth);
console.log(sumOfNetWorth / bankers.length);
