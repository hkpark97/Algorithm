/**
 * @param {number[]} nums
 * @return {number}
 */

// 1. Create maxConsec variable
// 2. Create currentConsec variable
// 3. Loop through nums

// a. Condition if value is 1
// => increment currentConsec
// b. Else 
// => Set currentConsec to 0.
// c. If currentConsec greater to maxConsec
// => Set maxConsec equal to currentConsec

// 4. Return maxConsec.

// Given a binary array nums, 
// return the maximum number of consecutive 1's in the array.

// ex
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits 
// are consecutive 1s. 
// The maximum number of consecutive 1s is 3.

var findMaxConsecutiveOnes = function(nums) {
    let maxConsec = 0;
    let currentConsec = 0;
    
    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] === 1) {
            currentConsec++;
        }  
        else {
            currentConsec = 0;
        } 
        if (currentConsec > maxConsec) {
            maxConsec = currentConsec;
        }
    }
    return maxConsec;
};

// Time complexity: O(n)
// Space complexity : O(1)