function solution(A, B, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(A, B, K);
    let count = 0;

    if (A === 0 && B ===0 ) {
        return 1;
    } else if (A === B && B === K ) {
        return 1;
    } else {
        if (A % K === 0) {
            count++;
        }
        
        const minVal = (A >= K) ? Math.floor((A)/K) : 0;
        const maxVal = (B >= K) ? Math.floor((B)/K) : 0;
        
        return count + (maxVal - minVal);
    }
}

console.log(solution(6, 11, 2))
console.log(solution(6, 12, 2))
console.log(solution(7, 11, 2))
console.log(solution(20, 50, 11))
console.log(solution(1, 5, 4))
console.log(solution(0, 0, 11))
console.log(solution(0, 11, 11))
console.log(solution(1, 2000000000, 2000000000))

