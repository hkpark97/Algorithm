/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if ( head === null) {
        return null
    }
    
    let currentNode = new ListNode(-1);
    currentNode.next = head;
    head = currentNode;
    
    while ( currentNode.next !== null) {
    if (currentNode.next.val === val) {
        currentNode.next = currentNode.next.next;
    } else {
        currentNode = currentNode.next;
    }
    }
    
    return head.next;
    
};

// 1. check whether if the head is null / if yes, return null
// i. set currentNode to new ListNode(-1)
// ii. currentNode.next = head (index value 1)
// iii. head = currentNode (index value -1)

// 2. Loop through objects (currentNode.next !== null)
// i. if currentNode.next.val = val => currentNode.next = currentNode.next.next
// ii. else currentNode = currentNode.next

// return head.next