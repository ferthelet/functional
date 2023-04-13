const double = x => x * 2;
const subtractOne = x => x - 1;
const triple = x => x * 3;
const add5 = x => x + 5;

const myNumber = 10;

const doubled = double(myNumber);
const minusOne = subtractOne(doubled);
/// and so on
console.log(myNumber, doubled, minusOne);

const functionsArray = [
    double,
    subtractOne,
    triple,
    add5,
];

let number = 10;

functionsArray.forEach(func => console.log(number + func(number)));
console.log(number);