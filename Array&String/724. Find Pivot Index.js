/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let leftSum = 0;
    let rightSum = 0;
    
    for( let i = 1; i < nums.length; i++){
        rightSum += nums[i];
    }
    
    for( let i = 0; i < nums.length; i++) {
        let result = nums[i];
        
        if(leftSum === rightSum) return i;
        else{
            leftSum += result;
            rightSum -= nums[i+1]
        }
        console.log(`Your result is ${result}`);
    }
    return -1;
};