let numbers = [2, 5, 7, 19];


let myString = "The numbers in the array are: "

numbers.forEach((data) => {
    // console.log(data);
    myString += `${data}, `;
});
console.log(myString)

for (let data of numbers) {
    console.log(data);
}

for (let i = 0; i < numbers.length; i++) {
    let data = numbers[i];
    console.log(data);
}
