/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    if(!nums) return 0;  //check if the nums true or not
       
      for(let i = 0; i < nums.length; i++) {
          if(nums[i] === val) {  //val the we are looking for
              nums.splice(i, 1)
              i--; //reset position 
          }
      }
      return nums.length;
  };
  
  //The splice() method adds and/or removes array elements.
  
  // ex1 
  // At position 2, add the new items, and remove 1 item:
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // fruits.splice(2, 1, "Lemon", "Kiwi");
  
  // ex2
  // At position 2, remove 2 items:
  // const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
  // fruits.splice(2, 2);