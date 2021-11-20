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

 function levelOrder(root: TreeNode | null): number[][] {
    
    let result = [];
    
    if(root === null ) {
        return result;
    }
    
    let queue = [];
    queue.push(root) // root = 1
    
    while( queue.length > 0 ) {
        let row = [];
        let rowSize = queue.length;
        
        while( rowSize > 0 ) {
           let currentNode = queue.shift(); // Remove first element in the queue
            
            if( currentNode.left !== null ) {
                queue.push(currentNode.left);
            } 
            
            if( currentNode.right !== null ) {
                queue.push(currentNode.right);
            }
            
            row.push(currentNode.val)
            rowSize--;
        }
        
        result.push(row);
    } 
return result;
};

// Level order => from left to right, level by level

// shift() => remove at the front of the element

// 1. Set result as an empty array
// 2. If root === null => return result
// 3. Set queue as an emapty array
// 4. push root to the queue => 1
// 5. Loop through queue.length > 0
//  i. Set row as an empty arrray
//  ii. Set rowSize = queue.length

//  i. while rowSize > 0 
//  ii. Set currentNode = queue.shift()
//  iii. if currentNode.left !== null => queue.push(currentNode.left)
//  iiii. if currentNode.right !== null => queue.push(currentNode.right)

// i. row.push(currentNode.val)
// ii. Decrement rowSize

// 6. result.push(row) / result => final array contains array from row
// if the queue is empty => 
// 7. return result