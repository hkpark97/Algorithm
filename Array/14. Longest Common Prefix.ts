function longestCommonPrefix(strs: string[]): string {
    
    if(strs.length === 0) {
        return "";
    }
    
    let prefix = strs[0]; //compare index value of 0 in all strings
    
    for( let i = 1; i < strs.length; i++ ) {
        while( strs[i].indexOf(prefix) !== 0 ) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
return prefix;
};

// 1. Set the 'if' condition when there is no common prefix
// 2. Set prefix variable = strs[0] => compare index value of 0 in all strings
// 3.for string starting with index value of 1
// 4. while strs[i].indexOf(prefix) != 0
//  i. prefix = prefix.substring(0, prefix.length -1) => remove 1 letter continuously
// 5. Retrun prefix
    
// The indexOf() method returns the position of the first occurrence of a specified value in a string.
// Syntax: string.indexOf(searchvalue, start)

// substring() extracts a part of a string:
// Syntax: string.substring(start, end)