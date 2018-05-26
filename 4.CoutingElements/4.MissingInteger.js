function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log(A);
    A = A.sort((a, b) => a - b);
    console.log(A);

    let value = 1;
    A.some((e, i) => {
        if(e > 0) {
            if(value != e && value - 1 != e) {
                return true;
            }
            value = e + 1;
        }
    });
    
    return value;
}

console.log(solution([1, 2, 3]));
console.log(solution([-1, -3]));
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([-3, -1]));
console.log(solution([1, 3, 6, 4, 1, 2, 10000, -1000]));
console.log(solution([ 1, 2, 3, 1, 1, 2, 4, 5, -1000000, 1000000 ]));
console.log(solution([]));
console.log(solution([ 90, 91, 92, 93 ]));
console.log(solution([ 3, 4, 5, 1000, -100, -200 ]));
console.log(solution([ -1000000, 1000000 ]));