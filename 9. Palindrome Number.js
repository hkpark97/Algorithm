/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
   
    if(x < 0) {
        return false;
    }
    
    let reversed = 0;
    let current = x;
    
    while ( current !== 0) {
        reversed = reversed * 10 + current % 10;
        current = Math.floor(current/10);
    }
    return x === reversed;
};



// 1. Condition if 'x' is negative
//     a. Return false
// 2. Create reversed variable 
// 3. Create current variable equal to x
// 4. While loop for current !== 0
//     a. Set reversed === reversed * 10 + current % 10
//     b. Divide current by 10
// 5. Return if 'x' is euqal to reversed.