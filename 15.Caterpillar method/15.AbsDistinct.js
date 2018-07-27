// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {};
    let abs = [];
    A.forEach(e => {
        if(!hash[Math.abs(e)]) {
            hash[Math.abs(e)] = true;
            abs.push(Math.abs(e));
        }
    });
    
    return abs.length;
}