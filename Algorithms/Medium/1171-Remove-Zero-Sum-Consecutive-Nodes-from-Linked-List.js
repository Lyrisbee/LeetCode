/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    let cur = head, sum = 0;
    for (let i = 0; i < 1000; i++) {
        if (!head) {
            break;
        }

        sum += cur.val;
        
        if (sum === 0) {
            head = cur.next;
        }
        
        if (!cur.next && head) {
            head.next = removeZeroSumSublists(head.next);
            break;
        }
        
        cur = cur.next;
    }
    
    return head
};