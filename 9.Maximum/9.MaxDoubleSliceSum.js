function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const maxEndings = A.map(e => 0);
    const maxBeginnings = A.map(e => 0)

    for (let i=1; i<A.length-1; i++) {
        maxEndings[i] = Math.max(maxEndings[i-1]+A[i], 0);
    }

    for (let i=A.length-2; i>0; i--) {
        maxBeginnings[i] = Math.max(maxBeginnings[i+1]+A[i], 0);
    }
    // console.log(maxEndings);
    // console.log(maxBeginnings);
    let max = 0;

    for (let i=1; i<A.length-1; i++) {
        const maxSum = maxEndings[i-1]+maxBeginnings[i+1];
        max = Math.max(max, maxSum);
    }

    return max;
}

