// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let maxH = 0;
    let minH = 0;
    let maxDepth = 0; 
    
    for (let i=0; i<A.length; i++) {
        let diff = 0; 
        
        if (A[i] > maxH) {
            diff = maxH - minH;
            maxH = A[i];
            minH = A[i];
        } else if (A[i] < minH) {
            minH = A[i];
        } else {
            diff = A[i] - minH;    
        }
        
        maxDepth = Math.max(diff, maxDepth);
        // console.log(`i:${i} A[i]:${A[i]} maxDepth:${maxDepth} diff:${diff} minH:${minH} maxH:${maxH}`);
    }
    
    return maxDepth;
}