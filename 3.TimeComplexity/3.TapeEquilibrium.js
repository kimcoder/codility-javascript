function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sumFirst = 0;
    let sumSecond = A.reduce((a, b) => a + b, 0);
    let result = NaN;
    
    for(let i=0; i<A.length-1; i++) {
        sumFirst += A[i];
        sumSecond -= A[i];
        let diff = Math.abs(sumFirst - sumSecond);
        result = isNaN(result) ? diff : Math.min(result, diff);
    }
    
    return result;
}

console.log(solution([3, 1, 2, 4, 3]));
console.log(solution([ -10, -5, -3, -4, -5 ]));
console.log(solution([ -10, -20, -30, -40, 100 ]));
console.log(solution([ -1000, 1000 ]));
console.log(solution([ 1, 1 ]));