function runningSum(nums){
    let sum = 0;
    let arr = [ ];
    for(var i = 0; i <nums.length; i++){
        sum += nums[i]
        arr.push(sum);
    }
    return arr;
};
console.log(runningSum([1,2,3,4,]));