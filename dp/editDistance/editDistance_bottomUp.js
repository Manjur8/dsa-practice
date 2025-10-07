export function editDistance(text1, text2) {
    // Tabulation/BottomUp Aproach
    // T => O(n*m)
    // S => O(n*m)
    const n = text1.length;
    const m = text2.length;

    const dp = Array.from({length: n+1}, () => Array(m+1).fill(0))

    // initialization
    for(let i=0; i<=n; i++) {
        dp[i][0] = i;
    }
    for(let j=0; j<=m; j++) {
        dp[0][j] = j;
    }

    for(let i=1; i<=n; i++) {
        for(let j=1; j<=m; j++) {
            if(text1[i-1] === text2[j-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else {
                const insert = 1 + dp[i][j-1];
                const deleteOp = 1 + dp[i-1][j];
                const replace =  1 + dp[i-1][j-1];

                dp[i][j] = Math.min(insert, replace, deleteOp);
            }
        }
    }

    return dp[n][m];
}