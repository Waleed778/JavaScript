//reduce

let myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval;
// }, 0);
// console.log(myTotal);

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

//console.log(myTotal);

const ShoppingCart = [
    {
        itemName: 'js course',
        price: 2999
    },
    {
        itemName: 'python course',
        price: 999
    },
    {
        itemName: 'java course',
        price: 3999
    },
]

const priceToPay = ShoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);

