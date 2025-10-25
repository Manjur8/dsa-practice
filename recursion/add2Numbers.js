// https://leetcode.com/problems/add-two-numbers/
// Definition for singly-linked list.

export function add2Numbers(inp1, inp2) {
    const l1 = arrayToList(inp1); // args[0] = [2,4,3]
    const l2 = arrayToList(inp2); // args[1] = [5,6,4]

    // Time: O(max(m, n))
    // Space: O(max(m, n)) (recursion stack)

    function helper(l1, l2, carry) {
        // Base case
        if (!l1 && !l2 && carry === 0) return null;

        let sum = carry;
        if (l1) sum += l1.val;
        if (l2) sum += l2.val;

        const node = new ListNode(sum % 10);
        const newCarry = Math.floor(sum / 10);

        node.next = helper(
            l1 ? l1.next : null,
            l2 ? l2.next : null,
            newCarry
        );

        return node;
    }

    const res = helper(l1, l2, 0);
    
    return listToArray(res);
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let cur = dummy;
    for (let num of arr) {
        cur.next = new ListNode(num);
        cur = cur.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    let current = head;

    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    return result;
}