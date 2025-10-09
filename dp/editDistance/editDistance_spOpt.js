export function editDistance(word1, word2) {
    // Space Opimization
    // T = O(m*n)
    // S = O(m)
    const n = word1.length;
    const m = word2.length;

    // If one of them is empty
    if (n === 0) return m;
    if (m === 0) return n;

    let prev = Array(m + 1).fill(0);
    let curr = Array(m + 1).fill(0);

    // Base case: converting "" → word2 (insert all chars)
    for (let j = 0; j <= m; j++) {
        prev[j] = j;
    }

    for (let i = 1; i <= n; i++) {
        curr[0] = i; // deleting all chars from word1 prefix of length i

        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                const insert = 1 + curr[j - 1];   // insert word2[j-1]
                const deleteOp = 1 + prev[j];     // delete word1[i-1]
                const replace = 1 + prev[j - 1];  // replace word1[i-1] → word2[j-1]
                curr[j] = Math.min(insert, deleteOp, replace);
            }
        }

        // Instead of copying arrays, just swap references
        [prev, curr] = [curr, prev];
    }

    return prev[m];
}