// Declare the incrementor (runs once before the loop starts)
// let i = 0

// Condition (is checked once before each iteration of the
// loop. If it is false the loop is broken)
// i < 5

// Incrementor/Incrementing Statement (is run once after each
// iteration of the loop)
// i++
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// %
// Write a for loop that logs all the odd numbers between 9 and 17
// for (let i = 9; i <= 17; i++) {
//     if (i % 2 == 0) {
//         continue;
//     }

//     console.log(i);
// }

let i = 9;
while (i <= 17) {
    if (i % 2 == 0) {
        i++;
        continue;
    }

    console.log(i);
    i++;
}

