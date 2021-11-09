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

 function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    
    let current = new ListNode();
    const dummy = current;
    
    while ( l1 && l2 ) {
        if ( l1.val < l2.val ) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        
        current = current.next;
    }
    
    if(l1) {
        current.next = l1;
    } 
    if (l2) {
        current.next = l2;
    }
    
    return dummy.next;
};

// 1. Declare current variable = new ListNode();
// 2. Declare dummy variable = current;
// 3. Loop through l1 && l2
// 4. if ( l1.val <= l2.val )
//    i. curr.next = l1
//    ii. l1 = l1.next
// 5. else curr.next = l2
//    i. l2 = l2.next
// 6. curr = curr.next
// 7. if ( l1 ) 
//    i. curr.next = l1
// 8. if (l2)
//    i. curr.next = l2
// 9. Return dummy.next;

// Space = O(1)
// Time = O(m+n)