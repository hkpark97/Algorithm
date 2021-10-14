/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
    
    let output = [];
    
    for ( let i = 1; i <= n; i++) {
        if ( i % 3 === 0 && i % 5 === 0 ) {
            output.push("FizzBuzz");
        } else if ( i % 3 === 0 ) {
            output.push("Fizz");
        } else if ( i % 5 === 0 ) {
            output.push("Buzz");
        } else {
            output.push(i.toString());
        }
    }
    return output;
};


// Time Complexity: O(n)
// Space Complexity: O(n)

// 1. Create new array "output" to hold output.
// 2. Create a 'for' loop for 1 to n.
//     a. Create condition if n is divisible by 3 and 5, push "FizzBuzz" to output.
//     b. Create condition if n is divisible by 3, push "Fizz" to output.
//     c. Create condition if n is divisible by 5, push "Buzz" to output.
//     d. Everything else, push string of i.
// 3. Return "output".