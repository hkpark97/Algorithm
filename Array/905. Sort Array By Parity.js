/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    let right = 0;
    let left = 0;
 
    while( left < nums.length) {
        if(nums[left] % 2 === 0) {
            const currentArray = nums[right];
            nums[right] = nums[left];
            nums[left] = currentArray;
            right++;
        }
        left++;
    }
    return nums;
 };