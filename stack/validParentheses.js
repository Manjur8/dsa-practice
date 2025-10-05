export var isValid = function(s) {
    // ==== using only stack =====
    // Time complexity: O(n)
    // Space complexity: O(n)
    const stack = [];

    for(let i=0; i<s.length; i++) {
        const curr = s[i];
        if(stack.length) {
            const last = stack[stack.length-1];
            if(isPair(last, curr)) {
                stack.pop();
                continue;
            }
        }
        stack.push(curr);
    }

    return stack.length === 0;
};

function isPair(last, curr) {
    return (
        last === '(' && curr === ')' ||
        last === '{' && curr === '}' ||
        last === '[' && curr === ']'
    )
}