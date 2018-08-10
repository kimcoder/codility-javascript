// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {};
    let sum = (X * (X + 1)) / 2;
    let pos = 0;
    
    for (let i=0; i<A.length; i++) {
        if(!hash[A[i]]) {
            hash[A[i]] = true;
            sum -= A[i];
            
            if (sum === 0) {
                return i;    
            }
        }
    }
    return -1;
}