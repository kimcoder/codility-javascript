// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let value = A[0];
    for (let i=1; i<A.length; i++) {
        value ^= A[i];
    }
    return value;
}