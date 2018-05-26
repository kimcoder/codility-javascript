function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A = A.sort((a, b) => a - b);
    console.log(A);

    const largest = A[A.length - 1];
    const expected = (largest + 1) * largest / 2;
    const o = {};
    let sum = 0;
    A.some((e, i) => {
        if(!o[e]) {
            o[e] = true;
            sum += e;
        } else {
            sum = -1;
            return true;
        }
    });
    return (sum === expected) ? 1 : 0;
}

console.log(solution([ 4, 1, 3, 2]))
console.log(solution([ 4, 1, 3 ]))
console.log(solution([ ]))
console.log(solution([ 1, 1]))
console.log(solution([ 3, 3 ]))
console.log(solution([ 10, 3, 1, 2, 4, 5, 8, 7, 6, 9 ]))
console.log(solution([9, 5, 7, 3, 2, 7, 3, 1, 10, 8]))