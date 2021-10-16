/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
     
    for ( let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
};

//nums[i-1] => 1 beacuse nums[i-1] going to be nums[0]