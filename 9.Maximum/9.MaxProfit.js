function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let max = 0;
    let min = A[0];
    for(let i=0; i<A.length; i++) {
        max = Math.max(max, A[i] - min);   
        min = Math.min(min, A[i]);
    }
    return max;
}