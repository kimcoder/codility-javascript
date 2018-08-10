// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let total = ((A.length + 1) * (A.length + 2)) / 2;
    A.forEach(e => total -= e);
    return total;
}