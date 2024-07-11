/**
 * Definition for singly-linked list.

 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    // Initialize a dummy node to simplify the merged list assembly
    let dummy = new ListNode();
    let current = dummy;

    // Traverse both lists and compare the current nodes
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1; // Add list1's node to the merged list
            list1 = list1.next; // Move list1's pointer forward
        } else {
            current.next = list2; // Add list2's node to the merged list
            list2 = list2.next; // Move list2's pointer forward
        }
        current = current.next; // Move the current pointer forward in the merged list
    }

    // Attach the remaining nodes from either list (if any)
    if (list1 !== null) {
        current.next = list1;
    } else if (list2 !== null) {
        current.next = list2;
    }

    // The head of the merged list is next to the dummy node
    return dummy.next;
};

const one = new ListNode(1)
const two = new ListNode(2)
const three = new ListNode(3)
const four = new ListNode(4)
const list1 = one;
two.next = four;
three.next = four;
list1.next = two;

const list2 = two;
list2.next = three;

console.log(mergeTwoLists(list1,list2))


