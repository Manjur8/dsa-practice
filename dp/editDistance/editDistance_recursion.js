export function editDistance(word1, word2) {
    // T = O(n+m)
    // S = O(3^(n+m))
    const n = word1.length;
    const m = word2.length;

    function helper(index1, index2) {
        // base case
        if(index1 === n && index2 === m) return 0;

        if(index1 >= n) return m-index2;
        if(index2 >= m) return n-index1;

        // recursion
        if(word1[index1] === word2[index2]) {
            return helper(index1+1, index2+1)
        }
        const insert = 1+helper(index1, index2+1)
        const deleteOp = 1+helper(index1+1, index2)
        const replace = 1+helper(index1+1, index2+1)

        return Math.min(insert, deleteOp, replace);
    }

    return helper(0, 0);
}