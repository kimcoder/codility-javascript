function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let position;
    let avg = 10001;

    if (A.length === 2) {
        return 0;
    }
    for(let i=1; i<A.length; i++) {
        if (avg > (A[i-1] + A[i] + A[i+1])/3) {
            position = i - 1;
            avg = (A[i-1] + A[i] + A[i+1])/3;
        }
        if (avg > (A[i] + A[i-1])/2) {
            position = i - 1;
            avg = (A[i] + A[i-1])/2;
        }
    }

    return position;
}

console.log(solution([ -3, -5, -8, -4, -10 ]));
// console.log(solution([ 10, 10, -1, 2, 4, -1, 2, -1 ]));
