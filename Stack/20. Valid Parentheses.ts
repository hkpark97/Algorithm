function isValid(s: string): boolean {
    
    let bracket = {
        '(':')',
        '[':']',
        '{':'}'
    };
    
    let stack = [];
    
    for ( let char of s ) {
        if( bracket[char] ) {
            stack.push(bracket[char]);
        } else {
           if (stack.pop() !== char) {
               return false;
           }
        }
    }
    return (!stack.length);
};

// 1. Declare variable that containing  '(':')', '[':']', '{':'}', brackets
// 2. Declar empty array
// 3. loop through char of s
// 4. if bracket[char] // push bracket[char]
// 5. else pop !== char >> return false
// 6. return !heap.length
 