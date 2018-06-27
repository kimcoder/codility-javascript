// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numbers = {};
    let divs = {}
    let max = A.slice().sort((a,b) => a-b).pop();
    A.forEach(e => numbers[e] = -1);
    
    for (let i=0; i<=max; i++) {
        numbers[i] = false;
        divs[i] = 0;
    }
    for (let i=0; i<A.length; i++) {
        numbers[A[i]] = true;
        divs[A[i]]++;
    }
    for (let i=0; i<A.length; i++) {
        for (let k=2; A[i]*k<=max; k++) {
            if (numbers[A[i]*k]) {
                divs[A[i]*k]++;
            }
        }
    }
    
    return A.map(e => A.length - divs[e]);
}