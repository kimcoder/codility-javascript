function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = A[0];
    let slice = A[0];
    for(let i=1; i<A.length; i++) {
        slice = Math.max(A[i], slice+A[i]);
        max = Math.max(max, slice);
    }
    return max;
}