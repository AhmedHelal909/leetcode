# 2. Add Two Numbers — 🟡 Medium

🔗 [LeetCode link](https://leetcode.com/problems/add-two-numbers/)
🏷️ **Topics:** Linked List, Math, Recursion

---

## 📌 Problem

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each node contains a single digit. Add the two numbers and return the sum as a linked list (also in reverse order).

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example**

```text
Input:  l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807
```

**Constraints**

- The number of nodes in each list is in the range `[1, 100]`
- `0 <= Node.val <= 9`
- No leading zeros (except the number 0 itself)

---

## 💡 Intuition

Because the digits are stored in **reverse order**, the head of each list is the **ones place**, which is exactly where we start when adding by hand on paper.

So we simulate elementary-school addition:

1. Add the two digits at the current position plus any `carry` from the previous position.
2. The new digit is `sum % 10`.
3. The new carry is `sum / 10` (rounded down).
4. Move to the next position and repeat.

No need to convert the lists into big integers (which would overflow for 100-digit numbers).

---

## 🛠️ Approach

1. Create a **dummy head** node. It lets us build the result list without special-casing the first node.
2. Keep a `current` pointer to the last node of the result and a `carry` initialized to `0`.
3. Loop **while** `l1` exists **or** `l2` exists **or** `carry > 0`:
   - Read the digit of each list (use `0` if that list is already finished).
   - `sum = dig1 + dig2 + carry`
   - `carry = floor(sum / 10)`
   - Append a new node with value `sum % 10`.
   - Advance `l1`, `l2`, and `current`.
4. Return `dummy.next`.

> ⚠️ The `carry > 0` condition matters: for `[9,9] + [1]` the answer is `[0,0,1]`, which has one more node than either input.

### 🔎 Walkthrough: `[2,4,3] + [5,6,4]`

| Step | dig1 | dig2 | carry in | sum | digit added | carry out |
|:----:|:----:|:----:|:--------:|:---:|:-----------:|:---------:|
| 1 | 2 | 5 | 0 | 7 | 7 | 0 |
| 2 | 4 | 6 | 0 | 10 | 0 | 1 |
| 3 | 3 | 4 | 1 | 8 | 8 | 0 |

Result: `[7, 0, 8]` ✅

---

## 💻 Solution

### JavaScript

```javascript
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
```

### PHP

```php
class Solution {
    function addTwoNumbers($l1, $l2) {
        $result = new ListNode(0); // dummy head
        $current = $result;
        $carry = 0;

        while ($l1 != null || $l2 != null || $carry > 0) {
            $dig1 = $l1?->val ?? 0;
            $dig2 = $l2?->val ?? 0;

            $sum = $dig1 + $dig2 + $carry;

            $carry = intdiv($sum, 10);
            $current->next = new ListNode($sum % 10);
            $current = $current->next;

            $l1 = $l1?->next;
            $l2 = $l2?->next;
        }

        return $result->next;
    }
}
```

---

## ⏱️ Complexity

| | Complexity | Why |
|---|:---:|---|
| **Time** | `O(max(m, n))` | We visit each node of the longer list once (plus at most one extra step for a final carry). |
| **Space** | `O(max(m, n))` | The output list has up to `max(m, n) + 1` nodes. Extra variables are `O(1)`. |

---

## 🔁 Other Approaches

| Approach | Idea | Verdict |
|----------|------|---------|
| Convert to numbers, add, convert back | Build integers from the lists, add them, rebuild a list | ❌ Overflows for up to 100 digits (needs BigInt) |
| Recursion | Add the heads, pass the carry into the recursive call on the tails | ✅ Works, but uses `O(max(m, n))` call stack |
| **Iterative with dummy head** | What's shown above | ✅ **Best:** simple, no stack, no overflow |

---

## 🧠 Takeaways

- A **dummy head** removes the "is this the first node?" edge case. Use it whenever you build a new linked list.
- Always handle the **leftover carry** after both lists end.
- Treat a missing node as `0` instead of writing separate loops for unequal lengths.
- Same pattern applies to: [Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/), [Add Binary](https://leetcode.com/problems/add-binary/), [Plus One](https://leetcode.com/problems/plus-one/).