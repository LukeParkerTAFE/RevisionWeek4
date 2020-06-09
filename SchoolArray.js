let schools = [
    {
        name: "School1",
        address: "123 Fake Street",
        headTeacher: {
            title: "Ms.",
            lastName: "Dunbell"
        },
        students: [
            {
                firstName: "Davis",
                lastName: "Adams",
                age: 12,
                yearGroup: 7
            }, {
                firstName: "Dana",
                lastName: "Cosgrove",
                age: 13,
                yearGroup: 7
            }, {
                firstName: "Maxine",
                lastName: "Wooper",
                age: 11,
                yearGroup: 6
            }, {
                firstName: "Kaylee",
                lastName: "Parks",
                age: 6,
                yearGroup: 0
            }, {
                firstName: "Alexandra",
                lastName: "Wilson",
                age: 6,
                yearGroup: 1
            }, {
                firstName: "Daniella",
                lastName: "Aarons",
                age: 12,
                yearGroup: 7
            }
        ],
        teachers: [
            {
                title: "Miss",
                lastName: "Fowler"
            }
        ]
    }, {
        name: "School2",
        address: "123 Fake Street",
        headTeacher: {
            title: "Mr.",
            lastName: "Williams"
        },
        students: [
            {
                firstName: "Dorothy",
                lastName: "Driscoll",
                age: 17,
                yearGroup: 11
            }, {
                firstName: "Kyron",
                lastName: "North",
                age: 18,
                yearGroup: 12
            }, {
                firstName: "Carolyn",
                lastName: "Sharma",
                age: 11,
                yearGroup: 6
            }, {
                firstName: "Maisha",
                lastName: "Hayes",
                age: 6,
                yearGroup: 0
            }, {
                firstName: "Yasmin",
                lastName: "Medrano",
                age: 6,
                yearGroup: 1
            }, {
                firstName: "Nirma",
                lastName: "Beltran",
                age: 12,
                yearGroup: 7
            }
        ]
    }
];


let yearGroupCounts = new Array(13).fill(0)

for (const school of schools) {
    for (const student of school.students) {
        yearGroupCounts[student.yearGroup]++;
    }
}

for (let i = 0; i < yearGroupCounts.length; i++) {
    if (i == 0) {
        console.log(`There are ${yearGroupCounts[i]} students in Kindergarden`);
    } else {
        console.log(`There are ${yearGroupCounts[i]} students in Year ${i}`);
    }
}
