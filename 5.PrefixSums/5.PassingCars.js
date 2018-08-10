// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let eastNums = 0;
    let count = 0;
    
    for (let i=0; i<A.length; i++) {
        if (A[i] == 0) {
            eastNums++;    
        } else {
            count += 1 * eastNums;
        }
    }
    
    return (count > 1000000000) ? -1 : count;
}