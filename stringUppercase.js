//

const str = "my name is waleed ali"
// My Name Is Waleed Ali

function toUpper(str){
    strinArray = str.split(" ")
   
    console.log(strinArray)

    const res = strinArray.reduce((t, c, i, a) => t +" "+ c[0].toUpperCase() + c.slice(1), "");
   
    // let result = ""
    // for(let i = 0; i < strinArray.length; i++){
    //   const newStrin = strinArray[i][0].toUpperCase() + strinArray[i].slice(1)
    // //   console.log(newStrin);
    //   result += newStrin + " "
    // }
    return res;
};
console.log(toUpper(str));

let textBox = "javed@gmail.com,ali@gmail.com,waleed@gmail.com";
''
let x = textBox.split(",");

// Interface
// Abstraction
