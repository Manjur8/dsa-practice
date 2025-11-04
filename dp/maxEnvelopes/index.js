const maxEnvelopes = function(envelopes) {
    // Tabulation approach
    // T => O(n^2)
    // S => O(n)

    envelopes.sort((a,b) => a[0] === b[0] ? b[1]-a[1] : a[0]-b[0])

    const n = envelopes.length
    const dp = new Array(n).fill(1);
    let max = 1;

    for(let i=1; i<n; i++) {
        for (let j=0; j<i; j++) {
            if(envelopes[i][1] > envelopes[j][1] && dp[j]+1 > dp[i]) {
                dp[i] = dp[j]+1
            }
        }
        if(dp[i] > max) {
            max = dp[i]
        }
    }

    return max

}