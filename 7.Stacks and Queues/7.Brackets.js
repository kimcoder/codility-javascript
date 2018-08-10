// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const stack = [];
    for (let i=0; i<S.length; i++) {
        const char = S.charAt(i);
        const last = stack[stack.length - 1];
        
        if (char === ")" && last === "(") {
            stack.pop();
        } else if (char === "]" && last === "[") {
            stack.pop();
        } else if (char === "}" && last === "{") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return (stack.length === 0) ? 1 : 0;
}