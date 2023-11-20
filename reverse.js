// let string = 'Waleed';

// function reverse(str){
//     for(let name = 0; name <= string; name = name -)

// }

function loop() {
    let str = "waleed"
    let obj = {}
    for (let i = 0; i <= str.length - 1; i += 1) {
        obj[str[i]] = str[i]
    }
    return Object.values(obj).join("")
}

console.log(loop())
