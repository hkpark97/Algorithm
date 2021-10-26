/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    
    let numsMap = new Map();
    
    for ( let i = 0; i < nums.length; i++ ) {
        let num = nums[i];
        
          if ( numsMap.has(num) && i - numsMap.get(num) <= k ) {
              return true;
          } else {
              numsMap.set(num, i);
          }
    } 
    return false;
};


// 1. Make variable for new Map
// 2. Loop through index of nums
// 3. if number has num && index - numsMap.get(num) <= k >> return true
// 4. else >> numsMap.set(num, i) // 일치하는 값이 없을시 set number and index value of number
// 5. return false