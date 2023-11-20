let accounts = [[1, 2, 3,], [2, 2, 3]]

function maximumWealth (accounts) {
    let max = 0;
    for( var i = 0; i < accounts.length; i++){
        let sum = 0;
        for ( var j = 0; j < accounts[i].length; j++){
            sum += accounts[i][j];
        }
        if(sum > max){
            max = sum;
        }
    }
    return max;
};
console.log(maximumWealth(accounts));