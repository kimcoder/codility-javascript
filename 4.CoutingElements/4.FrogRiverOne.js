function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(X, A);
    const expected = (X * (X + 1)) / 2;
    const positions = [];
    let sum = 0;
    let value = -1;
    
    A.some((e, i) => {
        if(!positions[e]) {
            positions[e] = true;
            sum += e;
            if (sum == expected) {
                value = i;
                return true;
            }
        }
    });
    
    return value;
}

console.log(solution(5, [1, 3, 1, 5, 4, 2, 3, 5, 4, 1, 5]));
console.log(solution(5, [ 1, 2, 3, 5, 3, 1 ]));
console.log(solution(2, [ 1, 1, 1 ]));
console.log(solution(2, [ 2, 2 ]));
console.log(solution(2, [ ]));
console.log(solution(3, [ 1, 3, 1, 3, 2, 1, 3 ]));