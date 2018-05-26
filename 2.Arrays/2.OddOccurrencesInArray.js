function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let val = 0;
    A.some(e => {
        val ^= e;
    });
    return val;
}

console.log(solution([9, 3, 9, 7, 3, 9, 9]))