//in this lecture we learn arrow function and this.

//this keyword refferd current context

//now we are making a obj
const user = {
    username:"waleed",
    price:999,


    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}
// user.welcomeMessage()
// user.username ="same"
// user.welcomeMessage()

//console.log(this);

// function chai() {
//    let username = "waleed"
//     console.log(this);
// }
// chai()


// const chai = function () {
//     let username = "waleed"
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "waleed";
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// } 
// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) =>  num1 + num2;

//implicet return without retun keyword, arrow function
const addTwo = (num1, num2) =>  (num1 + num2);
console.log(addTwo(5, 5));


