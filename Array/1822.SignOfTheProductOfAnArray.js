/**
 * @param {number[]} nums
 * @return {number}
 */
 var arraySign = function(nums) {
    
    let neg = 0;
  
 for ( let num of nums) {
     if ( num < 0 ) {
         neg++;
     } else if ( num === 0) {
         return 0;
     }
 }
  
  return neg % 2 === 0 ? 1 : -1;  // %2 = 0 => positive

};