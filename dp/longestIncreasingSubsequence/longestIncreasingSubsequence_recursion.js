export function longestIncreasingSubsequence(nums) {
    // Recursion
    // T => O(2^n)
    // S => O(n)
    let n = nums.length;

    function helper(curr, prev) {
        // base case
        if(curr>n-1) return 0;

        // recursive case
        let exclude =  helper(curr+1, prev);
        
        let include = 0;
        if(prev === -1 || nums[curr]>nums[prev]) {
            include = 1 + helper(curr+1, curr)
        }
        return Math.max(exclude, include);
    }
    return helper(0, -1)
}

// i/p => o/p
// [1,2,1,4,3,4,5] => 5
// [1] => 1
// [3,2,1] => 1

// note: 
// Longest => optimal
// Choices => Include/Exclude an element

// [1,2,3]
// need to remember previously included index
// 1=> prev, 2=> current
// if 2>1, can iclude, subSeq length+=1;
// exclude
// take max subSeq length;

// first invalid input, index>n-1, return 0;