/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1;
  while (l1.next) {
    num1 += l1.val.toString();
  }
  while (l2.next) {
    num2 += l2.val.toString();
  }
  num1 = Number(num1.split("").reverse().join(""));
  num2 = Number(num2.split("").reverse().join(""));
  let sum = num1 + num2;
  sum = sum.split("").reverse("");
  return sum;
};
