// 1
// 2
// Fizz (3)
// 4
// Buzz (5)
// Fizz (6)
// 7
// 8
// Fizz (9)
// Buzz (10)
// 11
// Fizz (12)
// 13
// 14
// Fizzbuzz (15)
// 16
// 17
// Fizz (18)
// 19
// Buzz (20)
// ...
// 98
// Fizz (99)
// 100

for (let i = 1; i <= 100; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log("FizzBuzz")
    } else if ((i % 3 == 0)) {
        console.log("Fizz");
    } else if ((i % 5 == 0)) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}
