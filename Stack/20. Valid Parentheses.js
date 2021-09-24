/**
 * @param {string} s
 * @return {boolean}
 */

//  Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//  An input string is valid if:
//  1.Open brackets must be closed by the same type of brackets.
//  2.Open brackets must be closed in the correct order.

// ex
// Input: s = "()"
// Output: true
// Input: s = "([)]"
// Output: false

 var isValid = function(s) {
    let bracket = {
        '(':')',
        '[':']',
        '{':'}',
    }
    
    let heap = [];
    
    for (let char of s) {
        if(bracket[char]) {
            heap.push(bracket[char])
            //push(...values) Adds values to the end of a collection.
        } else {
            if(heap.pop() !== char)  
    //pop() Removes a value from the end of a collection, and returns that value.
                return false
        }
    }
    return (!heap.length)
};