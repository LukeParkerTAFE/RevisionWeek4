let pets = [
    {
        name: "Rex",
        age: 1,
        species: "Dog",
        id: "20ad7703-8350-47e3-95c1-6c1de12d1338",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Rome",
        age: 5,
        species: "Cat",
        id: "91c02184-534f-4bcf-aba0-4103171d5e92",
        ownerId: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d",
    }, {
        name: "Lucky",
        age: 3,
        species: "Dog",
        id: "2356e9cb-e07d-4c7e-8754-3faf68477fd7",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Roach",
        age: 7,
        species: "Dog",
        id: "23ad3350-bcae-4153-b79c-4a77d9343956",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Mair",
        age: 1,
        species: "Goldfish",
        id: "76712e6e-8554-4a94-8990-a5b53a87cef5",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "604bfac3-c0e4-41c1-ad4f-69081b1c2e3e",
        ownerId: "913ad967-3199-4f53-a228-79f0615b37af",
    }, {
        name: "Hurst",
        age: 1,
        species: "Goldfish",
        id: "9e5384b0-07bb-4067-8a33-6028c89fc155",
        ownerId: "460dca95-df25-4673-8593-905c673efc9e",
    }
];

let owners = [
    {
        firstName: "Mitchell",
        lastName: "Bradshaw",
        id: "d4558c2f-9cda-4ae6-8aef-9ceb9eaefa2d"
    }, {
        firstName: "Sofija",
        lastName: "Byrd",
        id: "913ad967-3199-4f53-a228-79f0615b37af"
    }, {
        firstName: "Erika",
        lastName: "",
        id: "460dca95-df25-4673-8593-905c673efc9e"
    }
];

function getPet(id) {
    return pets.find(p => p.id == id);
}

function getOwner(id) {
    return owners.find(o => o.id == id);
}

function getPetsByOwner(ownerId) {
    return pets.filter(p => p.ownerId == ownerId);
}

function getPetCountByOwner() {
    return owners.map(owner => ({ ownerId: owner.id, numbersOfPets: getPetsByOwner(owner.id).length }));
}

function getPetNamesSortByOwnerLastName() {
    function sortPetsByOwnerLastName(pet1, pet2) {
        let owner1Last = getOwner(pet1.ownerId).lastName.toLowerCase();
        let owner2Last = getOwner(pet2.ownerId).lastName.toLowerCase();
        if (owner1Last > owner2Last) {
            return 1;
        } else if (owner1Last < owner2Last) {
            return -1;
        } else {
            return 0;
        }
    }
    return pets.sort(sortPetsByOwnerLastName).map(p => p.name);
}

console.log(getPetNamesSortByOwnerLastName());