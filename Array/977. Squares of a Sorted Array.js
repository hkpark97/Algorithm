/**
 * @param {number[]} nums
 * @return {number[]}
 */

//  Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// ex 1
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

 var sortedSquares = function(nums) {
    return nums
        .map(num => Math.pow(num, 2)) // Math.pow => return the num to the power of 2 ex) num*num / - 인 숫자를 없애기 위해
    .sort((a,b) => a-b); //sort ascending 
    // The sort() method sorts the elements of an array.
    
};