//const myNumber = [1, 2, 3, 4, 2, 3, 5, 6]

// var findDuplicates = myNumber.filter((num) => num === num);
//  console.log(findDuplicates);

function findDuplicates(myNumber){
    let duplicate = []
    let seen = {}
    for (let i = 0; i < myNumber.length; i++) {
        const number = myNumber[i];
        if (seen[number]) {
            duplicate.push(number)
        } else {
            seen[number] = true;
        }
    }
    return duplicate;
}
const myNumber = [1, 2, 3, 4, 2, 3, 5, 6]
console.log(findDuplicates(myNumber));