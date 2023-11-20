//if statment

// const score = 200;

// if (score > 1000){
//     let power = "fly"
//     console.log(`User power:${power}`);
// }

// console.log(`User power:${power}`);


const balance = 1000

// if (balance > 500) console.log("test");
//nesting 
if (balance < 500) {
    console.log("greater than 500");
} else if (balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}


//real life case

// const userLoggedIn = true;
// const debitCard = true;

// if (userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }



//switch
const month = 5;

 switch (month) {
    case 1:
        console.log("jan");
        break;
 
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
 
    case 2:
        console.log("Aprail");
        break;
 
    default:
        console.log("deafault case match");
        break;
 }

 //terniary operator

 //condition ? true : false

 const iceTeaPrice = 100;
 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");



 //nullish coalescing operator (??): null undefined

//  let val1;

//  val1 = 5 ?? 10
//  val1 = null ?? 10
// val1 = undefined ?? 15
// val1  = null ?? 10 ?? 15


