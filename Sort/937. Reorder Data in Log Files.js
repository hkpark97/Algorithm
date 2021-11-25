/**
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    
    let digit = [];
  let letter = [];
  
  logs.forEach(log => {
      l = log.split(' ');
      
      if(/\d/.test(l[1]) ) {
          digit.push(log);
      } else {
          letter.push(log);
      }
  });
  
  letter.sort(( a,b ) => {
      let aa = a.substr(a.indexOf(' ') + 1);
      let bb = b.substr(b.indexOf(' ') + 1);
      
      if( aa !== bb ) {
         return aa.localeCompare(bb);
      } else {
          return a.localeCompare(b);
      }
  });
  return letter.concat(digit);
  
};


// 1. set an empty array for a letter and digit
// 2. logs.foreach
//  i. set l = log.split(' ')
//  ii. Check whether if l is number or not
//  iii. if l is number => push to digit
//  iiii. else => push to digit
// 3. sort a letter
//  i. set variable to sort the letter
//  ii. if the two variables are not equal
//  iii. return aa.localeCompare 
//  iiii. else => a.localeCompare
// 4. return letter.concat(digit);

// localeCompare() 
// The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

// concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
