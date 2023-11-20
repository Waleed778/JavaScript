const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

//there is many way to deal them.


//another intresting thing 

// function printMe(item) {
//     console.log(coding);
// }

// coding.forEach(printMe);



//another way to access all the data of array

// coding.forEach ( (item, index, arr) => {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        language: 'javaScrip',
        languageFileName: 'js'
    },
    {
        language: 'python',
        languageFileName: 'py'
    },
    {
        language: 'rubby',
        languageFileName: 'rols'
    }
]
//wow...
myCoding.forEach( (item) => {
    //console.log(item.languageFileName);
})





//some more disscussion on foreach loop and etc