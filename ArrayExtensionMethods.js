let myArray = [
    "Jim",
    "Bob",
    "Harriet",
    "Dana"
];

function findNamesWith3Characters(element) {
    console.log(element);
    console.log("----------------------------");
    if(element.length == 3) {
        return true;
    }
}

let namesWith3Characters = myArray.filter(findNamesWith3Characters);
console.log(namesWith3Characters);
