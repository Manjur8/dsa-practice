export function editDistance(text1, text2) {
    // DP - TopDown/Memoization
    // T - O(n*m)
    // S - O(n*m)
    const n=text1.length;
    const m=text2.length;

    const dp = Array.from({length: n}, () => Array(m).fill(-1));

    function helper(index1, index2) {
        // base case
        if(index1 >= n && index2 >= m) return 0;

        if(index1 >= n) return m-index2;
        if(index2 >= m) return n-index1;

        // recursive case

        // returning memoized value if exists
        if(dp[index1][index2] !== -1) return dp[index1][index2];

        if(text1[index1] === text2[index2]) {
            dp[index1][index2] = helper(index1+1, index2+1)
        } else {
            const insert = 1+ helper(index1, index2+1);
            const deleteOp = 1 + helper(index1+1, index2)
            const replace = 1 + helper(index1+1, index2+1);

            dp[index1][index2] = Math.min(insert, deleteOp, replace);
        }

        return dp[index1][index2];
    }
    return helper(0,0);
}