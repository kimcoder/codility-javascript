// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length < 3) {
        return 0;
    }
    
    let maxFlags = Math.round(Math.sqrt(A.length));
    let flags = [];
    let last = 0;
    console.log("maxFlags = ", maxFlags);
    
    for (let i=1; i<A.length; i++) {
        if (A[i-1] < A[i] && A[i] > A[i+1]) {
            flags.push(i);
        }
    }
    
    console.log("maxFlags", maxFlags);
    console.log(flags);
    for (let i=maxFlags; i>0; i--) {
        let count = 0;
        for (let j=0; j<flags.length; j++) {
            if (j == 0) {
                count += 1;
                last = j;
            } else {
                if(flags[j] - flags[last] >= i) {
                    count++;    
                    last = j;
                }
            }
        }
        console.log("count", count);
        if (count >= i) {
            return i;
        }
    }
    
    return 0;
}