/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    
    s = s.replace(/[^a-z0-9]/gi,"")
                   
    let leftIndex = 0;
    let rightIndex = s.length -1; 
                   
    while ( leftIndex < rightIndex ) {
        if (s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()) return false;
        leftIndex++;
        rightIndex--;
    }                          
  return true;  
};
                  
                  
// Time Complexity: O(n) loop
// Space Complexity: O(1)

// 1. Create regex to replace special characters with ""
// 2. Create leftIndex variable to keep track of the left pointer
// 3. Create rightIndex variable to keep track of the right pointer
// 4. Create while loop until the pointers euqal to each other
//     a. Create condition to see if values of pointers don't equal to each other. Return false.
//     b. Increment leftIndex
//     c. Decrement rightIndex
// 5. Return true because all the values in the string are qual to each other.                  
                