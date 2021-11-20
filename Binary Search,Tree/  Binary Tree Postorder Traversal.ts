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

 function postorderTraversal(root: TreeNode | null): number[] {
    
    let result = [];
    
    if ( root === null ) return result;
    
    let stack = [];
    
    stack.push(root);
    while( stack.length !== 0 ) {
        let current = stack.pop();
        result.push(current.val);
        
        if(current.left) stack.push(current.left);
        if(current.right) stack.push(current.right);
    }
return result.reverse();
};

// Post order: left, right, root

// 1. Set result as an empty array
// 2. if root === null return result
// 3. Set stack as an empty array
// 4. stack.push(root)
// 5. Loop through stack.length !== 0
//  i. Set current = stack.pop()

// Store stack in reverse order => root, right, left
//  ii. result.push(current.val)
//  iii. if (current.left) stack.push(current.left)
//  iiii. if (current.right) stack.push(current.right)

// 6. Return result.reverse()
