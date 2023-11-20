// //before using array we use varible to store data one by one
// const friend1 = 'Michael';
// const friend2 = 'waleed';
// const friend3 = 'nadeem';

// //now we store data in array
// const friends = ['waleed', 'nadeem', 'dileep', 'waqar'];
// console.log(friends);
// //const years = new Array(1996, 1998, 2018, 2020);
// //console.log(years);

// //get data through indexing
// console.log(friends[0]);
// console.log(friends[2]);

// //to know size of the array
// console.log(friends.length);
// //console.log(years.length);


// //get last element of array
// console.log(friends[friends.length - 1]);
// //console.log(years[years.length - 1]);


// //change the one value of array
// //NOT we can not change the entire array value due to cons declariation
// friends[3] = 'sabzal';
// console.log(friends)

// const firstName = 'suleman';
// const suleman = [firstName, 'wahab', 2037 - 1998, 'teacher', friends];
// console.log(suleman);
// console.log(suleman.length)

// //array exercise
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

//some array method
const friends = ['waqar', 'waleed', 'dileep'];

//add element
const newLength = friends.push('sabzal');
console.log(friends)
console.log(newLength)

friends.unshift('Nadeem');
console.log(friends)

//remove elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); //first
console.log(friends);

console.log(friends.indexOf('waleed'));
console.log(friends.indexOf('Ali'));

//include 
//we can use include for conditional
console.log(friends.includes('waqar'));
console.log(friends.includes('Ali'));


if (friends.includes('waqar')); {
    console.log('You have a friend called waqar')
};


