/**
 Do not return anything, modify s in-place instead.
 */
// ex)1
//  Input: s = ["h","e","l","l","o"]
//  Output: ["o","l","l","e","h"]

 function reverseString(s: string[]): void {
     s.reverse().join("");
 } 