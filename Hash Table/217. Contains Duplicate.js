/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    let number = new Set();
    
    for ( let num of nums) {
        if (!number.has(num)) {
            number.add(num);
        } else {
            return true;
        }
    }
    return false;
};

// 1. Make variable for new Set;
// 2. loop through all the numbers 
// 3. if number doesn't have any number >> add num
// 4. if it is, return true;
// 5. if it's not, return false