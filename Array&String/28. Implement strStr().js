/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    if(needle.length === 0) return 0;
    
    if(needle === haystack) return 0;
    
    for( let i = 0; i <= haystack.length - needle.length; i++){
        if(needle === haystack.substring(i, i+needle.length)) {
            return i;
        }
    }
    return -1;
};

//The substring() method extracts parts of a string.
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
//substring(indexStart)
//substring(indexStart, indexEnd)