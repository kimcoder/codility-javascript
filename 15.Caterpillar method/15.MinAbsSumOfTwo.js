// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => Math.abs(a) - Math.abs(b));
    
    let min = Math.abs(A[0] + A[0]);
    
    for (let i=0; i<A.length; i++) {
        min = Math.min(min, Math.abs(A[i]+A[i]));
        if (i > 0) {
            min = Math.min(min, Math.abs(A[i-1]+A[i]));
        }
    }
    
    return min;
}