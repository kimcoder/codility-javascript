// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let total = (A.length * (A.length + 1)) / 2;
    let hash = {};
    A.forEach(e => {
        if (!hash[e]) {
            total -= e;
            hash[e] = true;
        }
    });
    return (total === 0) ? 1 : 0;
}