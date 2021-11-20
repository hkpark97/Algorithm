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

 function inorderTraversal(root: TreeNode | null): number[] {

    let node = root;
    const result = [];
    
    while(node) {
     if( !node.left ) {
         result.push(node.val);
         node = node.right;
     }
         else {
             const pred = findPredecessor(node);
             
             if( pred.right === node ) {
                 result.push(node.val);
                 node = node.right;
             } else {
                 pred.right = node;
                 node = node.left;
             }
     }   
    }
   return result; 
};

function findPredecessor(root) {
    let node = root.left;
    
    while( node.right && node.right !==root ) {
        node = node.right;
    }
    return node;
};

// 1. Set variable node = root
// 2. Set variable result as an empty array
// 3. Loop through node
//  i. if node.left is not defined
//  ii. result => push node.val
//  iii. continuously move node to right
//  iiii. else => set variable pred = findPredecessor(node)
//  iiiii. if (pred.right === node) 
//  iiiiii. pred.right set as a null
//  iiiiiii. result.push(node.val)
//  iiiiiiii. Go to the right 
//  
// else => pred.right = node
// node = node.left (continue to the left)

// 5. Set findPrdecessor(root)
//  i. set node = root.left
//  ii. Loop through node.right && node.right !== root => to prevent infinite while loop 
//  iii. update node = node.right
//  iiii. return node

// 6. Return result