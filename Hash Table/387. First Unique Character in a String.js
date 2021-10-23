/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    
    let frequencies = {};
    let result = -1;
    
    for ( let char of s ) {
        if ( frequencies[char] === undefined ) {
            frequencies[char] = 1;
        } else {
            frequencies[char]++;
        }
    }
    
     for ( let i = 0; i < s.length; i++) {
          let char = s.charAt(i);  
         
        if ( frequencies[char] === 1) {
            return i;
        }
     }
      
    return result;
};

// 1. make an empty object for frequencies
// 2. specify result = -1
// 3. loop through every character of string
// 4. if character is undefined >> add frequencies[char]
// 5. if it does not, increment index of frequencies
// 6. make another loop for finding frequencies
// 7. make variable for char s.charAt(i)
// 8. if frequencies === 1
// 9. return i
// 10. or else return result

// charAt() method returns the character at a specified index in a string.