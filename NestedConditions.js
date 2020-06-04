let age = 15;
let favDrink = "Red Bull";

if (favDrink == "Wine") {
    if (age < 18) {
        console.log("You can't drink that!");
    } else {
        console.log("I like wine as well");
    }
} else if (favDrink == "Red Bull") {
    if (age < 16) {
        console.log("You shouldn't be having those");
    } else {
        console.log("Wow, that's too sweet for me!");
    }
} else {
    console.log("That sounds like a nice drink");
}

// Write a decision tree that checks the color and price of a car
// If the price is over 50000 and the color is red then log "I like red cars"
// If the price is over 50000 and the color is not red then log "That's too expensive"
// If the price is under 50000 but over 10000 and the color is blue then log
// "I like blue cars too". If the price is under 50000 and over 10000 and the color is red
// then log "I like red cars, and this one's a bargain".
// If the price is under 10000 then log "Wow, what a bargain"

let color = "Red";
let price = 150000;

if (price > 50000) {
    // Some Code
    if (color == "Red") {
        console.log("I like red cars")
    } else {
        console.log("That's too expensive")
    }
} else if (price > 10000) {
    // Some Code
} else {
    console.log("Wow, what a bargain")
}



// if (color == "Red"){

// } else if(color == "Blue") {

// } else {

// }