/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an array nums of integers, return how many of them contain an even number of digits.

//ex
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.

 var findNumbers = function(nums) {
    let result = 0;
    
    for(i = 0; i < nums.length; i++) {
        let num = String(nums[i]); // convert string >> to check how many digits numbers have
        
        if(num.length % 2 === 0)  // 2로 나눠서 나눈 값이 0 이면 짝수
            result ++; // 짝수로 나온 숫자의 결과 increasing
    }
    return result; // if the number is odd number >> return 0
};