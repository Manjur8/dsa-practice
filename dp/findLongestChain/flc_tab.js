// https://leetcode.com/problems/maximum-length-of-pair-chain/
function findLongestChain(pairs) {
    // T => O(n^2)
    // S => O(n)
    pairs.sort((a,b) => a[0]-b[0])

    const n = pairs.length;
    const dp = new Array(n).fill(1);

    let max = 1;

    for(let i=1; i<n; i++) {
        for(let j=0; j<i; j++) {
            if(pairs[j][1] < pairs[i][0] && dp[j]+1 < dp[i]) {
                dp[i] = dp[j]+1;
            }
        }
        if(dp[i] > max) {
            max = dp[i]
        }
    }

    return max
}


// Example 1:
// Input: pairs = [[1,2],[2,3],[3,4]]
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4]

// Example 2:
// Input: pairs = [[1,2],[7,8],[4,5]]
// Output: 3
// Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].