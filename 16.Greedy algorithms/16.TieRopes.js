// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let sum = 0;
    
    for(let i=0; i<A.length; i++) {
        sum += A[i];
        if (sum >= K) {
            count ++;
            sum = 0;
        }   
    }
    
    return count;
}