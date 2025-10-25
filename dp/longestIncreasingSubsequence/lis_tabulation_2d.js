export function lis(nums) {
    // Tabulation / BottomUp
    // T => O(n^2)
    // S => O(n^2)

    const n = nums.length;

    const dp = Array.from({length: n+1}, () => Array(n+1).fill(0));

    for(let i=n-1; i>=0; i--) {
        for(let j=i; j>=0; j--) {
            const exclude = dp[i+1][j]

            let include = 0;
            // j-1 => prev
            if(j-1 === -1 || nums[i]>nums[j-1]) {
                include = 1 + dp[i+1][i+1];
            }

            dp[i][j] = Math.max(include, exclude)
        }
    }

    return dp[0][0]
}