function solution(A) {
    A = A.sort((a, b) => a - b);
    if (A[0] === 2) {
        return 1;
    }
    if (A.length < 2) {
        return (A.length === 1) ? A[0] + 1 : 1;
    }
    
    let value = 0;
    A.some((e, i, ar) => { 
        if (ar[0] + i != e) {
            value = ar[0] + i;
            return ar[0] + i;
        }
    });
    return (value === 0) ? A.pop() + 1 : value;
}

console.log(solution([2, 3, 1, 5]));
console.log(solution([2, 3, 1]));
console.log(solution([4, 2, 3, 5, 1, 6, 8, 9]));
console.log(solution([ 1, 2, 3, 4, 5 ]));
console.log(solution([ 2, 3, 4, 5, 6 ]));
console.log(solution([ 2 ]));