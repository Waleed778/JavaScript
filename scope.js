//nested scope

function one() {
    const username = "waleed";

    function two() {
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website);

    two();
}
one()


//++++++++intresting++++++++
console.log(addone(5));
function addone(num) {
    return num + 1;
}

//but we can not do this with this syntax
const addTwo = function (num) {
    return num + 2;
}
addTwo(5)