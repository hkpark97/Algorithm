/**
 * @param {string[]} strs
 * @return {string}
 */

// Write a function to find the longest 
// common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// ex
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if (strs.length === 0)  {
        return "";
    }
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1); //remove 1 letter continuously
            console.log("Your current prefix is " + prefix)
        }
    }
    return prefix;
   
};

//indexOf
// The indexOf() method returns the index within 
// the calling String object of the first occurrence of 
// the specified value, starting the search at fromIndex.
// Returns -1 if the value is not found.
// indexOf(searchValue)
// indexOf(searchValue, fromIndex)