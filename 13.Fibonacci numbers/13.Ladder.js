// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    const C = [0, 1, 2, 3];
    let maxA = A[0];
    let maxB = B[0];
    A.forEach(e => maxA = Math.max(maxA, e));
    B.forEach(e => maxB = Math.max(maxB, e));
    for (let i=4; i<=maxA; i++) {
        C.push((C[i-2] + C[i-1]) % Math.pow(2, maxB));    
    }
    console.log(A.toString());
    console.log(B.toString());
    console.log(maxA);
    console.log(maxB);
    
    return A.map((e, i) => {
        return C[e] % Math.pow(2, B[i]);    
    });
}