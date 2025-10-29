// https://leetcode.com/problems/find-the-winner-of-the-circular-game
function findTheWinner(n, k) {
    // using queue
    // time Complexity: O(n)
    // Space Complexity: O(n) (for the queue)
    const queue = [];
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }
    while (queue.length > 1) {
        for (let i = 0; i < k - 1; i++) {
            queue.push(queue.shift());
        }
        queue.shift();
    }
    return queue[0];
}

function findTheWinner2(n, k) {
    // time Complexity: O(n)
    // Space Complexity: O(1)
    let winner = 0;
    for (let i = 1; i <= n; i++) {
        winner = (winner + k) % i;
    }
    return winner + 1;
}

function findTheWinner3(n, k) {
    if (n === 1) return 1;
    return (findTheWinner3(n - 1, k) + k - 1) % n + 1;
}

function findTheWinner4(n, k) {
    const arr = Array.from({ length: n }, (_, i) => i + 1);

    function helper(arr, startIndex) {
        const len = arr.length;
        if (len === 1) return arr[0];

        const removeIndex = (startIndex + k - 1) % len;
        arr.splice(removeIndex, 1);
        return helper(arr, removeIndex);
    }

    return helper(arr, 0);
}