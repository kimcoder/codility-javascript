// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    A.sort((a,b) => a - b);
    
    for (let i=0; i<A.length-2; i++) {
        let k = i + 2;
        for (let j=i+1; j<A.length; j++) {
            while(k < A.length && (A[i] + A[j] > A[k])) {
                // console.log(`found! ${A[i]} ${A[j]} ${A[k]}`);
                k++;
            }
            count += k - j - 1;
            // console.log(`count:${count}`);
        }
    }
    
    return count;
}   
