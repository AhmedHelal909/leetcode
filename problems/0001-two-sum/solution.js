/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
var addTwoNumbers = function (l1, l2) {
    const result = new ListNode(0); // dummy head
    let current = result;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        const dig1 = l1?.val ?? 0;
        const dig2 = l2?.val ?? 0;

        const sum = dig1 + dig2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;

        l1 = l1?.next ?? null;
        l2 = l2?.next ?? null;
    }

    return result.next;
};  