// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = -1;
    S.split(" ").forEach(e => {
        const numbers = (e.match(/\d/g) || []).length;
        const letters = (e.match(/[a-zA-Z]/g) || []).length;
        // console.log(e, e.search(/[^a-zA-Z0-9]/), letters%2 , numbers%2)
        if (e.search(/[^a-zA-Z0-9]/) == -1 && letters%2 == 0 && numbers%2 == 1) {
            // arr.push(e);
            max = Math.max(max, e.length);
        }
    });
    return max;
}