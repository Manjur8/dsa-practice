export var isPowerOfThree = function(n) {
    function helper(powerVal) {
        if(Math.pow(3, powerVal) > n) return false;
        if(Math.pow(3, powerVal) === n) return true;

        return helper(powerVal+1)
    }

    return helper(0)
};

// https://leetcode.com/problems/power-of-three/description/

// Example 1:
// Input: n = 27
// Output: true
// Explanation: 27 = 33

// Example 2:
// Input: n = 0
// Output: false
// Explanation: There is no x where 3x = 0.

// Example 3:
// Input: n = -1
// Output: false
// Explanation: There is no x where 3x = (-1).