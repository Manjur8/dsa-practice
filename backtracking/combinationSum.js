// https://leetcode.com/problems/combination-sum/description/
var combinationSum = function(candidates, target) {
    // time Complexity: O(n^(target / min)) (exponential in worst case)
    // Space Complexity:
    // Auxiliary: O(target / min) (recursion + path)
    // Total: O(#solutions × k) (to store all results)
    const res = [];

    function helper(index, curr, currSum) {
        if(currSum > target) return;

        if(currSum === target) {
            res.push([...curr]);
            return;
        }

        for(let i=index; i<candidates.length; i++) {
            curr.push(candidates[i]);
            helper(i, curr, currSum+candidates[i]);
            curr.pop();
        }
    }
    helper(0, [], 0)

    return res;
}