let naughtsAndCrosses = [
    [" ", " ", "X"],
    [" ", " ", " "],
    [" ", "O", " "]
];

for (const row of naughtsAndCrosses) {
    let rowText = `${row[0]} | ${row[1]} | ${row[2]}`;

    console.log(rowText);
}

