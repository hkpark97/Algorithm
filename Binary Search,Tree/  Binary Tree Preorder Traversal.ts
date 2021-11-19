/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function preorderTraversal(root: TreeNode | null): number[] {
    
    if (!root) return [];
      
      const stack = [root];
      const result = [];
      
      while(stack.length){
          let node = stack.pop();
          
          result.push(node.val);
          
          if(node.right) stack.push(node.right);
          if(node.left) stack.push(node.left);
      }
  return result;
  };
  
  // 1. if !root return empty array
  // 2. Declare stack = [root]
  // 3. Declare result as an empty array
  // 4. Loop through stack.length
  //  i. Declare node = stack.pop
  //  ii. result.push(node.val);
  //  iii. if node.right => stack.push(node.right);
  //  iiii. if node.left => stack.push(node.left);
  // 5. Return result