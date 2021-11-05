/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function reverseList(head: ListNode | null): ListNode | null {
    
    let previous = null;
    let current = head; //1
    let following = head; //1
    
    while( current !== null ) {
        following = following.next; //2
        current.next = previous //1
        previous = current //1
        current = following //2
    }
    
    return previous;

};

// 1. Declare previous variable = null
// 2. Declare current variable = head
// 3. Declare follong variable = head
// 4. Loop through current(head) !== null
     // i. move following variable to the next
    // ii. set current.next = previous
    // iii. set previous = current
//     iiii. Set current = following
// 5. Return previous which is also head
