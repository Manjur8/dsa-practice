// https://leetcode.com/problems/combination-sum-ii/description/
function combinationSum2(candidates, target) {
    //     Time Complexity: O(n^(target / min)) (exponential in worst case)
    //      Space Complexity:
    //          Auxiliary: O(target / min) (recursion + path)
    //          Total: O(#solutions × k) (to store all results)
    const res = [];
    candidates.sort((a, b) => a - b);

    function backtrack(start, curr, currSum) {
        if(currSum === target) {
            res.push([...curr]);
            return;
        }

        if(currSum > target || start > candidates.length) return;

        const hash = {};

        for(let i=start; i<candidates.length; i++) {
            if(!hash[candidates[i]]) {
                hash[candidates[i]] = true;
                curr.push(candidates[i]);
                backtrack(i+1, curr, currSum+candidates[i]);
                curr.pop();
            }
        }
    }

    backtrack(0, [], 0);
    return res;
}