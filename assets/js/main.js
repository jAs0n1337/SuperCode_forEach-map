
// array.forEach() lev1_1
let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]

//Sortiere getraenke vorher alphabetisch.
getraenke.sort();
console.log(getraenke);

getraenke.forEach((getraenk,) => {
    document.write(" ", getraenk + "<br>");
    console.log(getraenk);
})
//===============================================

// array.map lev1_2 map
let upperDrinks = getraenke.map((getraenk) => {
    return getraenk.toUpperCase();
});

console.log(upperDrinks);
//===============================================

// array.map lev1_3 map
let numbers = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
console.log(numbers);

const numbersTimesTwo = numbers.map((number) => number * 2);
console.log(numbersTimesTwo.sort((a, b) => a - b));
//===============================================

// array.map lev1_5
let checkNumber = [
    18,
    16,
    80,
    51,
    47,
    38,
    95,
    42,
    68,
    61,
    34,
    51,
    20,
    17,
    56,
    31,
    100,
    6,
    5,
    30,
    74,
    97,
    28,
    99,
    91,
    27,
    73,
    12,
    92,
    6,
    27,
    71,
    26,
    15,
    78
];
checkNumber.map((number) => {
    if (number % 3 === 0) {
        number += 100
        console.log(number);
    } else {
        console.log(number);
    }
})
//===============================================