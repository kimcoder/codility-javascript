// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let totalSum = A.reduce((a,b) => a+b, 0);
    let currentSum = 0;
    let min = Infinity;
    
    for (let i=0; i<A.length-1; i++) {
        currentSum += A[i];
        totalSum -= A[i];
        min = Math.min(min, Math.abs(currentSum - totalSum));        
    }
    
    return min;
}