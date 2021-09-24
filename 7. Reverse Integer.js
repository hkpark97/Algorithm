/**
 * @param {number} x
 * @return {number}
 */

//  Given a signed 32-bit integer x, 
// return x with its digits reversed. If reversing x causes 
// the value to go outside the signed 32-bit integer range 
// [-231, 231 - 1], then return 0.
//  Assume the environment does not allow you to store 64-bit integers 
// (signed or unsigned).

// ex
// Input: x = 123
// Output: 321
// Input: x = -123
// Output: -321
// Input: x = 120
// Output: 21

 const reverse = (x) => {
    if (x < 0)  return -1 * reverse(-x); 
    // if the number is negative, make negative values
    
    //make variable
    const solution = (x+"").split('').reverse().join('');   
    
    //split = split the number one by one
    //reverse = make reversed number
    //join = numbers put together
    
    return (solution > 2**31-1) ? 0 : solution;
    //constraints. If the solution is greater than 2**31-1, 
    //then it's return to 0, otherwise return to the solution
  
}