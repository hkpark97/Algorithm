/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    
    let number = new Set();
    
    for ( let num of nums) {
        if (number.has(num)){
            number.delete(num);
        } else {
            number.add(num);
        }
    }
    return Array.from(number)[0];
};

// 1. make variable for new set
// 2. loop through all the numbers
// 3. if number has iteration >> delete num
// 4. else add num
// 5. return Array from index of number >> return first index number