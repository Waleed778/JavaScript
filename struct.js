// //function simple structure
// function logger() {
//     console.log('My name is Waleed');
// }
// //calling / running/ invoking function
// logger();
// logger();
// logger();


// //simple function declaration
// function fruitProcessor(apples, oranges) {
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;

// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// //function declaration
// function calAge1(birthYear) {
//     //var age1 = 2023 - birthYear;
//     return 2023 - birthYear;
// }
// const age1 = calAge1(1998);
// // console.log(age1)

// //function expression
// const calAge2 = function (birthYear) {
//     return 2023 - birthYear;
// }
// const age2 = calAge2(1996);
// console.log(age1, age2)


// //arrow function
// const calage3 = birthYear => 2037 - birthYear;
// const age3 = calage3(1998);
// console.log(age3);

// //2nd example of arrow fun
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1995, 'waleed'))


// function cutFruitePieces(fruit) {
//     return fruit * 4
// }
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitePieces(apples);
//     const orangesPieces = cutFruitePieces(oranges);

//     const juice = `juice with ${applePieces} piecce of apple and ${orangesPieces} pieces of orange.`
//     return juice;

// }
// console.log(fruitProcessor(2, 3));


const calcAge = function (birthYear) {
    return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
}
console.log(yearsUntilRetirement(1991, 'Dileep'));
console.log(yearsUntilRetirement(1960, 'Nadeem'));

//Recursion

function power(base, exponent) {
    if (exponent === 0) {
        return  1;
    } else {
        return base * power(base, exponent -1);
    }
    
}
console.log(power(2, 3))