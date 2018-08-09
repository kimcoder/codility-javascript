// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length === 0) {
        return -1;
    } else if (S.length === 1) {
        return 0;
    } else if (S.length % 2 === 0) {
        return -1;
    }
    
    let idx = Math.floor(S.length/2);
    let first = S.substr(0, idx);
    let second = S.substr(idx + 1, S.length - idx);
    
    for (let i=0; i<first.length; i++) {
        if (first.charAt(i) !== second.charAt(second.length-1-i)) {
            return -1;
        }
    }
    return idx;
}