/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    
    return new Set(sentence).size === 26;
     
 };
 
 //Set is an abstract data type that can store unique values, without any particular order.
 // The size accessor property returns the number of (unique) elements in a Set object.
