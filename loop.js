const prompt = require("prompt-sync")();
// //while loop
// let number = 0
// while (number <= 10) {
//     console.log(number);
//     number += 2;

// }

// let result = 1;
// let count = 0;
// while (count < 10) {
//     result = result * 2;
//     count = count + 1;

// }
// console.log(result)

//do while loop example
// let yourname;
// do {
//     yourname = prompt('Who Are You?');
// } while (!yourname);
// console.log(yourname);


`for (let number = 0; number < 14; number += 2) {
    console.log(number);
}`


// let result = 1;
// for (let count = 0; count < 10; count = count + 1) {
//     result = result * 2;
// }
// console.log(result)


//break in loop

// for (let current = 20; ; current = current + 1) {
//     if (current % 7 == 0) {
//         console.log(current);
//         break;
//     }
// }

//switch case

// switch (prompt('what is the weather like?')) {
//     case 'rainy':
//         console.log('remember to bring an umberalla.');
//         break;
//     case 'sunny':
//         console.log('dress lightly');
//     case 'cloudly':
//         console.log('go outside and enjoy weather');
//         break;

//     default:
//         console.log('unkown weather type!')
//         break;
// }


//patterns loop
// let rows = 5;
// let pattern = '';
// //outer loop runs for 'rows' no, of times
// for (let n = 1; n <= rows; n++) {
//     //inner loop runs for n
//     for (let num = 1; num <= n; num++) {
//         pattern += num;
//     }

//     //Add a new line character after contents of each line
//     pattern += "\n";
// }
// console.log(pattern);
// console.log(i)

//traingle of hash
// let rows = 7;
// let pattern = '';
// for (let n = 1; n <= rows; n++) {
//     for (let hsh = 1; hsh <= n; hsh++) {
//         pattern += '#';
//     }
//     pattern += "\n"
// }
// console.log(pattern)

//yes,maja aya ...
// for (let n = 1; n <= 100; n++) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if (n % 3 == 0) {
//         console.log('Fizz');
//     } else if (n % 5 == 0) {
//         console.log('Buzz');
//     } else {
//         console.log(n)
//     }
// }


