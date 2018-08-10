// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = P.map((e, i) => S.slice(e, Q[i] + 1));
    
    return result.map(e => {
        if (e.indexOf("A") > -1) {
            return 1;    
        } else if (e.indexOf("C") > -1) {
            return 2;
        } else if (e.indexOf("G") > -1) {
            return 3;
        } else {
            return 4;
        }
    });
}