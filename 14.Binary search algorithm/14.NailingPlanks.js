// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxB = Math.max.apply(null, B);
    let nails = new Array(maxB + 1).fill(0);
    let begin = 0;
    let end = C.length-1;
    let value = -1;
    
    while(begin <= end) {
        let mid = Math.floor((begin + end) / 2);
        let isAllNailed = true;
        
        nails.fill(0);
        for (let i=0; i<mid+1; i++) {
            nails[C[i]] = 1;
        }
        
        for (let i=1; i<nails.length; i++) {
            nails[i] += nails[i-1];
        }
        
        for (let i=0; i<A.length; i++) {
            if (nails[A[i]-1] >= nails[B[i]]) {
                isAllNailed = false;
                break;
            }
        }
        
        if (isAllNailed) {
            end = mid - 1;
            value = mid + 1;
        } else {
            begin = mid + 1;
        }
    }
    
    return value;
}