// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const dp = A.map((e, i) => (i === 0) ? A[0] : -Infinity);
    
    for (let i=1; i<A.length; i++) {
        for (let j=Math.max(0, i-6); j<i; j++) {
            dp[i] = Math.max(dp[i], A[i]+dp[j]);
            // console.log(`i:${i} j:${j} A[i]:${A[i]} dp[i]:${A[i]+dp[j]}`, dp);
        }
    }
    console.log(dp);
    
    return dp.pop();
}
