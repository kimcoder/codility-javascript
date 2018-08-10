// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 3) {
        return 0;
    }
    const peaks = [];
    
    for (let i=1; i<A.length-1; i++) {
        if (A[i-1] < A[i] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    
    for (let i=peaks.length; i>0; i--) {
        if (A.length%i === 0) {
            let blockSize = A.length/i;
            let lastGroup = -1;
            
            for (let j=0; j<peaks.length; j++) {
                if (Math.floor(peaks[j]/blockSize) === lastGroup + 1) {
                    lastGroup ++;
                }
            }
            
            if (lastGroup + 1 === i) {
                return i;
            }
        }
    }
    
    return 0;
}