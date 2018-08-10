// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {};
    let maxNum = null;
    A.forEach(e => {
        if(!hash[e]) {
            hash[e] = 0;
        } 
        hash[e] += 1;
        if (hash[e] > A.length/2) {
            maxNum = e;
        }
    });
    
    if (!maxNum) {
        return -1;    
    }
    
    for (let i=0; i<A.length; i++) {
        if (A[i] === maxNum) {
            return i;
        }
    }
}