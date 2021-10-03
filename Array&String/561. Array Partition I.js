/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
       
       let length = nums.length;
       let result = 0;
       
       for( let i = 0; i < length; i += 2) {
           result += nums[i];
       }
       return result;
   };